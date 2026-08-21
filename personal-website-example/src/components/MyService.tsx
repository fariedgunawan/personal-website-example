import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SERVICES = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Next.js.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "02",
    title: "Backend Architecture",
    description: "Designing scalable APIs and microservices with robust database structures for high-performance applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "Crafting intuitive user experiences with a focus on modern aesthetics, usability, and seamless interactions.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200",
  },
  {
    id: "04",
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications that deliver native-like performance and beautiful interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function MyService() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section id="my-service" className="w-full bg-white dark:bg-black py-20 md:py-15 transition-colors duration-500 overflow-hidden">
      <div className="w-full px-8 max-w-7xl mx-auto">
        
        {/* Centered Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24 flex flex-col items-center"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 transition-colors duration-500">
            What I Do
          </span>
          <h2 className="tracking-tighter text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white transition-colors duration-500 max-w-3xl">
            Specialized Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full order-1 lg:order-1">
            <motion.div
              className="relative group/gallery w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors duration-500 shadow-2xl">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <FiArrowLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <FiArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-2">
            <motion.div 
              className="flex flex-col space-y-0 relative h-[440px] md:h-[500px] lg:h-[560px] justify-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.4 }}
            >
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={`group relative flex items-start gap-6 py-6 md:py-8 text-left transition-all duration-500 border-t border-zinc-200 dark:border-zinc-800 first:border-0 ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                  >
                    <div className="absolute left-[-16px] md:left-[-32px] top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 transition-colors duration-500">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-zinc-900 dark:bg-white origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>

                    <span className="text-[10px] md:text-[12px] font-bold mt-1 tabular-nums opacity-50 uppercase tracking-widest">
                      {service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors duration-500 ${isActive ? "text-zinc-900 dark:text-white" : ""
                          }`}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-sm pb-2 mt-2 transition-colors duration-500">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
