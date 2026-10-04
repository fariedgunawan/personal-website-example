import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/LanguageContext";
import { cn } from "../lib/utils";
import Footer from "../components/Footer";
import { PricingCard, type PricingPackage } from "../components/ui/pricing-card";

type TabKey = "ai" | "apps" | "frontend" | "backend" | "uiux" | "deployment";

const TAB_KEYS: TabKey[] = ["ai", "apps", "frontend", "backend", "uiux", "deployment"];

export default function PricingPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("ai");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activePackages = (t(`pricing_page.packages.${activeTab}`) as unknown as PricingPackage[]) || [];

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
            {t("pricing_page.eyebrow")}
          </span>
          <h1 className="mb-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black dark:text-white transition-colors duration-500">
            {t("pricing_page.title")}
          </h1>
          <p className="max-w-xl text-balance text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {t("pricing_page.subtitle")}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-1 bg-neutral-100 dark:bg-neutral-900/50 p-1.5 rounded-2xl border border-neutral-200 dark:border-white/10">
            {TAB_KEYS.map((id) => (
              <button
                key={id}
                id={`pricing-tab-${id}`}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300",
                  activeTab === id ? "text-black dark:text-white" : "text-neutral-500 hover:text-black dark:hover:text-white"
                )}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="activeTabPricing"
                    className="absolute inset-0 bg-white dark:bg-black rounded-xl shadow-sm border border-neutral-200 dark:border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{t(`pricing_page.tabs.${id}`)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards — flex-wrap + centered so 1 or 2 cards stay aligned in the middle */}
        <div className="w-full pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex w-full flex-wrap items-stretch justify-center gap-6"
            >
              {activePackages.map((pkg, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
                >
                  <PricingCard
                    pkg={pkg}
                    ctaLabel={pkg.price === "Custom" ? t("pricing_page.cta_custom") : t("pricing_page.cta")}
                    popularLabel={t("pricing_page.popular")}
                    startingLabel={t("pricing_page.starting")}
                    startingFromLabel={t("pricing_page.starting_from")}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-neutral-500">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            {t("pricing_page.custom_note")}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
