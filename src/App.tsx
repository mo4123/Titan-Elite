/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import GroupClasses from "./components/GroupClasses";
import Schedule from "./components/Schedule";
import TransformationStories from "./components/TransformationStories";
import Trainers from "./components/Trainers";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import MembershipPlans from "./components/MembershipPlans";
import MembershipModal from "./components/MembershipModal";
import { MembershipTier } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("training");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectPlan = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleJoinNowClick = () => {
    setSelectedTier(null);
    setIsModalOpen(true);
  };

  const handleActivationSuccess = (memberName: string, tierName: string) => {
    // Show a high fidelity, beautiful success toast/notification
    const message = `WELCOME ATHLETE ${memberName.toUpperCase()}! SPECIAL ${tierName} ACCESS AUTHORIZED.`;
    setNotifications((prev) => [...prev, message]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((m) => m !== message));
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary-container selection:text-white">
      {/* Floating Notifications Matrix */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        {notifications.map((notif, idx) => (
          <div
            key={idx}
            className="p-4 bg-surface-container border-l-4 border-green-500 text-white shadow-2xl flex items-center justify-between gap-3 animate-slide-in pointer-events-auto"
          >
            <div className="text-xs font-display font-extrabold tracking-widest leading-normal">
              {notif}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <TopNavBar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onJoinClick={handleJoinNowClick}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero
          onStartTraining={handleJoinNowClick}
          onViewPlans={() => handleNavigate("membership")}
        />

        {/* CORE FITNESS PILLARS */}
        <WhyChooseUs />

        {/* GROUP CLASSES */}
        <GroupClasses />

        {/* TIME SCHEDULE TIMETABLE */}
        <Schedule />

        {/* FACILITIES GALLERY */}
        <Facilities />

        {/* BEFORE & AFTER COMPARISON SLIDER */}
        <TransformationStories />

        {/* ELITE MEMBERSHIP PLANS */}
        <MembershipPlans onSelectPlan={handleSelectPlan} />

        {/* ELITE COACHES */}
        <Trainers />

        {/* SOCIAL PERFORMANCE REEL */}
        <InstagramFeed />
      </main>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* MEMBERSHIP SIGNUP WIZARD MODAL */}
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
        onSuccess={handleActivationSuccess}
      />
    </div>
  );
}

