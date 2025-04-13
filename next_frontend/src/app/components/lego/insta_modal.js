"use client";
import React from "react";
import '@/globals.css';

const InstaModal = ({ media, caption, mediaType, onClose }) => {
    // Check if mediaType indicates a video
    const isVideo = mediaType === 'VIDEO';

    return (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">

            <div className="bg-white p-1 rounded shadow-lg w-auto max-w-[65vw] md:max-w-[50vw] h-auto max-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
                
                <div className="w-full h-auto flex items-center justify-center overflow-hidden rounded">
                    
                    {isVideo ? (
                        <video
                            src={media}
                            alt={caption}
                            className="max-w-full max-h-[60vh] object-contain"
                            controls
                            aria-label="Instagram Post Video"
                        />
                    ) : (

                        <img 
                            className="max-w-full object-contain" 
                            src={media} 
                            alt={caption} 
                            aria-label="Instagram Post Image"
                        />

                    )}

                </div>

                <p className="text-black font-nunito text-start p-2 text-xs sm:text-sm md:text-base">{caption}</p>
                
                <button 
                    className="bg-black text-white font-nunito text-xs sm:text-sm md:text-base px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    Close
                </button>

            </div>

        </div>

    );
};

export default InstaModal;
