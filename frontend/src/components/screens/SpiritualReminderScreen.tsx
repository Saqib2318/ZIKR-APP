"use client";

import Image from "next/image";
import Leave from "../../../public/leave.png";
import ZikrBot from "../../../public/zikr-bot.png";
import Discuss from "../../../public/discuss.png";

interface SpiritualReminderScreenProps {
  // Props for state management
  setShowSpiritualReminder: (value: boolean) => void;
  setShowReminderContent: (value: boolean) => void;
  setSelectedReminderCategory: (value: string) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  selectedReminderCategory: string;
  showReminderContent: boolean;
  reminderContent: {
    [key: string]: {
      title: string;
      description: string;
      downloadLink: string;
    };
  };
  handleReminderCategorySelect: (category: string) => void;
  handleReminderAction: (action: string) => void;
}

export default function SpiritualReminderScreen({
  setShowSpiritualReminder,
  setShowReminderContent,
  setSelectedReminderCategory,
  setShowHomeScreen,
  setShowDiscussMenu,
  selectedReminderCategory,
  showReminderContent,
  reminderContent,
  handleReminderCategorySelect,
  handleReminderAction,
}: SpiritualReminderScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full relative max-w-none overflow-hidden">
      {/* Header/Top Bar */}
          <div className="flex items-center flex-col gap-2  justify-between w-full max-w-4xl mx-auto mb-8 px-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center ml-10 gap-10  space-x-4 self-start">
              <button
                onClick={() => {
                  setShowSpiritualReminder(false);
                  setShowReminderContent(false);
                  setSelectedReminderCategory("Wudu steps");
                  setShowHomeScreen(true);
                }}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                <Image
                  src='/arrow.svg'
                  width={'200'}
                  height={'200'}
                  alt="ArrowImage"
                  className="h-6 w-6 rotate-180"
                />
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform absolute top-5 left-5"
              >
                <Image src='/leave.png' width={'200'} height={'200'} alt="Leave" className="w-10 h-10" />
              </button>
            </div>


        {/* Right: Current Mode Indicator */}
          <div className="bg-white cursor-pointer text-gray-800 border-2 border-gray-300 px-8 sm:px-4 py-4 sm:py-1 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-lg"
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
      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-24">
          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-start space-x-1 mb-6">
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
                className="relative sm:px-6 sm:py-2 px-8 py-4 border-2 z-1 border-[#1E463E] text-white rounded-4xl bg-[#004d40] right-3" // Placeholder dark green background
                style={{
                  // Create the speech bubble 'tail' using a pseudo-element style
                  '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                  boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
                } as React.CSSProperties}
              >
                {/* Content of the message */}
                <p className="text-md  sm:text-base">
                  That's great! Please find below the Reminders I can help you with. May Allah ease your journey and help you memorise them. Amine
                </p>

                {/* The chat bubble "tail" or "corner" on the bottom right */}
                <div
                  className="absolute bottom-0 left-0 w-8 h-8 translate-x-1 translate-y-1 -z-[100] bg-[#004d40]"
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
            </div>
          </div>

          {/* Reminder Option Pills (Selection Choices) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8 mt-10">
            <div className="flex flex-wrap gap-1 justify-items-center">
              {[
                "Wudu steps",
                "Ghusl steps",
                "Prayer steps",
                "99 names of Allah",
                "Istikhara steps",
                "Tachahhoud",
                "Dhikr & Tasbih",
                "Another one",
                "40 Rabbana",
                "Something else",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleReminderCategorySelect(category)}
                  className={`sm:px-6 sm:py-3 px-4 py-2 rounded-full sm:text-sm text-md  font-medium transition-colors whitespace-nowrap ${selectedReminderCategory === category
                      ? "bg-slate-800 text-white"
                      : "bg-cream text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display Card (New Content Area) */}
      
              {showReminderContent &&
                reminderContent[
                selectedReminderCategory as keyof typeof reminderContent
                ] && (
                  <div className="w-full mx-0 sm:mx-auto px-1 mb-8">
                    <div className=" rounded-2xl p-2">
                      {/* Title/Context */}
                      <div className="text-center mb-4 sm:mb-6">
                        <p className="text-white text-right bg-[#0f1944] border border-[#173b2a] text-md sm:text-sm mb-3 sm:mb-4 w-fit px-6 py-4 rounded-full ml-auto">
                          {
                            reminderContent[
                              selectedReminderCategory as keyof typeof reminderContent
                            ].title
                          }
                        </p>
                      </div>

                      {/* <div className="flex items-center space-x-2 mb-6">
                        <h3 className="text-white text-xl font-semibold">
                          {
                            reminderContent[
                              selectedReminderCategory as keyof typeof reminderContent
                            ].title
                          }
                        </h3>
                      </div> */}

                      {/* Instructional Text */}
                      <div className="mb-2 max-w-full">
                        <p className="text-white italic text-lg text-center  w-full leading-relaxed font-[lato] font-medium">
                          {
                            reminderContent[
                              selectedReminderCategory as keyof typeof reminderContent
                            ].description
                          }
                        </p>
                      </div>

                      {/* Download Link */}
                      <div className="mb-8">
                        <p className='text-center text-lg italic font-semibold'>click the link below to get a copy:</p>
                        <a
                          href="#"
                          className="text-white sm:text-base text-md font-[lato] font-semibold hover:text-gray-100 transition-colors underline text-center block"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(
                              "Download PDF:",
                              selectedReminderCategory
                            );
                          }}
                        >
                          {
                            reminderContent[
                              selectedReminderCategory as keyof typeof reminderContent
                            ].downloadLink
                          }
                        </a>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap justify-center gap-4">
                        <button
                          onClick={() =>
                            handleReminderAction("Another reminder")
                          }
                          className="bg-cream border border-gray-400 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          Another reminder
                        </button>


                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
          <button
            // onClick={() => handleDuaAction("Discuss")}
            className="bg-[#451c92] border border-[#173b2a] text-white px-8 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors flex items-center space-x-1 justify-center  absolute bottom-20
             right-4 w-36 h-12"
          >
            <Image
              src='/Discuss.svg'
              width={'150'}
              height={'150'}
              alt="Discuss"
              className="w-8 h-8"
            />
            <span className='text-lg'>Discuss</span>
          </button>
        </div>
  );
}
