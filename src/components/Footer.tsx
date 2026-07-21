import React, { useState } from "react";
import { Dumbbell, ShieldAlert, Send, Check } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/15 text-on-surface">
      {/* Top Footer with Newsletter */}
      <div className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Brand Info */}
          <div className="space-y-4">
            <div 
              onClick={() => onNavigate("training")}
              className="font-display font-black text-2xl text-primary tracking-tighter flex items-center gap-2 cursor-pointer select-none"
            >
              <Dumbbell className="w-6 h-6 text-primary-container" />
              <span>TITAN ELITE</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed font-light">
              Architecting physical dominance and clinical biological restoration in premium modern training environments.
            </p>
          </div>

          {/* Quick links block */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-center">
            <div className="space-y-4">
              <h4 className="font-display font-black text-[10px] tracking-[0.25em] uppercase text-white">
                THE ARENA
              </h4>
              <ul className="space-y-2.5">
                {["training", "clubs", "recovery"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate(link)}
                      className="text-xs font-medium text-on-surface-variant hover:text-primary uppercase tracking-widest transition-standard cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-black text-[10px] tracking-[0.25em] uppercase text-white">
                VIP MEMBERSHIP
              </h4>
              <ul className="space-y-2.5">
                {["membership", "about"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate(link)}
                      className="text-xs font-medium text-on-surface-variant hover:text-primary uppercase tracking-widest transition-standard cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Input Form */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-[10px] tracking-[0.25em] uppercase text-white">
              INTELLIGENCE BRIEFING
            </h4>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-light">
              Subscribe to secure private training bulletins, VIP event schedules, and biohacking articles.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2 font-display font-semibold text-xs tracking-wider uppercase">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>INTELLIGENCE BRIEF SUBMITTED</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex border border-outline-variant/40 bg-surface-container rounded-none overflow-hidden focus-within:border-primary-container transition-standard">
                <input
                  required
                  type="email"
                  placeholder="Athlete Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3.5 text-xs text-white placeholder-on-surface-variant/50 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  className="px-5 bg-primary-container text-white hover:bg-red-700 transition-standard cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-on-surface-variant uppercase tracking-widest font-mono">
        <div>
          &copy; {new Date().getFullYear()} TITAN ELITE CLUBS. All athletic rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a href="#terms" className="hover:text-primary">TERMS of performance</a>
          <span className="text-outline-variant/30">&bull;</span>
          <a href="#privacy" className="hover:text-primary">PRIVACY shield</a>
          <span className="text-outline-variant/30">&bull;</span>
          <div className="flex items-center gap-1 text-primary">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>BIO-SECURITY LOCK-OUT ACTIVATED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
