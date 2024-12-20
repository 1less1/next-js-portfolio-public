import React, { useState, useEffect } from "react";
import CardSwiper from "./card_swiper.js";
import { hobbyInfo } from "@/app/data/hobbies_info";

const HobbiesCardSwiper = () => {

    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
    // Trigger the fade-in animation after the component is rendered on page.js
    setLoaded(true);
    }, []);

    return (

        <div className = "relative flex flex-col w-10/12 mx-auto">

            {/* Hobby Slider */}
            <div className="relative flex items-center justify-center h-auto w-auto mx-auto">
            <div className="relative flex items-center justify-center h-[300px] w-[275px] sm:h-[350px] sm:w-[325px] md:h-[425px] md:w-[400px] opacity-0" 
                style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateX(0)" : "translateX(20px)",
                    transition: "opacity 1s, transform 1s",
                }}>

                    <CardSwiper cards={hobbyInfo} />
                
                </div>
            
            </div>
        </div>


    );


};

export default HobbiesCardSwiper;