import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 w-full flex justify-center transition-all duration-500 ease-in-out ${scrolled ? 'top-4 px-4 md:px-6' : 'top-0 px-0'}`}>
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`w-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border-b sm:border border-zinc-200 dark:border-zinc-800 flex items-center justify-between transition-all duration-500 ease-in-out
          ${scrolled 
            ? 'max-w-5xl px-6 py-3 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]' 
            : 'max-w-full px-6 md:px-12 py-4 rounded-none shadow-none border-t-0 border-l-0 border-r-0 sm:border-t-0 sm:border-l-0 sm:border-r-0'
          }`}
      >
        <a href="#" className="font-bold text-2xl tracking-tighter text-zinc-900 dark:text-white">
          Lorem<span className="text-zinc-500 dark:text-zinc-400">Dev</span>
        </a>

        <ul className="hidden md:flex gap-6 lg:gap-8 items-center font-medium">
          <li><a href="#hero" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">{t('nav.home')}</a></li>
          <li><a href="#about-us" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">{t('nav.about')}</a></li>
          <li><a href="#my-service" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">{t('nav.services')}</a></li>
          <li><a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">{t('nav.projects')}</a></li>
          <li><a href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">{t('nav.faq')}</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors relative group"
            aria-label="Toggle language"
          >
            <FiGlobe size={18} />
            <span className="absolute -bottom-8 bg-black dark:bg-white text-white dark:text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
              {language === 'en' ? 'ID' : 'EN'}
            </span>
          </button>

          <a href="#get-in-touch" className="px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow-lg shadow-black/10 dark:shadow-white/10 hover:scale-105 transition-transform text-sm hidden sm:block">
            {t('nav.contact')}
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
