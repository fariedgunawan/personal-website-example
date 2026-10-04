import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../LanguageContext";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { PricingCard, type PricingPackage } from "./pricing-card";

export const PricingSection = () => {
  const { t } = useLanguage();

  // Homepage highlights the 3 focus offerings: AI Solutions, Full Stack Apps, AI-powered Apps.
  // Data comes from the same source as /pricing so prices never drift apart.
  const aiPackages = t("pricing_page.packages.ai") as unknown as PricingPackage[];
  const appPackages = t("pricing_page.packages.apps") as unknown as PricingPackage[];
  const featured: PricingPackage[] = [aiPackages[0], appPackages[0], appPackages[1]].filter(Boolean);

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
            {t("pricing_page.eyebrow")}
          </span>
          <h2 className="mb-4 max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black dark:text-white transition-colors duration-500">
            {t("pricing_page.home_title")} <br className="hidden sm:block" />
            <span className="text-neutral-500 dark:text-neutral-400">{t("pricing_page.home_title_muted")}</span>
          </h2>
          <p className="max-w-xl text-balance text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {t("pricing_page.home_subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featured.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={index === featured.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full" : ""}
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
            id="view-all-pricing"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold transition-colors duration-500 rounded-2xl shadow-lg hover:scale-105 transform-gpu"
          >
            {t("pricing_page.view_all")}
            <FiArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Contact Note */}
        <motion.p
          className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex h-2 w-2 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          {t("pricing_page.custom_note")}
        </motion.p>

      </div>
    </section>
  );
};
