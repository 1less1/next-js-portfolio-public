"use client";
import React, { useState, useEffect } from "react";
import { workExperience } from "@/data/work_experience";
import ImageSlider from "@/components/about/image_slider";

const WorkExpSlider = () => {

    const [loaded, setLoaded] = useState(false);
        
        // Mainly Added this Animation since the different instances of swiper.js on "About" and "Hobbies" pages are conflicting
        // Before adding the animation, if you navigated to "Hobbies" and back to "About", this slider would not load until the page was 
        // refreshed, practically making you load the page twice. Big L! Figured it out though!
        useEffect(() => {
        // Trigger the fade-in animation after the component is rendered on page.js
        setLoaded(true);
        }, []);

    return(
        
        // Did not want to use vh here to size it.
        // The breakpoint sizing looked better on screen!
        <div className="relative flex flex-col w-11/12 mx-auto my-8">
            
            {/* Work Experience Image Slider */}
            <div className="relative flex items-center justify-center w-auto h-100 md:h-112 lg:h-124 overflow-hidden opacity-0"
                style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(-20px)",
                    transition: "opacity 1s, transform 1s",
                }}>

                <ImageSlider slides={workExperience} />

            </div>

        </div>

    );

};

export default WorkExpSlider;