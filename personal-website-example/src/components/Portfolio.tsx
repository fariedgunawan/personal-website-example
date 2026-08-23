import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from './LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();
  const projects = [
    {
      title: t('portfolio.p1_title'),
      category: t('portfolio.p1_cat'),
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: t('portfolio.p2_title'),
      category: t('portfolio.p2_cat'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: t('portfolio.p3_title'),
      category: t('portfolio.p3_cat'),
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: t('portfolio.p4_title'),
      category: t('portfolio.p4_cat'),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: t('portfolio.p5_title'),
      category: t('portfolio.p5_cat'),
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: t('portfolio.p6_title'),
      category: t('portfolio.p6_cat'),
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (trackRef.current) {
      // clientWidth + 24px (gap-6) perfectly targets the start of the previous page
      trackRef.current.scrollBy({ left: -(trackRef.current.clientWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      // clientWidth + 24px (gap-6) perfectly targets the start of the next page
      trackRef.current.scrollBy({ left: (trackRef.current.clientWidth + 24), behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="w-full bg-white dark:bg-black transition-colors duration-500 py-20 md:py-15 overflow-hidden">
      
      {/* Header & Controls */}
      <div className="max-w-7xl mx-auto px-8 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 block transition-colors duration-500">
              {t('portfolio.label')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
              {t('portfolio.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg transition-colors duration-500">
              {t('portfolio.desc')}
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
          >
            <button 
              onClick={scrollLeft} 
              className="w-12 h-12 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm"
              aria-label="Previous project"
            >
              <FiArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-12 h-12 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm"
              aria-label="Next project"
            >
              <FiArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontally Scrolling Track */}
      {/* We use CSS scroll-snap for native, smooth carousel behavior on touch, but JS animate for buttons */}
      <motion.div 
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.3 }}
      >
        <div 
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-12 pt-4"
        >
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 snap-start w-[calc(100%)] md:w-[calc(33.3333%-16px)]">
              <div className="group relative rounded-[2rem] overflow-hidden w-full aspect-[4/3] shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
                <div className="w-full h-full bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
}
