import React from "react";
import '../globals.css';

// // Modal components will always receive three props when created - onClose is an event handler
const Modal = ({ image, caption, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            
            <div className="bg-white p-4 rounded shadow-lg w-auto max-w-[70vw] h-[375px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden">
                
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded">
                    <img 
                        className="w-full h-full object-cover" 
                        src={image} 
                        alt={caption} 
                    />
                </div>

                <p className="text-black font-nunito text-center p-2 text-sm">{caption}</p>
                
                <button 
                    className="bg-black text-white font-nunito px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                    onClick={onClose}
                >
                    Close
                </button>

            </div>

        </div>
    );
};

export default Modal;


