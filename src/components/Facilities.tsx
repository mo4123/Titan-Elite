import { useState } from "react";
import { Check, Dumbbell, Zap, Sparkles, Activity, Eye, X } from "lucide-react";
import { FACILITIES } from "../data";
import { Facility } from "../types";

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "forge":
        return <Dumbbell className="w-5 h-5 text-primary" />;
      case "velocity":
        return <Zap className="w-5 h-5 text-primary" />;
      case "recovery":
        return <Sparkles className="w-5 h-5 text-primary" />;
      default:
        return <Activity className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-24 bg-surface-container-lowest" id="clubs">
      <div className="max-w-container-max mx-auto space-y-16 px-margin-mobile md:px-margin-desktop">
        {/* Title Block */}
        <div className="text-center space-y-4">
          <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
            EXPLORE THE ARENA
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase">
            FACILITIES GALLERY
          </h2>
          <div className="h-1 w-20 bg-primary-container mx-auto" />
          <p className="text-sm text-on-surface-variant max-w-md mx-auto">
            Three premium performance hubs designed for elite physical stimulus, biometric output, and clinical recovery.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden h-[450px] border border-outline-variant/20 hover:border-primary-container/40 transition-standard cursor-pointer flex flex-col justify-end"
              onClick={() => setSelectedFacility(facility)}
            >
              {/* Background image & zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${facility.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Quick View Floating Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-md border border-white/10 p-2 text-white">
                <Eye className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary-container/20 border border-primary-container/35">
                    {getIcon(facility.id)}
                  </div>
                  <span className="text-primary font-display font-extrabold text-[10px] tracking-[0.2em] uppercase">
                    {facility.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white font-black tracking-tighter uppercase">
                  {facility.name}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed line-clamp-2">
                  {facility.desc}
                </p>

                <div className="pt-2 text-primary-container font-display font-extrabold text-[10px] tracking-[0.25em] uppercase group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                  EXPLORE SPECS &bull; VIEW INFO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Specs Dialog Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden rounded-none border border-outline-variant/40 bg-surface-container-lowest text-on-surface shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedFacility(null)}
                className="bg-black/80 border border-white/10 text-white hover:text-primary-container p-2 transition-standard"
                aria-label="Close Facility Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-48 md:h-56 bg-cover bg-center relative" style={{ backgroundImage: `url('${selectedFacility.image}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-black/20" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="p-1.5 bg-primary-container text-white">
                  {getIcon(selectedFacility.id)}
                </div>
                <h4 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tighter leading-none">
                  {selectedFacility.name}
                </h4>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-display font-extrabold tracking-[0.3em] text-primary uppercase">
                  {selectedFacility.tag}
                </span>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {selectedFacility.desc}
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-outline-variant/20 pb-2">
                  COMPETITION-GRADE EQUIPMENT SPECIFICATIONS
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {selectedFacility.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs font-light text-on-surface">
                      <Check className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telemetry/Live Occupancy Details */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-surface-container border border-outline-variant/15 text-center">
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">LIVE VOLUME</p>
                  <p className="font-display font-black text-base text-green-400 mt-1">
                    {selectedFacility.id === "forge" ? "42%" : selectedFacility.id === "velocity" ? "68%" : "25%"}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">TEMP</p>
                  <p className="font-display font-black text-base text-white mt-1">
                    {selectedFacility.id === "recovery" ? "Cryo: -110°C" : "19°C"}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">CAPACITY</p>
                  <p className="font-display font-black text-base text-white mt-1">
                    {selectedFacility.id === "recovery" ? "12 Max" : "50 Max"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
