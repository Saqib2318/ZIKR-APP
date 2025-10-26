"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import Image from 'next'
interface ReminderTabScreenProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedReminderCategory: string;
  setSelectedReminderCategory: (category: string) => void;
  showSpiritualReminder: boolean;
  setShowSpiritualReminder: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  handleLeavesMenuToggle: () => void;
  showLeavesMenu: boolean;
}

export default function ReminderTabScreen({
  activeTab,
  setActiveTab,
  selectedReminderCategory,
  setSelectedReminderCategory,
  showSpiritualReminder,
  setShowSpiritualReminder,
  setShowHomeScreen,
  handleLeavesMenuToggle,
  showLeavesMenu,
}: ReminderTabScreenProps) {
  if (activeTab !== "Reminder") return null;

  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header with Back Arrow - Mobile Responsive */}
      <div className="max-w-4xl sm:mx-auto w-full mt-4 flex justify-center items-center">
        <div className="bg-white cursor-pointer text-gray-800 border-2 border-gray-300  sm:px-4 px-6 py-4 sm:py-6 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-lg w-1/2 capitalize"
                 >
                   <Image
                     src='/spritual-reminder.png'
                     width={'200'}
                     height={'200'}
                     alt="SpritualReminder"
                     className="w-6 h-6"
                   />
                   <span className="text-md sm:text-sm font-bold  mt-1">
                     Spiritual reminder
                   </span>
                 </div>
      </div>

      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 py-2 pb-24">
          {/* Subtitle - Mobile Responsive */}
          <div className="mb-6 sm:mb-8 text-center">
            <p className="text-white text-md font-semibold sm:text-base leading-relaxed">
              Daily reminders to strengthen your connection with Allah
            </p>
          </div>

          {/* Reminder Categories */}
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Prayer Times",
                icon: "🕌",
                description: "Never miss your daily prayers",
              },
              {
                title: "Dhikr Sessions",
                icon: "📿",
                description: "Remember Allah throughout the day",
              },
              {
                title: "Quran Reading",
                icon: "📖",
                description: "Daily Quran recitation reminders",
              },
              {
                title: "Wudu Steps",
                icon: "💧",
                description: "Proper ablution guidance",
              },
              {
                title: "Islamic Calendar",
                icon: "📅",
                description: "Important Islamic dates and events",
              },
              {
                title: "Charity Reminders",
                icon: "💝",
                description: "Remember to give Zakat and Sadaqah",
              },
            ].map((reminder, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedReminderCategory(reminder.title);
                  setShowSpiritualReminder(true);
                  setShowHomeScreen(false);
                }}
                className="w-full bg-slate-800 rounded-xl p-6 flex items-center space-x-4 hover:bg-slate-700 transition-colors text-left"
              >
                <span className="text-3xl">{reminder.icon}</span>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {reminder.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {reminder.description}
                  </p>
                </div>
                <span className="text-white text-xl"><ArrowRight/></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Leaves Menu Button - Mobile Responsive */}
      <button
        onClick={handleLeavesMenuToggle}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      >
        <div className="relative">
          {/* Animated leaves */}
          <div
            className={`transition-transform duration-500 ${
              showLeavesMenu ? "rotate-180" : "rotate-0"
            }`}
          >
            <span className="text-2xl">🍃</span>
          </div>
          {/* Additional floating leaves animation */}
          <div
            className={`absolute -top-1 -left-1 transition-all duration-700 ${
              showLeavesMenu
                ? "opacity-100 scale-125"
                : "opacity-0 scale-75"
            }`}
          >
            <span className="text-lg">🍃</span>
          </div>
          <div
            className={`absolute -bottom-1 -right-1 transition-all duration-500 delay-100 ${
              showLeavesMenu
                ? "opacity-100 scale-110"
                : "opacity-0 scale-50"
            }`}
          >
            <span className="text-sm">🍃</span>
          </div>
        </div>
      </button>
    </div>
  );
}
