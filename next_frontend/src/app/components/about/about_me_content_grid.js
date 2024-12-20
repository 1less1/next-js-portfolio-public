import React, { useState, useEffect } from 'react';
import '../../globals.css';
import '../../angled_divider.css';

const AboutMeContentGrid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex w-11/12 mx-auto mt-8 md:mt-12 border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">
      {isSmallScreen ? (

        // Alternate Setup for Smaller Screens
        <div className="flex flex-col h-154 w-full">
          
          {/* Top Section */}
          <div className="relative overflow-hidden clip-bottom-edge"
            style={{
              flexBasis: '42%',
              backgroundImage: "url('/images/headshots/headshot_one.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          </div>

            {/* Middle Section */}
            <div className="relative overflow-hidden bg-gray p-4 clip-vertical-edges-alt"
              style={{
                flexBasis: '33%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_two.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <h1 className="ml-6 md:ml-8 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">About Me</span>
              </h1>
              <p className="ml-4 md:ml-6 p-2 font-nunito text-xxs sm:text-xs md:text-base lg:text-lg leading-relaxed text-white">
                Hi there, my name is Dominick! I am currently a student at the University
                of Northern Iowa. Right now, I am working on my Computer Science degree
                emphasizing Software Engineering and System Security. I am performance
                driven and results oriented seeking challenging opportunities with a
                progressive organization. I possess exceptional communication,
                demonstrated leadership skills, and the ability to solve complex problems.
                Additionally, I pride myself on the ability to unlock and elevate the
                potential of those around me while putting them in positions to succeed!
              </p>
            </div>
            
            {/* Bottom Section */}
            <div className="relative overflow-hidden bg-gray p-4 clip-top-edge-alt"
              style={{
                flexBasis: '25%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_four.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <h1 className="justify-start ml-6 md:ml-8 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">Education Info</span>
              </h1>
              <ul className="justify-start list-disc ml-10 md:ml-12 p-2 font-nunito text-xxs sm:text-xs md:text-base lg:text-lg text-white">
                <li>University of Northern Iowa</li>
                <li>Computer Science B.S.
                  <ul className="list-disc ml-6">
                    <li>Emphasis in Software Engineering and System Security</li>
                  </ul>
                </li>
                <li>GPA: 4.0</li>
                <li>Honors Program</li>
                <li>Army ROTC</li>
                <li>Graduating May 2026</li>
              </ul>
            </div>
          
        </div>

      ) : (

        // Original Setup for Medium Screens and Larger
        <div className="relative flex w-full">

          {/* Left Section */}
          <div className="relative overflow-hidden clip-right-edge" style={{ flexBasis: '35%' }}>
            <img
              src="/images/headshots/headshot_one.jpg"
              alt="Headshot"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Section */}
          <div className="relative flex flex-col overflow-hidden clip-left-edge" style={{ flexBasis: '65%' }}>
            
            <div className="relative overflow-hidden bg-gray p-4"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_two.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              <h1 className="ml-6 md:ml-8 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">About Me</span>
              </h1>

              <p className="ml-4 md:ml-6 p-2 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white">
                Hi there, my name is Dominick! I am currently a student at the University
                of Northern Iowa. Right now, I am working on my Computer Science degree
                emphasizing Software Engineering and System Security. I am performance
                driven and results oriented seeking challenging opportunities with a
                progressive organization. I possess exceptional communication,
                demonstrated leadership skills, and the ability to solve complex problems.
                Additionally, I pride myself on the ability to unlock and elevate the
                potential of those around me while putting them in positions to succeed!
              </p>

            </div>
            
            {/* White Horizontal Divider */}
            <div className="bg-white h-2 md:h-3"></div>

            <div className="relative overflow-hidden bg-gray p-4"
              style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_four.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              <h1 className="justify-start ml-6 md:ml-8 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">Education Info</span>
              </h1>

              <ul className="justify-start list-disc ml-10 md:ml-12 p-2 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg text-white">
                
                <li>University of Northern Iowa</li>
                <li>Computer Science B.S.
                  <ul className="list-disc ml-6">
                    <li>Emphasis in Software Engineering and System Security</li>
                  </ul>
                </li>
                <li>GPA: 4.0</li>
                <li>Honors Program</li>
                <li>Army ROTC</li>
                <li>Graduating May 2026</li>
              </ul>

            </div>

          </div>

        </div>

      )}
    </div>
    
  );

};

export default AboutMeContentGrid;
