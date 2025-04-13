import React from "react";
import '@/globals.css';

import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';  // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="relative w-full bg-black text-white py-4 px-4 flex items-center justify-between mt-40">
            
            <div className="flex-1 flex justify-start md:justify-center">
                
                <div className="text-center text-xs sm:text-sm md:text-base">
                    
                    <p>  
                        <span> Made with </span>
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Next.js </a>
                    
                    </p>
                
                </div>

            </div>

            <div className="absolute justify-center items-center right-4 flex">

                <div className="flex space-x-4">

                    <a href="mailto:slickbrickcentral@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={22} />
                    </a>

                    <a href="https://www.linkedin.com/in/dominick-olhava-47608a2ba/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={22} />
                    </a>

                    <a href="https://github.com/1less1" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={22} />
                    </a>

                    <a href="https://www.instagram.com/slickbrickcentral/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={22} />
                    
                    </a>

                </div>

            </div>
        </footer>

    );
};

export default Footer;

