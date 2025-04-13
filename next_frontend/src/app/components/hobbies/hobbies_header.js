import React from "react";
import Image from "next/image";
import '@/globals.css';

const HobbiesHeader = () => {
    return (

        <div className="flex justify-center w-11/12 mx-auto -mb-12 md:-mb-14 lg:-mb-16 -mt-8 ">
            
            <div className="w-[285px] sm:w-[310px] md:w-[335px] lg:w-[360px]"> 
                
                <Image
                    src="/svg/hobbies_header.svg"
                    alt="Hobbies"
                    width={360}
                    height={275} // Random Height Dimension because it is REQUIRED
                    quality={85}
                    loading="eager" // Ensures the image loads immediately
                />

            </div>

        </div>

    );
    
};

export default HobbiesHeader;