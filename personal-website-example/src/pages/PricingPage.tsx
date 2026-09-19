import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../components/LanguageContext";
import { cn } from "../lib/utils";
import Footer from "../components/Footer";

type TabKey = "frontend" | "backend" | "uiux" | "mobile" | "data" | "ai";

export default function PricingPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const [isRetainer, setIsRetainer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs: { id: TabKey; label: string }[] = [
    { id: "frontend", label: t("pricing_page.tabs.frontend") },
    { id: "backend", label: t("pricing_page.tabs.backend") },
    { id: "uiux", label: t("pricing_page.tabs.uiux") },
    { id: "mobile", label: t("pricing_page.tabs.mobile") },
    { id: "data", label: t("pricing_page.tabs.data") },
    { id: "ai", label: t("pricing_page.tabs.ai") },
  ];

  // Safely get the active packages from translations
  const activePackages: any[] = t(`pricing_page.packages.${activeTab}`) as any;

  return (
    <div className="w-full bg-white dark:bg-black min-h-screen pt-28 sm:pt-36 flex flex-col transition-colors duration-500">
      <main className="flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] mb-4 transition-colors duration-500">
            Investment
          </span>
          <h1 className="mb-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black dark:text-white transition-colors duration-500">
            {t("pricing_page.title")}
          </h1>
          <p className="max-w-xl text-balance text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {t("pricing_page.subtitle")}
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
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-neutral-100 dark:bg-neutral-900/50 p-2 rounded-2xl border border-neutral-200 dark:border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300",
                  activeTab === tab.id ? "text-black dark:text-white" : "text-neutral-500 hover:text-black dark:hover:text-white"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabPricing"
                    className="absolute inset-0 bg-white dark:bg-black rounded-xl shadow-sm border border-neutral-200 dark:border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="w-full pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {activePackages && activePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={cn(
                    "group relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:scale-105 hover:border-neutral-300 hover:shadow-xl hover:z-10 dark:border-white/[0.08] dark:bg-[#050505] dark:hover:border-white/[0.15] dark:hover:shadow-2xl"
                  )}
                >
                  <div className={cn(
                    "absolute inset-x-0 top-0 h-[2px] w-full bg-black dark:bg-white rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  )} />

                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">{pkg.name}</h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{pkg.desc}</p>
                    </div>
                    {pkg.isPopular && (
                      <span className="rounded-full bg-black dark:bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white dark:text-black shrink-0 ml-2">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-8 flex items-baseline gap-1">
                    {pkg.price === "Custom" ? (
                      <span className="text-4xl font-extrabold tracking-tighter">Custom</span>
                    ) : (
                      <>
                        <span className="text-lg font-semibold text-neutral-500">Rp</span>
                        <span className="text-4xl font-extrabold tracking-tighter">
                          {isRetainer ? (parseFloat(pkg.price) * 0.8).toFixed(1) : pkg.price}
                        </span>
                        <span className="text-sm font-medium text-neutral-500">
                          jt {isRetainer ? "/ mo" : ""}
                        </span>
                      </>
                    )}
                  </div>

                  <button className={cn(
                    "mb-8 flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all active:scale-[0.98]",
                    pkg.isPopular
                      ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90"
                      : "border border-neutral-200 dark:border-white/[0.12] bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/[0.05]"
                  )}>
                    {pkg.price === "Custom" ? "Contact Us" : "Get Started"}
                    <FiArrowRight className="h-4 w-4" />
                  </button>

                  <div className="mb-6 h-px w-full bg-neutral-200 dark:bg-white/[0.08]" />

                  <ul className="flex flex-col gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {pkg.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheck className={cn("mt-0.5 h-4 w-4 shrink-0", pkg.isPopular ? "text-black dark:text-white" : "text-neutral-500")} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
