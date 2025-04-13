import React from "react";
import Image from "next/image";
import '@/globals.css';

const NewestPostHeader = () => {
    return (

        <div className="flex justify-center md:justify-start w-11/12 mx-auto -mb-12 md:-mb-14 lg:-mb-16 -mt-8">
            
            <div className="w-[275px] sm:w-[300px] md:w-[325px] lg:w-[350px]"> 
                
                <Image
                    src="/svg/newest_posts_header.svg"
                    alt="Newest Posts"
                    width={350}
                    height={275} // Random Height Dimension because it is REQUIRED
                    quality={85}
                />

            </div>

        </div>
    );
};

export default NewestPostHeader;
