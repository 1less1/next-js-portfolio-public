"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '@/globals.css';

const AdaptiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-black shadow-lg rounded-lg p-4 w-full mx-auto relative">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                
                <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bangers tracking-wider">1less1's Portfolio</h1>
                
                {/* Hamburger Icon Menu - Visible on screens SMALLER than Medium */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>
                
                {/* Links - Visible on Medium screens and higher */}
                <ul className="hidden md:flex flex-wrap space-x-6 mt-2 sm:mt-0">
                    <li>
                        <Link href="/" className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-nunito hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded">Home</Link>
                    </li>
                    
                    <li>
                        <Link href="/about" className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-nunito hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded">About</Link>
                    </li>
                    
                    <li>
                        <Link href="/projects" className="text-white text-xs sm:text-sm md:text-base lg:text-lg  font-nunito hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded">Projects</Link>
                    </li>

                    <li>
                        <Link href="/hobbies" className="text-white text-xs sm:text-sm md:text-base lg:text-lg  font-nunito hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded">Hobbies</Link>
                    </li>

                    <li>
                        <Link href="/lego" className="text-white text-xs sm:text-sm md:text-base lg:text-lg  font-nunito hover:bg-gray-600 transition duration-300 ease-in-out px-2 py-1 rounded">Lego</Link>
                    </li>

                </ul>
                
                {/* Slide-In Menu for Smaller Screens */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-end">
                        <div className="w-1/3 sm:w-1/4 bg-black h-full shadow-lg p-6 flex flex-col items-start space-y-4 transform transition-transform duration-400 ease-in-out">
                            
                            {/* "X" icon used to close the menu */}
                            <button onClick={toggleMenu} className="self-end text-white text-2xl mb-6">✕</button>

                            <Link href="/" className="text-white text-base font-nunito hover:bg-gray-600 transition duration-300 ease-in-out py-1 rounded" onClick={handleLinkClick}>Home</Link>
                            <Link href="/about" className="text-white text-base font-nunito hover:bg-gray-600 transition duration-300 ease-in-out py-1 rounded" onClick={handleLinkClick}>About</Link>
                            <Link href="/projects" className="text-white text-base font-nunito hover:bg-gray-600 transition duration-300 ease-in-out py-1 rounded" onClick={handleLinkClick}>Projects</Link>
                            <Link href="/hobbies" className="text-white text-base font-nunito hover:bg-gray-600 transition duration-300 ease-in-out py-1 rounded" onClick={handleLinkClick}>Hobbies</Link>
                            <Link href="/lego" className="text-white text-base font-nunito hover:bg-gray-600 transition duration-300 ease-in-out py-1 rounded" onClick={handleLinkClick}>Lego</Link>
                            

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default AdaptiveNavbar;
