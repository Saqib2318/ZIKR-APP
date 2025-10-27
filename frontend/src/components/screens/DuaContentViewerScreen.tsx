"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BookMarked, Copy, Ellipsis, Pencil, Upload } from 'lucide-react';
import Footer from '../mainComponents/footer';

interface DuaContentViewerScreenProps {
  profileDuaContent: Record<string, {
    title: string;
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  }>;
  selectedDuaCategory: string;
  setShowDiscussMenu: (show: boolean) => void;
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  handleDiscussClick: () => void;
  setActivateTab:(value:string)=>void;
  activeTab:string
}

const DuaContentViewerScreen: React.FC<DuaContentViewerScreenProps> = ({
  profileDuaContent,
  selectedDuaCategory,
  setShowDiscussMenu,
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  setActivateTab,
  activeTab,
  handleDiscussClick,
}) => {
  const [toggleMoreMenu, setToggleMoreMenu] = useState<boolean>(false)

  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none bg-gradient-to-b from-[#0D4A42] to-[#0B1E3A] overflow-hidden">
      {/* Header/Top Bar - Like in image */}
      <div className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4">
        {/* Left: Back arrow and green leaf icon - Mobile Responsive */}

        <button
          onClick={() => {
            setShowAuthenticDuaSelection(false);
            setShowHomeScreen(false);
            setActivateTab('Home');
          }}
          className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors"
        >
          <Image
            src="/arrow.svg"
            alt="ArrowImage"
            height="200" width="200" className="h-6 w-6 rotate-180"
          />
        </button>

        {/* Right Icons - Like in image - Mobile Responsive */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          {/* <button className="text-white text-md sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-8 h-8 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-8 h-8 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="text-white text-2xl sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <span className="font-bold">Aa</span>
          </button>
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-8 h-8 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>

        </div>
      </div>
      {/* Title - Mobile Responsive */}
      <div className='w-full h-fit px-4 py-2 relative bg-green-900 flex justify-between items-center'>
        <h1 className="text-white text-xl sm:text-lg md:text-lg font-semibold sm:font-medium text-center">
          {profileDuaContent[
            selectedDuaCategory as keyof typeof profileDuaContent
          ]?.title || selectedDuaCategory}
        </h1>
        <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors"
          onClick={() => {
            setToggleMoreMenu(!toggleMoreMenu)
          }}>
          <span className='font-bold text-3xl'> <Ellipsis /></span>
          {toggleMoreMenu && <div className='px-4 z-20 py-3 border- absolute -bottom-46 right-0 flex justify-between items-start flex-col w-60 h-fit bg-white rounded-2xl'>
            <button className='flex items-center justify-between w-full border-b border-gray-400 py-1'>
              <span className='text-gray-600 text-lg'>Favori</span><BookMarked className='text-green-900' />
            </button>
            <button className='flex items-center justify-between w-full border-b border-gray-400 py-1'>
              <span className='text-gray-600 text-lg'>Note</span><Pencil className='text-green-900' />
            </button>
            <button className='flex items-center justify-between w-full border-b border-gray-400 py-1'>
              <span className='text-gray-600 text-lg'>Copier</span><Copy className='text-green-900' />
            </button>
            <button className='flex items-center justify-between w-full py-1'>
              <span className='text-gray-600 text-lg'>Partager</span><Upload className='text-green-900' />
            </button>
            <div className='absolute -top-3 right-2 w-8 h-10 bg-white'
              style={{
                // This creates the triangular shape that points out
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                transform: 'rotate(315deg)', // Position and rotate it
                borderRadius: '0 0 4px 0', // Optional: slightly round the corner
              }}
            ></div>
          </div>}
        </button>
      </div>
      {/* Dua Content Display - Scrollable - Like in image - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto mt-20">
        <div className="px-3 sm:px-4 pb-0">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            {profileDuaContent[
              selectedDuaCategory as keyof typeof profileDuaContent
            ] && (
                <>
                  {/* Arabic Text - Large and centered - Mobile Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-[#92c6aa] text-[15.8px] font-arabic leading-relaxed text-center">
                      {
                        profileDuaContent[
                          selectedDuaCategory as keyof typeof profileDuaContent
                        ].arabic
                      }
                    </p>
                  </div>

                  {/* Transliteration - Italic - Mobile Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-white text-[15.8px] italic leading-relaxed text-center">
                      {
                        profileDuaContent[
                          selectedDuaCategory as keyof typeof profileDuaContent
                        ].transliteration
                      }
                    </p>
                  </div>

                  {/* English Translation - Mobile Responsive */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-[#f9f6dc] text-[15.8px] leading-relaxed text-center">
                      {
                        profileDuaContent[
                          selectedDuaCategory as keyof typeof profileDuaContent
                        ].translation
                      }
                    </p>
                  </div>
   {/* Audio Controls - Like in image - Mobile Responsive */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-6 md:space-x-8 mb-12 sm:mb-16">

              {/* Heart Button - Mobile Responsive */}
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              {/* Previous Button - Mobile Responsive */}
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                <svg
                  className="w-16 h-16 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play/Pause Button - Large circular - Mobile Responsive */}
              <button className="relative w-20 h-20 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-black text-2xl sm:text-3xl hover:bg-gray-100 transition-colors shadow-lg">
                <svg
                  className="w-16 h-16 sm:w-8 sm:h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Next Button - Mobile Responsive */}
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                <svg
                  className="w-16 h-16 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>
                  {/* Source Reference - Mobile Responsive */}
                  <div className="text-left mb-6 sm:mb-8">
                    <p className="text-gray-500 text-xs sm:text-sm max-w-[270px]">
                      {
                        profileDuaContent[
                          selectedDuaCategory as keyof typeof profileDuaContent
                        ].source
                      }
                    </p>
                  </div>
                </>
              )}

         

            {/* Progress Indicator - Small teal circle */}

          </div>
        </div>
      </div>

      {/* Bottom Discuss Button - Like in image - Mobile Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 right-8 transform">
        <button
          onClick={() => {
            handleDiscussClick();
          }}
          className="bg-[#35458a] w-fit ml-auto  border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2"
        >
          <Image
            width={200}
            height={200}
            src="/Discuss.svg" alt="Dua" className="w-5 h-5" />
          <span className="text-white text-sm sm:text-sm font-medium">
            Discuss
          </span>
          <Image
            width={200}
            height={200}
            src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
        </button>
      </div>
      <Footer setActiveTab={setActivateTab} activeTab={activeTab}/>
    </div>
  );
};

export default DuaContentViewerScreen;
