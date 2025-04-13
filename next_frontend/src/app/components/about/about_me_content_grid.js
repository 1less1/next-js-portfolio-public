import React from 'react';
import '@/globals.css';
import '@/angled_divider.css';

const AboutMeContentGrid = () => {
  
  return (
    <div className="relative w-11/12 mx-auto mt-8 md:mt-12 border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">

      {/* Small Screens Layout */}
      <div className="flex flex-col md:hidden">

        {/* Top Section */}
        <div className="relative overflow-hidden flex-grow-0 clip-bottom-edge">
          <img
            src="/images/headshots/headshot_one.webp"
            alt="Headshot"
            className="w-full h-auto object-cover max-h-[70vh]"
          />
        </div>

        {/* Middle Section */}
        <div className="relative overflow-hidden bg-gray p-4 min-h-min clip-vertical-edges-alt"
            style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_two.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}>

            <h1 className="justify-start font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
            <span className="border-b-2 border-white">About Me</span>
            </h1>

            <p className="justify-start font-nunito text-xxs sm:text-xs md:text-base lg:text-lg leading-relaxed text-white">
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
        <div className="relative overflow-hidden bg-gray p-4 min-h-min clip-top-edge-alt"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_four.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              <h1 className="justify-start font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">Education Info</span>
              </h1>

              <ul className="justify-start list-[square] ml-4 font-nunito text-xxs sm:text-xs md:text-base lg:text-lg text-white">

                <li>University of Northern Iowa</li>

                <li>Computer Science B.S.
                  <ul className="list-[circle] ml-4">
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

      {/* Medium and Larger Screens Layout */}
      <div className="hidden md:flex w-full">
        {/* Left Section */}
        <div className="relative overflow-hidden clip-right-edge flex-[35%]">
          <img src="/images/headshots/headshot_one.webp" alt="Headshot" className="object-cover w-full h-full" />
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col overflow-hidden clip-left-edge flex-[65%]">

            {/* Top Section */}
            <div className="relative overflow-hidden bg-gray p-4"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_two.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              <h1 className="justify-start ml-6 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">About Me</span>
              </h1>

              <p className="justify-start ml-6 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white">
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

            {/* Bottom Section */}  
            <div className="relative overflow-hidden bg-gray p-4"
              style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_four.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              <h1 className="justify-start ml-6 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
                <span className="border-b-2 border-white">Education Info</span>
              </h1>

              <ul className="justify-start list-[square] ml-12 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg text-white">
                
                <li>University of Northern Iowa</li>

                <li>Computer Science B.S.
                  <ul className="list-[circle] ml-6">
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

    </div>
    
  );
};

export default AboutMeContentGrid;
