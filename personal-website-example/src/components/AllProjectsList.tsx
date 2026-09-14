import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import GradientWaves from './GradientWaves';
import { useTheme } from './ThemeProvider';

export default function AllProjectsList() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const PROJECTS = [
    {
      id: "bgs-profile",
      name: t('projects.p6_name') as string,
      category: t('projects.p6_cat') as string,
      description: t('projects.p6_desc') as string,
      url: "https://teambgs.ninja",
      note: t('projects.p6_note') as string
    },
    {
      id: "bgs-system",
      name: t('projects.p7_name') as string,
      category: t('projects.p7_cat') as string,
      description: t('projects.p7_desc') as string,
      url: "https://teambgs.ninja/sistem",
      note: t('projects.p7_note') as string
    },
    {
      id: "griche",
      name: t('projects.p1_name'),
      category: t('projects.p1_cat'),
      description: t('projects.p1_desc'),
      url: "https://griche-project.vercel.app",
      note: t('projects.p1_note')
    },
    {
      id: "arthamuda",
      name: t('projects.p2_name'),
      category: t('projects.p2_cat'),
      description: t('projects.p2_desc'),
      url: "https://artha-muda-web-p7l3.vercel.app",
      note: t('projects.p2_note')
    },
    {
      id: "company",
      name: t('projects.p3_name'),
      category: t('projects.p3_cat'),
      description: t('projects.p3_desc'),
      url: "https://company-profile-example-nine.vercel.app",
      note: t('projects.p3_note')
    },
    {
      id: "travel",
      name: t('projects.p4_name'),
      category: t('projects.p4_cat'),
      description: t('projects.p4_desc'),
      url: "https://travel-marketing-website-example-4s.vercel.app/",
      note: t('projects.p4_note')
    },
    {
      id: "school",
      name: t('projects.p5_name'),
      category: t('projects.p5_cat'),
      description: t('projects.p5_desc'),
      url: "https://school-website-example.vercel.app/",
      note: t('projects.p5_note')
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-black transition-colors duration-500 pt-32 pb-24 relative overflow-hidden">
      <GradientWaves
        horizonColor={isDark ? "#000000" : "#ffffff"}
        waveColor={isDark ? "#27272a" : "#d4d4d8"}
        crestColor={isDark ? "#71717a" : "#52525b"}
        speed={0.4}
        amplitude={2.5}
        className="absolute inset-0 z-0 opacity-30 transition-colors duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black z-0 pointer-events-none transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-8 text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-800"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
            All Case Studies
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl">
            A complete collection of my recent works and templates, presented in detail.
          </p>
        </motion.div>

        {/* List of Blocks */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {PROJECTS.map((project) => (
            <div key={project.id} className="flex flex-col gap-8 md:gap-10">
              
              {/* Project Info Block */}
              <motion.div 
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">{project.category}</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {project.note && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-xl text-xs font-mono border border-yellow-200 dark:border-yellow-900/50 shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    {project.note}
                  </div>
                )}
              </motion.div>

              {/* Browser Mockup Block */}
              <motion.div 
                className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-500 flex flex-col h-[500px] md:h-[700px] lg:h-[800px]"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
              >
                {/* Browser Header */}
                <div className="h-12 md:h-14 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md flex items-center px-4 md:px-6 relative">
                  <div className="flex gap-2 absolute left-4 md:left-6">
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                  </div>
                  <div className="flex-1 max-w-[200px] md:max-w-md mx-auto flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-1.5 md:py-2 px-4 text-xs md:text-sm text-zinc-500 font-medium truncate shadow-sm">
                    <span className="truncate flex items-center gap-2">
                      <FiExternalLink className="opacity-70 flex-shrink-0" />
                      {project.url.replace('https://', '')}
                    </span>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute right-4 md:right-6 text-xs md:text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 py-1.5 md:py-2 px-3 md:px-4 rounded-lg"
                  >
                    Open
                  </a>
                </div>
                
                {/* Browser Body (Iframe) */}
                <div className="flex-1 relative bg-zinc-100 dark:bg-zinc-900">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-zinc-300 dark:border-zinc-800 border-t-zinc-900 dark:border-t-white animate-spin"></div>
                  </div>
                  <iframe
                    src={project.url}
                    className="absolute inset-0 w-full h-full border-0 bg-white"
                    title={project.name}
                    loading="lazy"
                  />
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
