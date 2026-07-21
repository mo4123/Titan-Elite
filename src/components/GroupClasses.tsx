import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Check, Activity, Clock, Flame, ShieldAlert, X } from "lucide-react";
import { CLASSES } from "../data";
import { ClassType } from "../types";

export default function GroupClasses() {
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);
  const [bookedClasses, setBookedClasses] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleBookClass = (classId: string, className: string) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(bookedClasses.filter((id) => id !== classId));
      alert(`Successfully cancelled your booking for ${className}.`);
    } else {
      setBookedClasses([...bookedClasses, classId]);
      alert(`Successfully booked your spot in ${className}! Present your VIP card at the studio entry.`);
    }
    setSelectedClass(null);
  };

  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto space-y-12 px-margin-mobile md:px-margin-desktop">
        {/* Title and control bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
              SYNCHRONIZED POWER
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase leading-none">
              COLLECTIVE ENERGY
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-surface-container border border-outline-variant/35 hover:bg-white hover:text-black hover:border-white text-white transition-standard cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-surface-container border border-outline-variant/35 hover:bg-white hover:text-black hover:border-white text-white transition-standard cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 scroll-smooth"
        >
          {CLASSES.map((classType) => {
            const isBooked = bookedClasses.includes(classType.id);
            return (
              <div
                key={classType.id}
                onClick={() => setSelectedClass(classType)}
                className="min-w-[310px] sm:min-w-[420px] h-[340px] glass-card flex-shrink-0 p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative border border-outline-variant/20 hover:border-primary-container/30 transition-standard snap-start"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-55 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${classType.image}')` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Booked Indicator Tag */}
                {isBooked && (
                  <div className="absolute top-4 left-4 bg-green-500 text-black text-[9px] tracking-widest font-display font-bold px-3 py-1 uppercase shadow-md flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> BOOKED
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div className="flex gap-4 text-[10px] tracking-widest font-mono text-primary font-bold uppercase select-none">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary-container" /> {classType.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-primary-container" /> {classType.intensity}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-white font-black tracking-tighter uppercase leading-none">
                    {classType.name}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed line-clamp-2">
                    {classType.desc}
                  </p>

                  <div className="pt-2 text-[10px] font-display font-extrabold tracking-[0.25em] text-primary group-hover:text-white transition-colors duration-300">
                    CLICK TO VIEW DETAILS &bull; BOOK
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Class Details Modals */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-none border border-outline-variant/40 bg-surface-container-lowest text-on-surface shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedClass(null)}
                className="bg-black/80 border border-white/10 text-white hover:text-primary-container p-2 transition-standard"
                aria-label="Close Class Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${selectedClass.image}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-black/25" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tighter leading-none">
                  {selectedClass.name}
                </h4>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {selectedClass.desc}
                </p>
              </div>

              {/* Training Specs */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-surface-container border border-outline-variant/15 text-center">
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">DURATION</p>
                  <p className="font-display font-black text-sm text-white mt-1">
                    {selectedClass.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">INTENSITY</p>
                  <p className="font-display font-black text-sm text-primary mt-1">
                    {selectedClass.intensity}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">EST. BURN</p>
                  <p className="font-display font-black text-sm text-white mt-1">
                    {selectedClass.calories}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-outline-variant/20 pb-2">
                  PERFORMANCE EXPECTATIONS
                </h5>
                <ul className="space-y-2.5 text-xs font-light text-on-surface-variant">
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                    <span>Bring professional training wraps and custom water vessels.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                    <span>Arrival required strictly 10 minutes prior for telemetry configuration.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleBookClass(selectedClass.id, selectedClass.name)}
                  className={`w-full py-4 font-display font-extrabold text-xs tracking-widest uppercase transition-standard cursor-pointer ${
                    bookedClasses.includes(selectedClass.id)
                      ? "bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      : "bg-primary-container text-white hover:bg-red-700"
                  }`}
                >
                  {bookedClasses.includes(selectedClass.id) ? "CANCEL RESERVATION" : "RESERVE VIP SPOT"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
