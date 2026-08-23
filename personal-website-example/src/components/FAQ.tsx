import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "./LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
      meta: "Discovery",
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
      meta: "Collaboration",
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
      meta: "Systems",
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
      meta: "Quality",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full bg-white dark:bg-black transition-colors duration-500 py-15 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-8 relative z-10 flex flex-col gap-10 lg:max-w-5xl lg:px-12">
        
        {/* Header */}
        <motion.div 
          className="mb-6 md:mb-10"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 block transition-colors duration-500">
            {t('faq.label')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight transition-colors duration-500 max-w-xl">
            {t('faq.title1')}<span className="text-zinc-500 dark:text-zinc-400">{t('faq.title2')}</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg text-lg transition-colors duration-500">
            {t('faq.desc')}
          </p>
        </motion.div>

        {/* FAQ List */}
        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <motion.li
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 shadow-sm hover:shadow-md dark:shadow-none"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  className="relative flex w-full items-start gap-4 md:gap-6 px-6 py-6 md:px-8 md:py-7 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
                >
                  {/* Icon */}
                  <span
                    className={`relative flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${
                      open 
                      ? "border-zinc-400 dark:border-zinc-500 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" 
                      : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 border-zinc-400 dark:border-zinc-500 transition-opacity duration-300 ${open ? "animate-ping opacity-100" : ""}`}
                    />
                    <svg
                      className={`relative h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 ${open ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>

                  <div className="flex flex-1 flex-col gap-3 md:gap-4 mt-0 md:mt-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 mt-1 md:mt-1.5">
                      <h3 className={`text-lg md:text-xl font-semibold leading-tight transition-colors duration-300 ${
                        open ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white"
                      }`}>
                        {item.question}
                      </h3>
                      {item.meta && (
                        <span
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400`}
                        >
                          {item.meta}
                        </span>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl pt-2 pb-2">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
