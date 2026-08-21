import { motion, type Variants } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

export default function GetInTouch() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  return (
    <section id="get-in-touch" className="w-full bg-white dark:bg-black transition-colors duration-500 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
           <motion.div 
             variants={containerVariants} 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true, margin: "-50px" }}
           >
             <motion.span variants={itemVariants} className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 block transition-colors duration-500">
                Let's Connect
             </motion.span>
             <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight leading-[1.1] transition-colors duration-500">
               Let's build <br/> something <span className="text-zinc-400 dark:text-zinc-600">extraordinary.</span>
             </motion.h2>
             <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 max-w-lg text-lg mb-10 leading-relaxed transition-colors duration-500">
               I'm always open to discussing product design work or partnership opportunities. Drop me a line!
             </motion.p>

             <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                {[
                  { icon: FiMail, label: "Email", href: "mailto:hello@example.com" },
                  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
                  { icon: FiGithub, label: "GitHub", href: "#" },
                  { icon: FiTwitter, label: "Twitter", href: "#" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-medium text-xs md:text-sm">{social.label}</span>
                  </motion.a>
                ))}
             </motion.div>
           </motion.div>
        </div>

        {/* Right Side: Floating Form */}
        <div className="w-full lg:w-5/12 perspective-1000">
           <motion.div
             initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
             whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 1, type: "spring", bounce: 0.4 }}
           >
             {/* Static Form Wrapper */}
             <div className="relative">
               {/* Decorative background glow behind the form */}
               <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-[2.5rem] blur-2xl opacity-50 dark:opacity-40 animate-pulse transition-colors duration-500"></div>
               
               <form 
                 onSubmit={(e) => e.preventDefault()}
                 className="relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-700/50 p-8 md:p-10 rounded-[2rem] shadow-2xl flex flex-col gap-6 overflow-hidden transition-colors duration-500"
               >
                  {/* Subtle noise/texture overlay for premium glass look */}
                  <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 relative z-10 transition-colors duration-500">Send a Message</h3>
                  
                  <div className="relative z-10 flex flex-col gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name" 
                        className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email" 
                        className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        placeholder="Tell me about your project..." 
                        className="w-full bg-zinc-50/50 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10 group w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl px-5 py-4 flex items-center justify-center gap-3 hover:bg-black dark:hover:bg-zinc-200 transition-colors duration-300 mt-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <FiSend className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
               </form>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
