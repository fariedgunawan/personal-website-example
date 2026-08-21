import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-black transition-colors duration-500 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-500">
              Lorem<span className="text-zinc-400 dark:text-zinc-600">Dev</span>
            </span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left transition-colors duration-500">
              Building extraordinary digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
            <li><a href="#hero" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Home</a></li>
            <li><a href="#about-us" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">About</a></li>
            <li><a href="#my-service" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Services</a></li>
            <li><a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">FAQ</a></li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: "#", label: "GitHub" },
              { icon: FiLinkedin, href: "#", label: "LinkedIn" },
              { icon: FiTwitter, href: "#", label: "Twitter" },
              { icon: FiInstagram, href: "#", label: "Instagram" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-8 transition-colors duration-500"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-500 transition-colors duration-500">
          <p>© {currentYear} LoremDev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
