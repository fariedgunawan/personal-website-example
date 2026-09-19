import { motion, type Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from './LanguageContext';

import img1 from '../assets/aboutme_assets/1.webp';
import img2 from '../assets/aboutme_assets/2.webp';
import img3 from '../assets/aboutme_assets/3.webp';
import img4 from '../assets/aboutme_assets/4.webp';
import img5 from '../assets/aboutme_assets/5.webp';
import img6 from '../assets/aboutme_assets/6.webp';
import img7 from '../assets/aboutme_assets/7.webp';
import img8 from '../assets/aboutme_assets/8.webp';
import img9 from '../assets/aboutme_assets/9.webp';
import img10 from '../assets/aboutme_assets/10.webp';
import { useState, useEffect, useRef } from 'react';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const allImages = images.map((src, id) => ({ id, src }));

const generateSquares = () => {
  return shuffle([...allImages]).map((sq, index) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={`w-full h-full rounded-lg md:rounded-xl shadow-sm bg-zinc-200 dark:bg-zinc-800 ${
        index < 2 ? 'col-span-2 row-span-2' : ''
      }`}
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></motion.div>
  ));
};

export default function AboutUs() {
  const { t } = useLanguage();
  
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
    
    // start shuffle loop
    shuffleSquares();
    
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', bounce: 0.4 },
    },
  };

  return (
    <section id="about-us" className="w-full bg-white dark:bg-black py-24 md:py-32 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span variants={itemVariants} className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4">
              {t('about.label')}
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tight">
              {t('about.title1')}<span className="text-zinc-500 dark:text-zinc-400">{t('about.title2')}</span>{t('about.title3')}<span className="text-zinc-500 dark:text-zinc-400">{t('about.title4')}</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
              {t('about.p1')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
              {t('about.p2')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex mt-2">
              <a 
                href="https://personal-website-faried.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold transition-colors duration-500 rounded-2xl shadow-lg hover:scale-105 transform-gpu"
              >
                {t('about.cta')}
                <FiArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </a>
            </motion.div>


          </motion.div>

          {/* Right Column: Image and Decorative Elements */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end min-h-[400px]">
            <div className="grid grid-cols-4 grid-rows-4 w-full max-w-lg xl:max-w-xl aspect-square gap-2">
              {squares}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
