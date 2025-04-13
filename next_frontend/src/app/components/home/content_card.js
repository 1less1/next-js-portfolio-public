"use client";
import React from "react";
import '@/globals.css';

// ContentCard components will always receive four props when created - onClick is an event handler
const ContentCard = ({ media, thumbnail, mediaType, onClick }) => {
    // Check if mediaType indicates a video
    const isVideo = mediaType === 'VIDEO';

    return (

        <div 
            className="relative w-full h-full overflow-hidden shadow-md bg-black transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" 
            onClick={onClick}>
            
            <img
                src={isVideo ? thumbnail : media}
                alt="Instagram Post"
                className="w-full h-full object-cover"
            />

            {isVideo && (
                <div className="absolute top-2 left-2 bg-black text-white font-nunito text-xxs sm:text-xs px-2 py-1 rounded">
                    Video
                </div>
            )}
            
        </div>

    );
};

export default ContentCard;