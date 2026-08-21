import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import GradientWaves from './GradientWaves';
import { useTheme } from './ThemeProvider';

const PROJECTS = [
  {
    id: "griche",
    name: "Griche Project",
    category: "Product Advertising",
    description: "Website pengiklanan produk usaha dengan desain menarik untuk meningkatkan konversi.",
    url: "https://griche-project.vercel.app",
  },
  {
    id: "arthamuda",
    name: "ArthaMuda",
    category: "Financial Management",
    description: "Aplikasi web kelola keuangan modern.",
    note: "Demo login: demo@demo.com / demo123",
    url: "https://artha-muda-web-p7l3.vercel.app",
  },
  {
    id: "company",
    name: "Corporate Profile",
    category: "Corporate Website",
    description: "Company profile profesional yang menonjolkan kredibilitas perusahaan.",
    url: "https://company-profile-example-nine.vercel.app",
  },
  {
    id: "travel",
    name: "Travel Marketing",
    category: "Tourism Website",
    description: "Website travel marketing untuk mempromosikan destinasi wisata dan paket liburan.",
    url: "https://travel-marketing-website-example-4s.vercel.app/",
  },
  {
    id: "school",
    name: "School Portal",
    category: "Education Website",
    description: "Sistem informasi sekolah terpadu dengan antarmuka yang bersih dan mudah digunakan.",
    url: "https://school-website-example.vercel.app/",
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="w-full bg-white dark:bg-black transition-colors duration-500 py-15 overflow-hidden relative">
      <GradientWaves
        horizonColor={isDark ? "#000000" : "#ffffff"}
        waveColor={isDark ? "#27272a" : "#d4d4d8"}
        crestColor={isDark ? "#71717a" : "#52525b"}
        speed={0.4}
        amplitude={2.5}
        className="absolute inset-0 z-0 opacity-50 transition-colors duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black z-0 pointer-events-none transition-colors duration-500"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 block transition-colors duration-500">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight transition-colors duration-500">
            Interactive Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg transition-colors duration-500">
            A selection of my recent works. Select a project from the list to explore it live directly in the browser mockup below.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col gap-10 w-full">
          
          {/* Top: Project Selection Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 w-full snap-x snap-mandatory">
            {PROJECTS.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`relative flex-shrink-0 snap-start px-6 py-3 rounded-full transition-all duration-300 border backdrop-blur-md ${
                    isActive 
                    ? "bg-black/90 dark:bg-white/90 text-white dark:text-black border-transparent" 
                    : "bg-white/50 dark:bg-black/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900"
                  }`}
                >
                  <span className="font-semibold whitespace-nowrap">{project.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Project Info */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{activeProject.category}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-zinc-900 dark:text-white">
                  {activeProject.name}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>
              
              {activeProject.note && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-xl text-xs font-mono border border-yellow-200 dark:border-yellow-900/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                  </span>
                  {activeProject.note}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom: Massive Browser Mockup */}
          <div className="w-full">
            <motion.div 
              className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-500 flex flex-col h-[600px] md:h-[750px] lg:h-[850px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            >
              {/* Browser Header */}
              <div className="h-12 md:h-14 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md flex items-center px-4 md:px-6 transition-colors duration-500 relative">
                <div className="flex gap-2 absolute left-4 md:left-6">
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="flex-1 max-w-[200px] md:max-w-md mx-auto flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-1.5 md:py-2 px-4 text-xs md:text-sm text-zinc-500 font-medium truncate transition-colors duration-500 shadow-sm">
                  <span className="truncate flex items-center gap-2">
                    <FiExternalLink className="opacity-70 flex-shrink-0" />
                    {activeProject.url.replace('https://', '')}
                  </span>
                </div>
                <a 
                  href={activeProject.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute right-4 md:right-6 text-xs md:text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 py-1.5 md:py-2 px-3 md:px-4 rounded-lg"
                >
                  Open
                </a>
              </div>
              
              {/* Browser Body (Iframe) */}
              <div className="flex-1 relative bg-zinc-100 dark:bg-zinc-900">
                {/* Loader Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-white animate-spin"></div>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeProject.id}
                    src={activeProject.url}
                    className="absolute inset-0 w-full h-full border-0 bg-white"
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    title={activeProject.name}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
