import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

interface TopNavBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onJoinClick: () => void;
}

export default function TopNavBar({ activeSection, onNavigate, onJoinClick }: TopNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Training", id: "training" },
    { label: "Clubs", id: "clubs" },
    { label: "Recovery", id: "recovery" },
    { label: "Membership", id: "membership" },
    { label: "About", id: "about" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[90px] z-40 bg-surface-container-lowest/80 border-b border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto h-full">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("training")}
          className="font-display font-black text-2xl md:text-3xl text-primary tracking-tighter cursor-pointer flex items-center gap-2 group select-none"
        >
          <Dumbbell className="w-6 h-6 md:w-7 md:h-7 text-primary-container transition-transform group-hover:rotate-45 duration-300" />
          <span>TITAN ELITE</span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-8 items-center h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-[13px] uppercase tracking-[0.2em] font-semibold transition-standard h-full flex items-center relative cursor-pointer ${
                activeSection === item.id 
                  ? "text-primary-container border-b-2 border-primary-container pt-[2px]" 
                  : "text-on-surface/80 hover:text-primary-container"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Join Now CTA */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={onJoinClick}
            className="bg-primary-container text-on-primary-container hover:bg-red-700 hover:scale-105 active:scale-95 px-8 py-3 rounded-none font-display font-extrabold text-[11px] tracking-[0.15em] uppercase transition-standard cursor-pointer"
          >
            Join Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden gap-3">
          <button
            onClick={onJoinClick}
            className="bg-primary-container text-on-primary-container px-4 py-2 text-[10px] font-display font-extrabold tracking-widest uppercase cursor-pointer"
          >
            Join
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-on-surface hover:text-primary transition-standard p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-6 flex flex-col gap-4 animate-fade-in md:hidden z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-display text-xs uppercase tracking-[0.2em] font-bold py-2 transition-standard cursor-pointer ${
                activeSection === item.id ? "text-primary-container" : "text-on-surface-variant hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
