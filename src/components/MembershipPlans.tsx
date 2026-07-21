import { Check, Info } from "lucide-react";
import { MEMBERSHIP_TIERS } from "../data";
import { MembershipTier } from "../types";

interface MembershipPlansProps {
  onSelectPlan: (tier: MembershipTier) => void;
}

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="membership">
      <div className="max-w-container-max mx-auto space-y-16">
        {/* Title Block */}
        <div className="text-center space-y-4">
          <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
            CHOOSE YOUR INTENSITY
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase">
            MEMBERSHIP LEVELS
          </h2>
          <div className="h-1 w-20 bg-primary-container mx-auto" />
          <p className="text-sm text-on-surface-variant max-w-md mx-auto">
            Select an elite entry package customized to your performance and recovery requirements.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`glass-card p-8 md:p-10 flex flex-col justify-between transition-standard hover-lift relative ${
                tier.mostPopular 
                  ? "border-primary-container bg-surface-container-high md:scale-105 z-10 shadow-2xl" 
                  : "border-outline-variant/30"
              }`}
            >
              {/* Popular Badge */}
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-[9px] tracking-[0.25em] font-display font-extrabold px-6 py-1.5 uppercase shadow-md select-none">
                  MOST POPULAR
                </div>
              )}

              {/* Upper Section */}
              <div className="space-y-6 text-center">
                <span className="text-primary font-display font-black text-xs tracking-[0.25em] block uppercase">
                  {tier.name}
                </span>

                <div className="flex justify-center items-baseline select-none">
                  <span className="text-white font-display text-4xl md:text-5xl font-black tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-on-surface-variant text-xs tracking-wider uppercase font-medium ml-1">
                    /mo
                  </span>
                </div>

                <div className="h-px bg-outline-variant/25 w-full" />

                {/* Features List */}
                <ul className="space-y-4 text-left">
                  {tier.features.map((feature, idx) => {
                    const isNotIncluded = feature.includes("Not Included");
                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 text-sm transition-opacity duration-300 ${
                          isNotIncluded ? "opacity-35 line-through decoration-red-900" : "text-on-surface"
                        }`}
                      >
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isNotIncluded ? "text-on-surface-variant" : "text-primary-container"}`} />
                        <span className="font-light">{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-10">
                <button
                  onClick={() => onSelectPlan(tier)}
                  className={`w-full py-4 font-display font-black text-xs tracking-widest uppercase transition-standard cursor-pointer ${
                    tier.mostPopular
                      ? "bg-primary-container text-white hover:bg-red-700"
                      : "border border-outline-variant text-white hover:bg-white hover:text-black hover:border-white"
                  }`}
                >
                  SELECT PLAN
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-on-surface-variant/75 uppercase tracking-wider">
                  <Info className="w-3 h-3" />
                  <span>Cancel anytime. No lock-in contracts.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
