import { Instagram, Flame } from "lucide-react";
import { INSTAGRAM_IMAGES } from "../data";

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto space-y-12">
        {/* Header banner */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-outline-variant/15 pb-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
              @TITANELITE_PERFORMANCE
            </h3>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-mono">
              Share your legacy using the #TITANELITE tag
            </p>
          </div>
          <a
            href="#instagram"
            onClick={(e) => {
              e.preventDefault();
              alert("Mock link: Redirecting to official @TITANELITE Instagram portal...");
            }}
            className="flex items-center gap-2 text-xs font-display font-bold text-primary hover:text-white uppercase tracking-widest transition-standard"
          >
            <Instagram className="w-4 h-4 text-primary-container" />
            <span>FOLLOW THE MOVEMENT</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_IMAGES.map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden h-64 md:h-80 border border-outline-variant/10 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${imgUrl}')` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex flex-col items-center gap-2">
                  <Instagram className="w-8 h-8 text-white" />
                  <span className="text-[10px] font-display font-extrabold tracking-widest text-white uppercase">
                    VIEW POST
                  </span>
                </div>
              </div>

              {/* Tag Accent */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Flame className="w-3.5 h-3.5 text-primary-container shrink-0" />
                <span className="text-[9px] font-mono font-bold text-white tracking-wider">#STRENGTH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
