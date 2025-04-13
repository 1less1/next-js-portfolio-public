import React from "react";
import '../globals.css';


// ContentCard components will always receive three props when created - onClick is an event handler
const ContentCard = ({ image, caption, onClick }) => {
    return (
        <div 
            className="relative w-full h-full overflow-hidden shadow-md bg-black transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer" 
            onClick={onClick}>
            
            <img 
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out" 
                src={image} 
                alt={caption} 
            />
            
        </div>
    );
};

export default ContentCard;