import { motion, type Variants } from "framer-motion";
import GradientWaves from "./GradientWaves";
import RotatingText from "./RotatingText";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center py-16 px-8 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      <GradientWaves
        horizonColor={isDark ? "#000000" : "#ffffff"}
        waveColor={isDark ? "#27272a" : "#d4d4d8"}
        crestColor={isDark ? "#71717a" : "#52525b"}
        speed={0.4}
        amplitude={2.5}
        className="absolute inset-0 z-0 transition-colors duration-500"
      />
      {/* Gradient fade to smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white dark:from-black to-transparent z-0 pointer-events-none transition-colors duration-500"></div>
      <motion.div 
        className="max-w-4xl w-full text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block py-1.5 px-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold tracking-wider uppercase mb-2 rounded-2xl transition-colors duration-500">
            {t('hero.badge')}
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight tracking-tight flex flex-col items-center justify-center gap-2 sm:gap-4 transition-colors duration-500"
        >
          <span>{t('hero.title')}</span>
          <RotatingText
            texts={t('hero.rotating') as unknown as string[]}
            mainClassName="text-zinc-500 dark:text-zinc-400 overflow-hidden justify-center transition-colors duration-500"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 transition-colors duration-500"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            href="#get-in-touch"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold transition-colors duration-500 w-full sm:w-auto rounded-2xl"
          >
            {t('hero.cta_primary')}
          </motion.a>
          
          <motion.a 
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white hover:bg-zinc-100 text-black border border-zinc-300 hover:border-zinc-400 dark:bg-black dark:hover:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:border-zinc-500 font-semibold transition-colors duration-500 w-full sm:w-auto rounded-2xl"
          >
            {t('hero.cta_secondary')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
