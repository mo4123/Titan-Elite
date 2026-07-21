import { useState } from "react";
import { Star, ShieldCheck } from "lucide-react";

export default function TransformationStories() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface border-y border-outline-variant/15">
      <div className="max-w-container-max mx-auto space-y-16">
        {/* Title Block */}
        <div className="text-center space-y-4">
          <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
            PROOF OF THE METHOD
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase">
            LEGACIES BUILT HERE
          </h2>
          <div className="h-1 w-20 bg-primary-container mx-auto" />
        </div>

        {/* Dynamic Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual Comparison Area */}
          <div className="space-y-6">
            <div className="relative h-96 overflow-hidden border border-outline-variant/35 bg-surface-container-low group">
              {/* Month 0 image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale ${
                  activeTab === "before" ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXMK35f-k7HB6NbuLx1_h22WVGNoeMqO5S-lKV_Zasdf5fumqkRVktjCx7Xp1HGMQWtTLQMRfGvVAY6EaxZBmKi59p_0_SQM0mJX1gmv5uUxaZhwtLSLAHCrH8H1_PjMaexuhM8BUZEwdAUf-5vakbGPDd3PHp8SZHcZZMbjpppypKom-5sCnNhxYlElNtoECdr8DFhBxJu06ePduJq3WDJtEOrqft1zpt3fmoMduGRrnPsv4rpda73UF294mARVhmkbeta7kathPr')`,
                }}
              >
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1 text-[10px] font-display font-bold text-white uppercase tracking-widest select-none">
                  MONTH 0 &bull; BEFORE
                </div>
              </div>

              {/* Month 6 image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 border-2 border-primary-container ${
                  activeTab === "after" ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy6RfSMbIxSfyAvbiseOVVyWHNDBWIgP25ZgjcuMxf1dkZHXbBQp726X4fqwJr9U7e1fQjQpKJ2KQSWtaCAEAn10_bddZhaQfmDX2u5E5qO2_okNVt6WZVmWFGZX6z6UgteTAtWK9xrkYvpyHxvd1PscWi37tQrjjPbrNk9noKZC9S9xgpNGgFPNZmLNHR6wXMe-tB95eh1XXauQU2hiT3lQ0YW-ZPVh8-HuAocmlyjqwP8JjZjSyWO6pZopqA7ippSQ0z_REI7EWg')`,
                }}
              >
                <div className="absolute top-4 left-4 bg-primary-container px-4 py-1 text-[10px] font-display font-bold text-white uppercase tracking-widest select-none">
                  MONTH 6 &bull; AFTER
                </div>
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-surface-container-low border border-outline-variant/35 rounded-none">
              <button
                onClick={() => setActiveTab("before")}
                className={`py-3.5 text-xs font-display font-extrabold tracking-widest uppercase transition-standard cursor-pointer ${
                  activeTab === "before"
                    ? "bg-white text-black"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                Month 0 (Before)
              </button>
              <button
                onClick={() => setActiveTab("after")}
                className={`py-3.5 text-xs font-display font-extrabold tracking-widest uppercase transition-standard cursor-pointer ${
                  activeTab === "after"
                    ? "bg-primary-container text-white"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                Month 6 (After)
              </button>
            </div>
          </div>

          {/* Testimonial / Story Context */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-1 select-none">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            <blockquote className="font-display text-xl md:text-2xl font-semibold italic text-white leading-relaxed">
              &ldquo;TITAN ELITE didn't just rebuild my physique; it completely overhauled my baseline discipline, focus, and drive. The state-of-the-art platforms, absolute lack of distractions, and high-performance community are simply unmatched.&rdquo;
            </blockquote>

            <div className="space-y-1">
              <span className="font-display font-black text-sm tracking-[0.2em] text-primary uppercase">
                &mdash; DAVID CHEN
              </span>
              <p className="text-[10px] tracking-widest font-mono text-on-surface-variant font-medium uppercase">
                ELITE MEMBER &bull; SHIFTED 24 LBS LEAN MASS
              </p>
            </div>

            <div className="flex items-center gap-2 bg-primary-container/5 border border-primary-container/10 p-4 max-w-sm rounded-none">
              <ShieldCheck className="w-5 h-5 text-primary-container shrink-0" />
              <span className="text-xs text-on-surface-variant leading-normal">
                Results verified via clinical DEXA scans at the Titan Velocity Lab.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
