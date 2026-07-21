import React, { useState } from "react";
import { X, Check, CreditCard, Shield, User, Mail, Phone, Lock, Calendar, QrCode } from "lucide-react";
import { MembershipTier } from "../types";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: MembershipTier | null;
  onSuccess: (memberName: string, tierName: string) => void;
}

export default function MembershipModal({
  isOpen,
  onClose,
  selectedTier,
  onSuccess,
}: MembershipModalProps) {
  const [tier, setTier] = useState<string>(selectedTier?.id || "elite");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberId, setMemberId] = useState("");

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in all personal information fields.");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 4 || isNaN(Number(pin))) {
      alert("Please enter a valid 4-digit locker PIN.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `TE-${Math.floor(100000 + Math.random() * 900000)}`;
      setMemberId(generatedId);
      setIsSubmitting(false);
      setStep(3);
      onSuccess(name, tier.toUpperCase());
    }, 1500);
  };

  const currentTierInfo =
    tier === "basic"
      ? { name: "BASIC", price: "$99", color: "from-amber-700 to-amber-900", badge: "BRONZE" }
      : tier === "pro"
      ? { name: "PRO", price: "$299", color: "from-neutral-800 to-black border border-primary/40", badge: "BLACK" }
      : { name: "ELITE", price: "$189", color: "from-red-900 to-red-950 border border-primary/60", badge: "GOLD" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-none border border-outline-variant/50 bg-surface-container-lowest text-on-surface shadow-2xl">
        {/* Banner */}
        <div className="h-2 bg-gradient-to-r from-primary-container via-red-500 to-primary-container" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-standard z-10 p-1"
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal content */}
        <div className="p-8 md:p-10">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8 gap-3">
            <span
              className={`text-xs tracking-widest font-display font-semibold px-3 py-1 border transition-standard ${
                step >= 1 ? "bg-primary-container text-white border-primary-container" : "border-outline-variant text-on-surface-variant"
              }`}
            >
              01 PROFILE
            </span>
            <div className="w-8 h-px bg-outline-variant" />
            <span
              className={`text-xs tracking-widest font-display font-semibold px-3 py-1 border transition-standard ${
                step >= 2 ? "bg-primary-container text-white border-primary-container" : "border-outline-variant text-on-surface-variant"
              }`}
            >
              02 LOCKER & PIN
            </span>
            <div className="w-8 h-px bg-outline-variant" />
            <span
              className={`text-xs tracking-widest font-display font-semibold px-3 py-1 border transition-standard ${
                step === 3 ? "bg-primary-container text-white border-primary-container" : "border-outline-variant text-on-surface-variant"
              }`}
            >
              03 ACTIVATE
            </span>
          </div>

          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="text-center md:text-left mb-6">
                <h3 className="text-2xl font-display font-black tracking-tighter text-white uppercase">
                  ENTER THE ARENA
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Complete your personal training credentials to forge your legacy.
                </p>
              </div>

              {/* Plan Switcher */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-surface-container-low border border-outline-variant/30 rounded-none">
                {["basic", "elite", "pro"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`py-3 text-xs font-display font-bold tracking-widest uppercase transition-standard cursor-pointer ${
                      tier === t
                        ? "bg-primary-container text-white"
                        : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Personal details inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. David Chen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container border border-outline-variant/40 py-3.5 pl-11 pr-4 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-standard font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                      <input
                        required
                        type="email"
                        placeholder="e.g. david.chen@elite.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-surface-container border border-outline-variant/40 py-3.5 pl-11 pr-4 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-standard font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-surface-container border border-outline-variant/40 py-3.5 pl-11 pr-4 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-standard font-sans text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Review Summary */}
              <div className="p-4 bg-surface-container border-l-4 border-primary-container flex justify-between items-center">
                <div>
                  <p className="text-xs text-on-surface-variant tracking-widest uppercase">Selected Tier</p>
                  <p className="text-lg font-display font-black text-white uppercase tracking-tight mt-0.5">
                    TITAN {currentTierInfo.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-display font-black text-white">{currentTierInfo.price}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">billed monthly</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-container hover:bg-red-700 text-white font-display font-extrabold text-sm tracking-[0.2em] uppercase transition-standard flex items-center justify-center gap-2 cursor-pointer"
              >
                PROCEED TO LOCKER PIN <Check className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div className="text-center md:text-left mb-6">
                <h3 className="text-2xl font-display font-black tracking-tighter text-white uppercase">
                  BIOMETRIC PIN CONFIGURATION
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Assign a personal 4-digit security PIN for seamless locker access and bio-entry.
                </p>
              </div>

              <div className="p-6 bg-surface-container border border-outline-variant/20 rounded-none text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/10 text-primary-container mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Enter 4-Digit Locker PIN
                  </label>
                  <input
                    required
                    type="password"
                    maxLength={4}
                    pattern="[0-9]{4}"
                    placeholder="• • • •"
                    value={pin}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      if (val.length <= 4) setPin(val);
                    }}
                    className="w-32 bg-surface-container-lowest border-2 border-outline-variant text-center py-3 text-2xl tracking-[0.4em] font-mono text-white focus:outline-none focus:border-primary-container transition-standard rounded-none"
                  />
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-2">
                    Used at any digital locker terminal in Titan Elite Clubs
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-sans text-xs text-on-surface-variant leading-relaxed">
                <div className="flex gap-2.5 items-start">
                  <Shield className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                  <p>
                    <strong>Titan Safe® System:</strong> Locker pins are encrypted locally. Gym hosts do not have access to your raw security keys.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CreditCard className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                  <p>
                    <strong>Mock Billing Mode:</strong> This applet uses mock currency networks. No actual credit card details are required or billed during activation.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 border border-outline text-white hover:bg-white hover:text-black font-display font-extrabold text-xs tracking-widest uppercase transition-standard cursor-pointer"
                >
                  BACK
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 py-4 bg-primary-container hover:bg-red-700 disabled:bg-red-900 text-white font-display font-extrabold text-sm tracking-[0.2em] uppercase transition-standard flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? "ACTIVATING..." : "ACTIVATE VIP STATUS"} <Check className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-950/40 text-green-400 border border-green-500/30 mb-2">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-black tracking-tighter text-white uppercase">
                  LEGACY SECURED
                </h3>
                <p className="text-sm text-on-surface-variant mt-1.5 max-w-md mx-auto">
                  Welcome to TITAN ELITE, athlete. Your biometric profile is authorized. Present your Virtual Athlete ID below at entry.
                </p>
              </div>

              {/* Virtual Athlete Member Card */}
              <div className={`mx-auto max-w-sm overflow-hidden border p-6 bg-gradient-to-br ${currentTierInfo.color} relative shadow-2xl rounded-none text-left`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

                {/* Card Header */}
                <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-4 mb-5">
                  <div>
                    <h4 className="font-display font-black text-xl text-white tracking-tighter">TITAN ELITE</h4>
                    <p className="text-[9px] text-white/60 uppercase tracking-widest">Premium Performance</p>
                  </div>
                  <span className="px-2 py-0.5 bg-white/10 text-[9px] font-display font-bold tracking-widest text-white border border-white/25">
                    {currentTierInfo.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
                  <div className="col-span-2 space-y-3">
                    <div>
                      <p className="text-[8px] text-white/50 uppercase tracking-wider">ATHLETE NAME</p>
                      <p className="font-display font-extrabold text-base text-white tracking-tight leading-none">
                        {name.toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] text-white/50 uppercase tracking-wider">ATHLETE ID</p>
                      <p className="font-mono text-sm text-white/90 font-medium leading-none">
                        {memberId}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[8px] text-white/50 uppercase tracking-wider">LOCKER PIN</p>
                        <p className="font-mono text-xs text-white/95 font-semibold">
                          #{pin}
                        </p>
                      </div>
                      <div>
                        <p className="text-[8px] text-white/50 uppercase tracking-wider">ISSUED</p>
                        <p className="font-mono text-xs text-white/95 font-semibold">
                          07/2026
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center border-l border-white/10 pl-4">
                    <QrCode className="w-12 h-12 text-white/90 stroke-[1.5]" />
                    <span className="text-[7px] text-white/60 tracking-widest uppercase font-mono mt-2">
                      BIO-SCAN
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[8px] text-white/40 uppercase tracking-widest">
                  <div className="flex gap-1 items-center">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>24/7 BIOMETRIC ACCESS</span>
                  </div>
                  <span>TITAN CLUBS INC</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-10 py-4 bg-white text-black hover:bg-neutral-200 font-display font-extrabold text-xs tracking-widest uppercase transition-standard cursor-pointer"
                >
                  ENTER THE CLUB
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
