import { Dumbbell, Trophy, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Dumbbell className="w-10 h-10 text-primary-container" />,
      title: "State-of-the-Art Gear",
      desc: "Equipped with custom matte-black racks, calibrated plates, and advanced Olympic hardware for elite biometric tracing.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-primary-container" />,
      title: "Expert Coaches",
      desc: "World-class performance and conditioning specialist coaches with professional athletics, MMA, and Olympic backgrounds.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary-container" />,
      title: "24/7 Biometric Access",
      desc: "The arena never sleeps. Train entirely on your custom schedule with encrypted biometric and locker entry cards.",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-y border-outline-variant/15">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center space-y-4 max-w-xs mx-auto md:max-w-none"
            >
              <div className="p-4 rounded-full bg-primary-container/5 border border-primary-container/10 mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary-container/10">
                {pillar.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight leading-tight select-none">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
