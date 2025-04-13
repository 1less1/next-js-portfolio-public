import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/globals.css';

const SpeechBoxGrid = () => {

    return (
        
        <div className="flex justify-center items-center mx-auto w-11/12 my-4 md:-mt-12 md:-mb-16 lg:my-0">

            <div className="grid grid-cols-2 md:grid-cols-4 w-full">
                {[
                    { src: '/svg/about_me_speech_box_small.svg', name: 'About Me Speech Box', link: '/about' },
                    { src: '/svg/projects_speech_box_small.svg', name: 'Projects Speech Box', link: '/projects' },
                    { src: '/svg/hobbies_speech_box_small.svg', name: 'Hobbies Speech Box', link: '/hobbies' },
                    { src: '/svg/lego_speech_box_small.svg', name: 'Lego Speech Box', link: '/lego' },
                ].map((speechBox, index) => (
                    
                    <div className="relative cursor-pointer flex pointer-events-none -my-4 md:my-0" key={index}>

                        {/* Wrapper div to control hover area */}
                        <div className="relative group flex justify-center items-center w-full h-48 md:h-64">
                            
                            {/* Clouds SVG */}
                            <Image
                                src="/svg/clouds_small.svg"
                                alt="Clouds Icon"
                                width={500}
                                height={500}
                                layout="responsive" 
                                quality={85}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                                style={{ transform: "translate(-50%, -50%) scale(1.15)" }} // scale cloud SVG using CSS
                            />
                            
                            {/* Speech Box SVG with Link */}
                            <Link href={speechBox.link}>
                                <Image
                                    src={speechBox.src}
                                    alt={speechBox.name}
                                    width={500}
                                    height={500}
                                    quality={85}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-125 pointer-events-auto w-[75%] h-[75%]"
                                />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div>

    );
};

export default SpeechBoxGrid;
