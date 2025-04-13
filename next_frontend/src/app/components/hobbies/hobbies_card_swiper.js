"use client";
import React, { useState, useEffect } from "react";
import CardSwiper from "@/components/hobbies/card_swiper.js";
import { hobbyInfo } from "@/data/hobbies_info";

const HobbiesCardSwiper = () => {
    
    const [loaded, setLoaded] = useState(false);
    const [swiperLoaded, setSwiperLoaded] = useState(false);

    useEffect(() => {
        // Trigger the fade-in animation after the component is rendered on page.js
        setLoaded(true);
    }, []);

    const handleSwiperLoaded = () => {
        setSwiperLoaded(true); // This is triggered when CardSwiper finishes loading
    };

    return (

        <div className="relative flex flex-col w-10/12 mx-auto">

            {/* Hobby Slider */}
            <div className="relative flex items-center justify-center h-auto w-auto mx-auto">

                <div className="relative flex items-center justify-center h-[300px] w-[275px] sm:h-[350px] sm:w-[325px] md:h-[425px] md:w-[400px] opacity-0"
                style={{
                    opacity: loaded && swiperLoaded ? 1 : 0,
                    transition: "opacity 3s",
                }}>
                <CardSwiper cards={hobbyInfo} onLoaded={handleSwiperLoaded} />

                </div>

            </div>

        </div>


    );

};

export default HobbiesCardSwiper;
