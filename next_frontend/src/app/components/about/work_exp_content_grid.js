import React from "react";
import { workExperience } from "@/data/work_experience";
import '@/globals.css';
import '@/angled_divider.css'
import ImageSlider from "@/components/about/image_slider";

const WorkExpContentGrid = () => {

    // CURRENTLY NOT IN USE!!!!!!!!!

    return (

        <div className="relative flex justify-center items-center w-10/12 mx-auto my-8 h-88 sm:h-100 md:h-112 lg:h-124">

            {/* Left Section (Hidden on screens smaller than 'lg') */}
            <div
            className="relative flex flex-col border-[12px] border-white overflow-hidden hidden lg:flex"
            style={{
                flexBasis: "20%",
                height: "100%",
                backgroundImage: "url('/images/comic_bg_three.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <img
                    src="/svg/work_exp_vertical_header.svg"
                    alt="Work Experience Label"
                    className="h-full w-full" 
                />

            </div>

        
            {/* Right Section (TripleSlider) */}
            <div
                className="relative flex items-center justify-center w-full md:ml-6 lg:w-auto overflow-hidden"
                style={{
                    flexBasis: "100%", // Full width when below 'sm'
                    height: "100%",
                }}>
                
                <ImageSlider slides={workExperience} />

            </div>
        
        </div>
      
      

    );



};

export default WorkExpContentGrid;