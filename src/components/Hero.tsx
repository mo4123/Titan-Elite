interface HeroProps {
  onStartTraining: () => void;
  onViewPlans: () => void;
}

export default function Hero({ onStartTraining, onViewPlans }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-[90px]">
      {/* Background image & overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-background z-10" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGWq-rBkMXLtZ4xeUXJtzyGnu7A2g5EMyEGBy9bew-kxIYGggmrw85ovo68h7D2z96TIOnbP04gZgOicAUy20SSFHQTrU9GGERjX3tDXxm0uKUcdGOlS4oyJ94axUG6d3-EgCUUNXpANRjeL3SqlJZkO9MaH26UWKNXCfa5pHg1CEZpkg4J53oTOlloKz8mu2uyTdFdyPfuUS9JJNC5ADqz1-qffcJsCfzaH-pEC0duhvB6qBemCOyY0ldIJ4conZHazJ0VnaVmDRJ')`,
          }}
        />
      </div>

      {/* Cinematic Content */}
      <div className="relative z-20 text-center px-margin-mobile max-w-4xl mx-auto space-y-6">
        <p className="text-primary-container font-display font-extrabold text-[11px] md:text-xs tracking-[0.4em] uppercase">
          PITAN OF ATHLETIC EXCELLENCE
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-black leading-none tracking-tighter uppercase select-none">
          FORGE YOUR <span className="text-primary-container">LEGACY</span>
        </h1>
        <p className="text-on-surface-variant font-sans max-w-xl mx-auto text-sm md:text-base leading-relaxed md:font-light">
          The ultimate physical arena for performance, metabolic strength, and luxury biohacking. No excuses. Just elite results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button 
            onClick={onStartTraining}
            className="w-full sm:w-auto bg-primary-container text-white px-10 py-5 font-display font-extrabold text-xs tracking-[0.2em] uppercase rounded-none hover:bg-red-700 hover:scale-[1.03] active:scale-95 transition-standard cursor-pointer"
          >
            Start Training
          </button>
          <button 
            onClick={onViewPlans}
            className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black px-10 py-5 font-display font-extrabold text-xs tracking-[0.2em] uppercase rounded-none hover:scale-[1.03] active:scale-95 transition-standard cursor-pointer"
          >
            View Plans
          </button>
        </div>
      </div>

      {/* Vertical scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-on-surface-variant">
        <span className="text-[9px] tracking-[0.3em] font-display font-bold uppercase opacity-60">
          SCROLL
        </span>
        <div className="w-px h-12 bg-outline-variant/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-container animate-bounce" />
        </div>
      </div>
    </section>
  );
}
