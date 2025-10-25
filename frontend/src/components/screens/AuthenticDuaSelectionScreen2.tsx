"use client";

import Image from "next/image";
import Discuss from "/Discuss.svg";
import Dua from "/Dua.png";
import Arrow from "/arrow.svg";
import Leave from "/leave.png";
import ZikrBot from "/zikrBot.png";

interface AuthenticDuaSelectionScreenProps {
  showAuthenticDuaSelection: boolean;
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  setShowDiscussMenu: (show: boolean) => void;
  selectedDuaCategory: string;
  setSelectedDuaCategory: (category: string) => void;
  handleDuaCategorySelect: (category: string) => void;
  showLocalDuaContent: boolean;
  duaContentRef: React.RefObject<HTMLDivElement>;
  duaContent: Record<string, {
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  }>;
  handlePlayPause: () => void;
  isPlaying: boolean;
  handleDuaAction: (action: string) => void;
}

export default function AuthenticDuaSelectionScreen({
  showAuthenticDuaSelection,
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  setShowDiscussMenu,
  selectedDuaCategory,
  setSelectedDuaCategory,
  handleDuaCategorySelect,
  showLocalDuaContent,
  duaContentRef,
  duaContent,
  handlePlayPause,
  isPlaying,
  handleDuaAction,
}: AuthenticDuaSelectionScreenProps) {
  if (!showAuthenticDuaSelection) return null;

  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar - Mobile Responsive */}
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon - Mobile Responsive */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowAuthenticDuaSelection(false);
              setShowHomeScreen(true);
            }}
            className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-10 left-16"
          >
            <Image
              src="/arrow.svg"
              alt="ArrowImage"
              height="200" width="200" className="h-6 w-6 rotate-180"
            />
          </button>
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="hover:scale-110 transition-transform absolute top-5 left-5"
          >
            <Image src="/leave.png" alt="Leave"
              width="200"
              height="200" className="w-10 h-10" />
          </button>
        </div>

        {/* Right: Current Mode Indicator - Mobile Responsive */}
        <div className="bg-[#112b1f] border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2 ml-4">
          <Image src="/Dua.png" alt="Dua" className="w-5 h-5" width="200" height="200" />
          <span className="text-white text-xl sm:text-xl font-medium">
            Authentic dua
          </span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-10">
          {/* Chat Message (Bot's Response) - Mobile Responsive */}
          {/* <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6">
            <div className="flex items-end space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {/* Zikr bot logo/icon - Mobile Responsive */}
              {/* <div className="bg-teal-700 relative -bottom-10 left-2  rounded-full flex-shrink-0">
                <Image
                  src="/zikrBot.png"
                  width="200"
                  height="200"
                  alt="BotImage"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div
                className="relative bg-opacity-80 w-full  px-6 py-4 text-white rounded-4xl bg-[#0a3a30] text-center border border-[#216b34]" // Placeholder dark green background
                style={{
                  // Create the speech bubble 'tail' using a pseudo-element style
                  '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                  boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
                } as React.CSSProperties}
              > */}
                {/* Content of the message */}
                {/* <p className="text-white text-sm sm:text-base leading-relaxed">
                  Welcome! Here I can help you with duas from Hisnul Muslim
                  and from the Holy Qur&apos;an. Please choose below with
                  dua you would like to read.
                </p> */}
                {/* The chat bubble "tail" or "corner" on the bottom right */}
                {/* <div
                  className="absolute bottom-0 left-0 w-8 h-8 translate-x-1 translate-y-1 bg-[#0a3a30] border-t border-r border-[#216b34]"
                  style={{
                    // This creates the triangular shape that points out
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                    transform: 'translateX(3px) translateY(1px) rotate(160deg)', // Position and rotate it
                    borderRadius: '0 0 4px 0', // Optional: slightly round the corner
                  }}
                >

                </div>
              </div>

            </div>
          </div> */}
          <div className="flex items-start space-x-1 mb-6 px-1 w-full max-w-4xl sm:mx-auto">
            {/* Zikr bot logo/icon */}
            <div className="bg-teal-700 self-end relative top-8 left-0  rounded-full flex-shrink-0">
              <Image
                src='/zikrBot.png'
                alt="ZikrBot"
                width={'200'}
                height={'200'}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div
              className="relative sm:px-6 sm:py-2 px-8 py-4 border-2 z-1 border-[#216b34] text-white rounded-4xl bg-[#0a3a30] right-3" // Placeholder dark green background
              style={{
                // Create the speech bubble 'tail' using a pseudo-element style
                '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
              } as React.CSSProperties}
            >
              {/* Content of the message */}
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Welcome! Here I can help you with duas from Hisnul Muslim
                and from the Holy Qur&apos;an. Please choose below with
                dua you would like to read.
              </p>

              {/* The chat bubble "tail" or "corner" on the bottom right */}
              <div
                className="absolute bottom-0 left-0 w-8 h-8 translate-x-1 translate-y-1 -z-[100] bg-[#0a3a30] border-t border-r border-2 border-[#216b34] "
                style={{
                  // This creates the triangular shape that points out
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                  transform: 'translateX(5px) translateY(5px) rotate(154deg)', // Position and rotate it
                  borderRadius: '0 0 4px 0', // Optional: slightly round the corner
                }}
              ></div>
            </div>
            {/* Chat Bubble */}
            {/* <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  That&apos;s great! Please find below the Reminders I can
                  help you with. May Allah ease your journey and help you
                  memorise them. Amine
                </p>
              </div> */}
            {/* <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            
            <div className="flex items-end space-x-3">
              <div className="bg-teal-700 rounded-full flex-shrink-0">
                <Image
                  src="/zikrBot.png"
                  width="200"
                  height="200"
                  alt="ZikrBot"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="bg-[#0a3a30] rounded-full border border-[#216b34] bg-opacity-80 rounded-bl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  I am always here dear, how can i help you now? Please
                  sélect a topic below or tell me what you need.
                </p>
              </div>
            </div> */}
          </div>

          {/* Dua Option Pills (Selection Choices) - Mobile Responsive */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 mt-12">
            <div className="flex flex-wrap gap-2">
              {[
                "Anxiety",
                "Sadness",
                "To protect kids",
                "When entering home",
                "For forgiveness",
                "For guidance",
                "When entering Toilet",
                "Morning and evening duas",
                "For sickness",
                "When waking up at night",
                "Another one",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleDuaCategorySelect(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${selectedDuaCategory === category
                    ? "bg-[#0f1944] border border-[#173b2a] font-bold text-white"
                    : "bg-cream text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dua Display Card (Content Area) - Mobile Responsive */}
          {showLocalDuaContent &&
            duaContent[selectedDuaCategory as keyof typeof duaContent] && (
              <div
                ref={duaContentRef}
                className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8"
              >
                <div className="p-2 sm:p-8">
                  {/* Title/Context - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-white text-right bg-[#0f1944] border border-[#173b2a] text-xs sm:text-sm mb-3 sm:mb-4 w-fit px-2 py-2 rounded-full ml-auto">
                      {selectedDuaCategory}
                    </p>
                  </div>

                  {/* Arabic Text - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-[#92c6aa] text-[1.5rem] sm:text-2xl md:text-3xl font-arabic leading-relaxed mb-4 sm:mb-6">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].arabic
                      }
                    </p>
                  </div>

                  {/* Transliteration - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-white italic text-[1.2rem] font-[lato] sm:text-lg leading-relaxed">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].transliteration
                      }
                    </p>
                  </div>

                  {/* English Translation - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-[#f9f6dc] italic text-[1.1rem] sm:text-base leading-relaxed">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].translation
                      }
                    </p>
                  </div>

                  {/* Source Reference - Mobile Responsive */}
                  <div className="text-right mb-6 sm:mb-8">
                    <p className="text-gray-500 text-[1rem] sm:text-sm max-w-[270px] ml-auto">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].source
                      }
                    </p>
                  </div>

                  {/* Media Controls - Mobile Responsive */}
                  <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg
                        className="w-10 h-10 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" />
                      </svg>
                    </button>

                    <button
                      onClick={handlePlayPause}
                      className="bg-teal-800 text-white p-4 sm:p-4 rounded-full hover:bg-teal-900 transition-colors"
                    >
                      {isPlaying ? (
                        <svg
                          className="w-10 h-10 sm:w-8 sm:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-10 h-10 sm:w-8 sm:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                      )}
                    </button>

                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg
                        className="w-10 h-10 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18,5.75L22.25,10H19V16H12.5L10.5,18H19A2,2 0 0,0 21,16V10H24.25L20,5.75M6,18.25L1.75,14H5V8H11.5L13.5,6H5A2,2 0 0,0 3,8V14H0.75L5,18.25Z" />
                      </svg>
                    </button>
                  </div>

                  {/* Action Buttons - Mobile Responsive */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Row 1 - Mobile Responsive */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {[
                        "Save it",
                        "Share it",
                        "Pounder it",
                        "Another one",
                      ].map((action) => (
                        <button
                          key={action}
                          onClick={() => handleDuaAction(action)}
                          className="bg-[#0a3a30] border border-[#173b2a] text-white px-6 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-700 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>

                    {/* Row 2 - Mobile Responsive */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      <button
                        onClick={() =>
                          handleDuaAction("The whole collection")
                        }
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-6 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                      >
                        The whole collection
                      </button>
                      <button
                        onClick={() => handleDuaAction("Main menu")}
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-6 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                      >
                        Main menu
                      </button>
                      <button
                        onClick={() => handleDuaAction("Discuss")}
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-6 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors flex items-center space-x-1 sm:space-x-2"
                      >
                        <Image
                          src="/Discuss.svg"
                          alt="Discuss"
                          width={200}
                          height={200}
                          className="w-5 h-5"
                        />
                        <span>Discuss</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Debug Back Button */}
      {/* <button
        onClick={() => {
          setShowAuthenticDuaSelection(false);
          setShowHomeScreen(true);
        }}
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button> */}
    </div>
  );
}
