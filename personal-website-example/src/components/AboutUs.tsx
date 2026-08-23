import { motion, type Variants } from 'framer-motion';
import me from "../assets/faried.webp"
import { useLanguage } from './LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();
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

            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10">
              {t('about.p2')}
            </motion.p>


          </motion.div>

          {/* Right Column: Image and Decorative Elements */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img
                src={me}
                alt="Portrait"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-2xl md:rounded-[2rem] pointer-events-none" />
            </motion.div>





          </div>

        </div>
      </div>
    </section>
  );
}
