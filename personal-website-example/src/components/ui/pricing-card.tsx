import { FiCheck, FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/utils";

export interface PricingPackage {
  name: string;
  desc: string;
  /** Display-ready price, e.g. "600rb", "2jt", or "Custom". Never a raw float. */
  price: string;
  /** Small line under the price, e.g. "s/d Rp5jt · one time" or "per mandays". */
  note?: string;
  features: string[];
  isPopular?: boolean;
  /** True when `price` is a minimum (e.g. 500rb++), shows "Starting from" instead of "Negotiable". */
  startingFrom?: boolean;
}

interface PricingCardProps {
  pkg: PricingPackage;
  ctaLabel: string;
  popularLabel: string;
  startingLabel: string;
  startingFromLabel?: string;
  className?: string;
}

export const PricingCard = ({ pkg, ctaLabel, popularLabel, startingLabel, startingFromLabel, className }: PricingCardProps) => {
  const isCustom = pkg.price === "Custom";
  const priceLabel = pkg.startingFrom && startingFromLabel ? startingFromLabel : startingLabel;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border bg-neutral-50 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#050505] dark:hover:shadow-2xl",
        pkg.isPopular
          ? "border-black/80 dark:border-white/40"
          : "border-neutral-200 hover:border-neutral-300 dark:border-white/[0.08] dark:hover:border-white/[0.15]",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] w-full rounded-t-2xl bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white" />

      {/* Header — fixed min-height so prices line up across cards */}
      <div className="flex min-h-[4.5rem] items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white">{pkg.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 line-clamp-2 dark:text-neutral-400">{pkg.desc}</p>
        </div>
        {pkg.isPopular && (
          <span className="shrink-0 rounded-full bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-white dark:text-black">
            {popularLabel}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-6 mb-8 min-h-[5.5rem]">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {isCustom ? "\u00A0" : priceLabel}
        </span>
        <div className="mt-1 flex items-baseline gap-1">
          {!isCustom && <span className="text-lg font-semibold text-neutral-500">Rp</span>}
          <span className="text-4xl font-extrabold tracking-tighter text-black dark:text-white">{pkg.price}</span>
        </div>
        {pkg.note && <span className="mt-1 block text-sm text-neutral-500">{pkg.note}</span>}
      </div>

      <a
        href="/#get-in-touch"
        className={cn(
          "mb-8 flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all active:scale-[0.98]",
          pkg.isPopular
            ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
            : "border border-neutral-200 bg-transparent text-black hover:bg-black/5 dark:border-white/[0.12] dark:text-white dark:hover:bg-white/[0.05]"
        )}
      >
        {ctaLabel}
        <FiArrowRight className="h-4 w-4" />
      </a>

      <div className="mb-6 h-px w-full bg-neutral-200 dark:bg-white/[0.08]" />

      <ul className="flex flex-1 flex-col gap-3.5 text-sm text-neutral-700 dark:text-neutral-300">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <FiCheck className={cn("mt-0.5 h-4 w-4 shrink-0", pkg.isPopular ? "text-black dark:text-white" : "text-neutral-500")} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
