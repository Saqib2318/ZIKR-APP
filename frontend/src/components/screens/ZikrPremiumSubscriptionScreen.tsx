"use client";
import { HeartIcon } from '@heroicons/react/20/solid';
import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Leave from "../../../public/leave.png";
import Dua from "../../../public/Dua.png";
import Pray from "../../../public/Pray.svg";
import SpritualReminder from "../../../public/spritual-reminder.png";

interface WelcomeScreenProps {
    showWelcomeScreen: boolean;
    isAuthenticated: boolean;
   handleLeavesMenuToggle: () => void;
    showLeavesMenu:boolean;
    setShowDiscussMenu:(value:boolean)=>void;
}

export default function ZikrPremiumSubscriptionScreen(
    {
        showWelcomeScreen,
        isAuthenticated,
        handleLeavesMenuToggle,
        showLeavesMenu,
        setShowDiscussMenu

    }: WelcomeScreenProps) {
    if (!isAuthenticated) return null;

    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden">


            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-4 sm:px-6 py-8">
                {/* Header & Title Area */}
                <div className="text-center mb-2 sm:mb-12">
                    {/* Arabic Title - Stylized Green Font */}
                    <div className="flex items-center mb-4 w-full h-auto">
                        {/* <HeartIcon color='oklch(68.1% 0.162 75.834)' width={50} height={50} />
                        <h1 className="text-4xl font-bold mt-1 tracking-wider  text-yellow-600">
                            My.Zikr+
                        </h1> */}
                        <Image
                        src={'/MyZikrPremium.png'}
                        alt=''
                        width={'200'}
                        height={'200'}
                        className='w-60 sm:w-full h-full object-cover'
                        />
                    </div>
                </div>


                {/* Input Bar - New Main Feature */}
                <div className="w-full max-w-lg">
                    <div className="relative flex gap-[20px] items-center flex-col">
                        <div className="relative w-full max-w-4xl rounded-2xl sm:mx-auto bg-[#173b2a] text-white  px-4 py-2">
                            <p className="leading-relaxed text-lg font-semibold sm:text-md text-center">Cette fonctionnalité fait partie de My.Zikr+ 🌸 - une expérience complète pour nourrir ton cœur en profondeur.</p>
                        </div>
                        <div className="relative w-full max-w-4xl rounded-2xl sm:mx-auto bg-[#173b2a] text-white px-4 py-2">
                            <p className="leading-relaxed text-lg sm:text-md text-center font-semibold">
                                Tu peux continuer à utiliser toutes les douas gratuites, ou débloquer Zikr+ pour accéder à :
                            </p>
                            <ul className="flex flex-col gap-1 w-full font-semibold  text-lg sm:text-md my-4">
                                <li>🎧 Douas audio apaisantes</li>
                                <li>🌸 Thèmes guidés (patience, gratitude...)</li>
                                <li>
                                    ✉️ Ton carnet illimité
                                </li>
                            </ul>
                        </div>
                        <div className='w-full max-w-4xl flex flex-col gap-2 items-center justify-center'>
                            <button className='text-md bg-amber-50 text-gray-600 font-medium px-10 py-4 rounded-4xl flex space-x-1 justify-center items-center'>
                                <HeartIcon width={25} height={25} className=' text-amber-300'/><span className='text-lg font-semibold'>Découvrir Zikr+</span>
                            </button>
                            <button className='text-md bg-green-950 text-white font-medium px-6 py-4 rounded-4xl flex space-x-1 justify-center items-center'>
                                <span className='text-lg font-semibold'>Continuer gratuitement</span>
                            </button>
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
        </div>
    );
}
