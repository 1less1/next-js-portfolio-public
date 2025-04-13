import React from "react";
import '@/globals.css';

const ProjectContentCard = ({ image, title, description, githublink }) => {
    return (

        <div className="relative flex flex-col bg-white border-[2px] rounded-lg shadow-lg overflow-hidden h-[395px] md:h-[455px] lg:h-[500px]">
            
            {/* Upper Image Section */}
            <div className="relative flex-none h-[65%] lg:h-[70%]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Lower Description Section */}
            <div className="relative flex-none h-[35%] lg:h-[30%] font-nunito p-4">
                <h3 className="font-bold text-black text-lg md:text-xl">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{description}</p>

                {/* GitHub Link */}
                <a
                    href={githublink}
                    target="_blank" // Opens Link in New Tab
                    rel="noopener noreferrer" // For Cyber Security
                    className="absolute bottom-2 right-2 text-blue-500 text-sm md:text-base hover:underline"
                >
                    GitHub →
                </a>

            </div>

        </div>
        
    );
};

export default ProjectContentCard;


