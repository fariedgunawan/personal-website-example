import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '../translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'id')) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
