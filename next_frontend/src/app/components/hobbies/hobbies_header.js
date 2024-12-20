import React, { useState, useEffect } from "react";

const HobbiesHeader = () => {

    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
      // Trigger the fade-in animation after the component is rendered on page.js
      setLoaded(true);
    }, []);

    return  (
        
        <div className="flex justify-center items-center w-10/12 -mb-12 -mt-6 md:-mt-8 md:-mb-16 mx-auto">
            
            <div className="w-[275px] sm:w-[300px] md:w-[350px] opacity-0 z-[-1]" 
                style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateX(0)" : "translateX(-20px)",
                    transition: "opacity 1s, transform 1s",
                }}> 

                <img src="/svg/hobbies_header.svg" alt="Hobbies"></img>

            </div>

        </div>

    );

};

export default HobbiesHeader;