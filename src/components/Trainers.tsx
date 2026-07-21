import React, { useState } from "react";
import { User, ShieldAlert, Check, Calendar, MessageSquare, Award } from "lucide-react";
import { TRAINERS } from "../data";
import { Trainer } from "../types";

export default function Trainers() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingGoal, setBookingGoal] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filterTabs = ["All", "Powerlifting", "HIIT & Mobility", "Combat Sports"];

  const filteredTrainers =
    selectedSpecialty === "All"
      ? TRAINERS
      : TRAINERS.filter((t) => t.specialty === selectedSpecialty);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingGoal) {
      alert("Please select a date and enter your core fitness goal.");
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedTrainer(null);
      setBookingDate("");
      setBookingGoal("");
      alert("Consultation request successfully submitted. An elite host will contact you.");
    }, 2000);
  };

  return (
    <section className="py-24 bg-surface" id="about">
      <div className="max-w-container-max mx-auto space-y-16 px-margin-mobile md:px-margin-desktop">
        {/* Title Block with CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b border-outline-variant/15 pb-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
              MEET THE ARCHITECTS
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase leading-none">
              ELITE COACHES
            </h2>
          </div>

          {/* Specialty Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-surface-container-low border border-outline-variant/20 rounded-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedSpecialty(tab)}
                className={`px-4 py-2 text-xs font-display font-bold tracking-widest uppercase transition-standard cursor-pointer ${
                  selectedSpecialty === tab
                    ? "bg-primary-container text-white"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative overflow-hidden h-[550px] border border-outline-variant/20 hover:border-primary-container/40 transition-standard cursor-pointer flex flex-col justify-end"
            >
              {/* Image with grayscale effect on active list and transition */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${trainer.image}')` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Coach details content overlay */}
              <div className="relative z-10 p-6 md:p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-primary-container font-display font-extrabold text-[9px] tracking-[0.25em] block uppercase">
                    {trainer.role}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-black tracking-tighter uppercase leading-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-[11px] text-on-surface-variant font-mono tracking-wide uppercase font-medium">
                    {trainer.experience}
                  </p>
                </div>

                {/* Trainer Quote - visible on hover */}
                <div className="h-0 opacity-0 group-hover:h-16 group-hover:opacity-100 transition-all duration-500 overflow-hidden text-xs text-on-surface-variant font-sans font-light italic leading-relaxed border-l border-primary-container/50 pl-3">
                  &ldquo;{trainer.quote}&rdquo;
                </div>

                {/* Request Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTrainer(trainer);
                  }}
                  className="w-full py-3 bg-white hover:bg-primary-container text-black hover:text-white font-display font-extrabold text-[10px] tracking-widest uppercase transition-standard cursor-pointer"
                >
                  REQUEST CONSULTATION
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Dialogue / Consultant request modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-none border border-outline-variant/40 bg-surface-container-lowest text-on-surface shadow-2xl">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-outline-variant/25">
              <h4 className="font-display font-black text-2xl text-white uppercase tracking-tighter">
                COACHING CONSULTATION
              </h4>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-1">
                Configure direct assessment with {selectedTrainer.name}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleBookingSubmit} className="p-6 md:p-8 space-y-5">
              <div className="flex gap-4 items-center bg-surface-container-high/40 border border-outline-variant/10 p-3">
                <div 
                  className="w-12 h-12 bg-cover bg-center rounded-none shrink-0" 
                  style={{ backgroundImage: `url('${selectedTrainer.image}')` }}
                />
                <div>
                  <p className="font-display font-extrabold text-white text-sm uppercase leading-none">
                    {selectedTrainer.name}
                  </p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1 font-mono">
                    {selectedTrainer.role}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-primary mb-1.5">
                  Select Consultation Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                  <input
                    required
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/40 py-3 pl-11 pr-4 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-standard font-sans text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-primary mb-1.5">
                  Core Fitness / Strength Goal
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3 w-4 h-4 text-on-surface-variant" />
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g. Increase 1RM squat, raw power output, combat agility..."
                    value={bookingGoal}
                    onChange={(e) => setBookingGoal(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/40 py-3 pl-11 pr-4 text-white placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-standard font-sans text-xs resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 items-start bg-surface-container/30 p-3 font-sans text-[10px] text-on-surface-variant leading-relaxed">
                <Award className="w-4 h-4 text-primary-container shrink-0" />
                <p>
                  Assessments include a fully customized 30-minute metabolic output test and standard compound movement screening.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedTrainer(null)}
                  className="w-1/3 py-3.5 border border-outline text-white hover:bg-white hover:text-black font-display font-extrabold text-xs tracking-widest uppercase transition-standard cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3.5 bg-primary-container hover:bg-red-700 text-white font-display font-extrabold text-xs tracking-widest uppercase transition-standard cursor-pointer"
                >
                  SUBMIT REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
