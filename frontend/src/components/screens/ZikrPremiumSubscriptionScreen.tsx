"use client";

import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Leave from "../../../public/leave.png";
import Dua from "../../../public/Dua.png";
import Pray from "../../../public/Pray.svg";
import SpritualReminder from "../../../public/spritual-reminder.png";

interface WelcomeScreenProps {
    showWelcomeScreen: boolean;
    isAuthenticated: boolean;
}

export default function ZikrPremiumSubscriptionScreen(
    {
        showWelcomeScreen,
        isAuthenticated,

    }: WelcomeScreenProps) {
    if (!showWelcomeScreen) return null;

    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden">


            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-4 sm:px-6 py-8">
                {/* Header & Title Area */}
                <div className="text-center mb-8 sm:mb-12">
                    {/* Arabic Title - Stylized Green Font */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="text-3xl text-yellow-400">
                            &#128155; {/* Yellow Heart Icon */}
                        </div>
                        <h1 className="text-2xl font-bold mt-1 tracking-wider">
                            My.Zikr+
                        </h1>
                    </div>
                </div>


                {/* Input Bar - New Main Feature */}
                <div className="w-full max-w-lg">
                    <div className="relative flex gap-[20px] items-center">
                        <div className="relative w-full max-w-4xl rounded-2xl sm:mx-auto bg-[#173b2a] text-white">
                            <p className="leading-relaxed text-lg sm:text-md">Cette fonctionnalité fait partie de My.Zikr+ 🌸 - une expérience complète pour nourrir ton cœur en profondeur.</p>
                        </div>
                        <div className="relative w-full max-w-4xl rounded-2xl sm:mx-auto bg-[#173b2a] text-white">
                            <p className="leading-relaxed text-lg sm:text-md">
                                Tu peux continuer à utiliser toutes les douas gratuites, ou débloquer Zikr+ pour accéder à :
                            </p>
                            <ul className="flex flex-col gap-4 w-full">
                                <li>🎧 Douas audio apaisantes</li>
                                <li>🌸 Thèmes guidés (patience, gratitude...)</li>
                                <li>
                                    ✉️ Ton carnet illimité
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='text-md bg-amber-500 text-white font-medium px-4 py-2 rounded-2xl'>
                                💛 Découvrir Zikr+
                            </button>
                            <button className='text-md bg-amber-500 text-white font-medium px-4 py-2 rounded-2xl'>
                                Continuer gratuitement
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
