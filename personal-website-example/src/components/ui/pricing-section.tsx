import { cn } from "../../lib/utils";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  const [isRetainer, setIsRetainer] = useState(false);
  const { t, language } = useLanguage();

  const services = [
    {
      title: t("services.s3_title"),
      desc: t("services.s3_desc"),
      priceOneTime: "2.5",
      priceRetainer: "2.0",
      features: ["Wireframing & Prototyping", "High-fidelity UI", "User Flow Optimization", "3 Revisions"],
      isPopular: false,
    },
    {
      title: t("services.s1_title"),
      desc: t("services.s1_desc"),
      priceOneTime: "3.5",
      priceRetainer: "2.8",
      features: ["React / Next.js Setup", "Responsive Layout", "Interactive Animations", "SEO Friendly"],
      isPopular: true,
    },
    {
      title: t("services.s2_title"),
      desc: t("services.s2_desc"),
      priceOneTime: "4.5",
      priceRetainer: "3.6",
      features: ["REST/GraphQL API", "Database Architecture", "Authentication", "Cloud Deployment"],
      isPopular: false,
    },
    {
      title: t("services.s4_title"),
      desc: t("services.s4_desc"),
      priceOneTime: "6.0",
      priceRetainer: "4.8",
      features: ["Cross-platform (iOS/Android)", "Native Performance", "App Store Submission", "Push Notifications"],
      isPopular: false,
    },
    {
      title: t("services.s5_title"),
      desc: t("services.s5_desc"),
      priceOneTime: "5.0",
      priceRetainer: "4.0",
      features: ["Data Modeling", "Statistical Analysis", "Interactive Dashboards", "Actionable Insights"],
      isPopular: false,
    },
    {
      title: t("services.s6_title"),
      desc: t("services.s6_desc"),
      priceOneTime: "Custom",
      priceRetainer: "Custom",
      features: ["Machine Learning Models", "Workflow Automation", "Intelligent Systems", "Dedicated Support"],
      isPopular: false,
    }
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
  };

  return (
    <section className="relative w-full bg-white dark:bg-black py-24 font-sans text-black dark:text-white sm:py-32 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 transition-colors duration-500">
            Investment
          </span>
          <h2 className="mb-4 max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black dark:text-white transition-colors duration-500">
            Predictable pricing. <br className="hidden sm:block" />
            <span className="text-neutral-500 dark:text-neutral-400">High value delivery.</span>
          </h2>
          <p className="max-w-xl text-balance text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Choose a service that fits your needs. Transparent pricing in Rupiah, tailored for optimal quality and performance.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center gap-3">
            <span className={cn("text-sm font-medium transition-colors", !isRetainer ? "text-black dark:text-white" : "text-neutral-500")}>One-time Project</span>
            <button
              onClick={() => setIsRetainer(!isRetainer)}
              className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-black/10 dark:bg-white/[0.12] transition-colors hover:bg-black/20 dark:hover:bg-white/[0.2]"
              aria-label="Toggle billing cycle"
            >
              <div
                className={cn(
                  "absolute h-4 w-4 rounded-full bg-black dark:bg-white transition-transform duration-200 ease-in-out",
                  isRetainer ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("flex items-center gap-2 text-sm font-medium transition-colors", isRetainer ? "text-black dark:text-white" : "text-neutral-500")}>
              Monthly Retainer
              <span className="rounded-full bg-black/5 dark:bg-white/[0.08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-black dark:text-white">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:scale-105 hover:border-neutral-300 hover:shadow-xl hover:z-10 dark:border-white/[0.08] dark:bg-[#050505] dark:hover:border-white/[0.15] dark:hover:shadow-2xl"
              )}
            >
              <div className={cn(
                "absolute inset-x-0 top-0 h-[2px] w-full bg-black dark:bg-white rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              )} />

              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{service.desc}</p>
                </div>
                {service.isPopular && (
                  <span className="rounded-full bg-black dark:bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white dark:text-black shrink-0 ml-2">
                    Popular
                  </span>
                )}
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                {service.priceOneTime === "Custom" ? (
                  <span className="text-4xl font-extrabold tracking-tighter">Custom</span>
                ) : (
                  <>
                    <span className="text-lg font-semibold text-neutral-500">Rp</span>
                    <span className="text-4xl font-extrabold tracking-tighter">
                      {isRetainer ? service.priceRetainer : service.priceOneTime}
                    </span>
                    <span className="text-sm font-medium text-neutral-500">
                      jt {isRetainer ? "/ mo" : ""}
                    </span>
                  </>
                )}
              </div>

              <button className={cn(
                "mb-8 flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all active:scale-[0.98]",
                service.isPopular
                  ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90"
                  : "border border-neutral-200 dark:border-white/[0.12] bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/[0.05]"
              )}>
                {service.priceOneTime === "Custom" ? "Contact Us" : "Get Started"}
                <FiArrowRight className="h-4 w-4" />
              </button>

              <div className="mb-6 h-px w-full bg-neutral-200 dark:bg-white/[0.08]" />

              <ul className="flex flex-col gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className={cn("mt-0.5 h-4 w-4 shrink-0", service.isPopular ? "text-black dark:text-white" : "text-neutral-500")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Pricing Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold transition-colors duration-500 rounded-2xl shadow-lg hover:scale-105 transform-gpu"
          >
            {language === 'id' ? 'Lihat Semua Pilihan Paket' : 'View All Detailed Plans'}
            <FiArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Contact Note */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          Need a custom bundle or a larger scale project? Let's discuss a tailored pricing plan.
        </motion.div>

      </div>
    </section>
  );
};
