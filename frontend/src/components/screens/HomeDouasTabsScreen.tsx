"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../mainComponents/footer";

interface HomeDouasTabsScreenProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedDouaCategory: string;
  setSelectedDouaCategory: (category: string) => void;
  customDouaText: string;
  setCustomDouaText: (text: string) => void;
  showAuthenticDuasGrid: boolean;
  setShowAuthenticDuasGrid: (show: boolean) => void;
  handleWallOfDuasClick: () => void;
  handleLeavesMenuToggle: () => void;
  showLeavesMenu: boolean;
}

export default function HomeDouasTabsScreen({
  activeTab,
  setActiveTab,
  selectedDouaCategory,
  setSelectedDouaCategory,
  customDouaText,
  setCustomDouaText,
  showAuthenticDuasGrid,
  setShowAuthenticDuasGrid,
  handleWallOfDuasClick,
  handleLeavesMenuToggle,
  showLeavesMenu,
}: HomeDouasTabsScreenProps) {
  return (
    <>
      {/* Home Tab Screen */}
      {activeTab === "Home" && (
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
          {/* Header with Back Arrow - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-1 sm:mb-4">

            <h1 className="text-3xl sm:text-2xl text-white font-bold">Duas</h1>

          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-2 pb-24">
              {/* Subtitle - Mobile Responsive */}
              <div className="mb-6 sm:mb-8 sm:text-center text-left">
                <p className="text-white text-md sm:text-base font-semibold leading-relaxed">
                  Duas to connect to Allah and to find comfort with heartfelt words
                </p>
              </div>

              {/* Doua Categories (Pills/Tabs) */}
              <div className="mb-8">
                <div className="flex space-x-3 overflow-x-auto pb-2 justify-start sm:justify-center">
                  {["Authentic douas", "All", "For kids", "For Haj"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedDouaCategory(category);
                          if (category === "Authentic douas") {
                            setShowAuthenticDuasGrid(true);
                          }
                        }}
                        className={`px-4 py-2 rounded-full sm:font-medium font-semibold whitespace-nowrap transition-colors ${selectedDouaCategory === category
                            ? "bg-cream text-gray-900"
                            : "bg-blue-950 border border-[#173b2a] text-white hover:bg-slate-700"
                          }`}
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Custom douas Section */}
              <div className="mb-8 text-left sm:text-center">
                <h2 className="text-white text-2xl sm:text-xl font-semibold mb-2 capitalize">
                  Custom douas
                </h2>
                <p className="text-white font-semibold sm:font-medium sm:text-base mb-4 leading-relaxed">
                  What do you have in mind, let&apos;s us help you explain it to Allah
                </p>

                <textarea
                  value={customDouaText}
                  onChange={(e) => setCustomDouaText(e.target.value)}
                  placeholder="Write down you feeling like I need help to get a job..."
                  className="w-full h-48 md:h-24 bg-blue-950 text-white placeholder-purple-300 rounded-lg p-4 border border-[#173b2a] focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              {/* Most popular Douas asked Section */}
              <div className="mb-8 sm:text-center text-left">
                <h2 className="text-white text-2xl sm:text-xl font-semibold mb-4">
                  Most popular Douas asked
                </h2>

                <div className="flex  flex-wrap  sm:grid sm:grid-cols-2 gap-3">
                  {[
                    "I have an exam",
                    "I want to marry",
                    "I want a baby",
                    "I need money for rent",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="bg-blue-950 text-white px-8 sm:px-4 py-2 sm:py-3 rounded-4xl text-sm hover:bg-slate-700 transition-colors text-center sm:font-medium font-semibold w-fit"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover the wall of douas Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Discover the wall of douas
                </h2>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Find out douas that people made and support them by saying &apos;Amine&apos;.
                </p>

                <button
                  onClick={handleWallOfDuasClick}
                  className="w-full bg-blue-950 border border-[#173b2a] rounded-4xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <Image
                    src="/Dua.png"
                    alt="Duas"
                    height="200" width="200" className="h-6 w-6"
                  />
                  <span className="text-white font-bold text-xl  sm:font-medium">The wall of Duas</span>
                  <button onClick={() => {
                    setActiveTab('wallsOfDua')
                  }}>
                    <Image
                      src="/arrow.svg"
                      alt="ArrowImage"
                      height="200" width="200" className="h-6 w-6"
                    />
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Douas Tab Screen */}
      {activeTab === "Douas" && (
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
          {/* Header with Back Arrow - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
            <button
              onClick={() => setActiveTab("Home")}
              className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
            >
              ←
            </button>
            <h1 className="text-xl sm:text-2xl text-white font-bold">Douas</h1>
            <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-2 pb-24">
              {/* Subtitle - Mobile Responsive */}
              <div className="mb-6 sm:mb-8 text-center">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Douas to connect to Allah and to find comfort with heartfelt
                  words
                </p>
              </div>

              {/* Doua Categories (Pills/Tabs) */}
              <div className="mb-8">
                <div className="flex space-x-3 overflow-x-auto pb-2 justify-center">
                  {["Authentic douas", "All", "For kids", "For Haj"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedDouaCategory(category);
                          if (category === "Authentic douas") {
                            setShowAuthenticDuasGrid(true);
                          }
                        }}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${selectedDouaCategory === category
                            ? "bg-cream text-gray-900"
                            : "bg-slate-800 text-white hover:bg-slate-700"
                          }`}
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Custom douas Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Custom douas
                </h2>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  What do you have in mind, let&apos;s us help you explain it to
                  Allah
                </p>

                {/* Text Input Area */}
                <textarea
                  value={customDouaText}
                  onChange={(e) => setCustomDouaText(e.target.value)}
                  placeholder="Write down you feeling like I need help to get a job..."
                  className="w-full h-24 bg-slate-800 text-white placeholder-purple-300 rounded-lg p-4 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              {/* Most popular Douas asked Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-4">
                  Most popular Douas asked
                </h2>

                {/* Suggestion Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "I have an exam",
                    "I want to marry",
                    "I want a baby",
                    "I need money for rent",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="bg-slate-800 text-white px-4 py-3 rounded-lg text-sm hover:bg-slate-700 transition-colors text-center"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover the wall of douas Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Discover the wall of douas
                </h2>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Find out douas that people made and support them by saying
                  &apos;Amine&apos;.
                </p>

                {/* Navigation Button */}
                <button
                  onClick={handleWallOfDuasClick}
                  className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-xl">🤲</span>
                    <span className="text-white font-medium">
                      The wall of Duas
                    </span>
                  </div>
                  <span className="text-white">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
   <Footer/>
      {/* Floating Leaves Menu Button - Mobile Responsive */}
      
    </>
  );
}
