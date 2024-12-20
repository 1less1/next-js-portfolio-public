import React, { useState, useEffect } from "react";
import '../../globals.css';
import '../../angled_divider.css';

const InvAwardsContentGrid = () => {
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

    <div className="relative flex w-11/12 mx-auto border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">
      {isSmallScreen ? (

        // Alternate Setup for Smaller Screens
        <div className="flex flex-col w-full">

          {/* Top Section */}
          <div className="relative overflow-hidden clip-bottom-edge-alt p-4"
            style={{
                flexBasis: '50%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_five.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <h1 className="font-bangers text-white text-lg md:text-xl lg:text-2xl tracking-wider">
              <span className="border-b-2 border-white">Campus Involvement</span>
            </h1>

            <ul className="list-disc font-nunito text-white text-xxs sm:text-sm md:text-base lg:text-lg pl-5 p-2">
              
              <li>UNI Army ROTC - Color Guard and Push Up Crew</li>
              <li>UNI Jump Start Program - Pathfinder</li>
              <li>UNI Student Success and Retention - Success Coach</li>
              
              <li>
                UNISEC - Cyber Security Club
                <ul className="list-disc pl-5">
                  <li>2024 ISU ICE</li>
                  <li>2024 CPTC</li>
                  <li>2024 CFC</li>
                </ul>
              </li>
              <li>UNI Computer Club</li>

            </ul>

          </div>

          {/* Bottom Section */}
          <div className="relative overflow-hidden clip-top-edge-alt h-1/2 p-4"
            style={{
                flexBasis: '50%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_seven.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <h1 className="font-bangers text-white text-lg md:text-xl lg:text-2xl tracking-wider pl-4">
              <span className="border-b-2 border-white">Awards</span>
            </h1>

            <ul className="list-disc font-nunito text-white text-xxs sm:text-sm md:text-base lg:text-lg pl-8 p-2">
              
              <li>
                UNI Dean's List
                <ul className="list-disc pl-5">
                  <li>Fall 2022</li>
                  <li>Spring and Fall 2023</li>
                  <li>Spring and Fall 2024</li>
                </ul>
              </li>

              <li>2023 Department of the Army Superior Cadet Award</li>
              <li>2024 Department of the Army Superior Cadet Award</li>
              <li>UNI SSR nominee Student Employee of the Year for 2023-2024</li>
              <li>2024 NODA Leadership Conference</li>

            </ul>

          </div>

        </div>

      ) : (

        // Original Setup for Medium Screens and Larger
        <div className="relative flex w-full">

          {/* Left Section */}
          <div className="overflow-hidden clip-right-edge flex-1 p-4"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_five.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <h1 className="font-bangers text-white text-lg md:text-xl lg:text-2xl tracking-wider">
              <span className="border-b-2 border-white">Campus Involvement</span>
            </h1>

            <ul className="list-disc font-nunito text-white text-xxs sm:text-sm md:text-base lg:text-lg pl-5 p-2">

              <li>UNI Army ROTC - Color Guard and Push Up Crew</li>
              <li>UNI Jump Start Program - Pathfinder</li>
              <li>UNI Student Success and Retention - Success Coach</li>
              
              <li>
                UNISEC - Cyber Security Club
                <ul className="list-disc pl-5">
                  <li>2024 ISU ICE</li>
                  <li>2024 CPTC</li>
                  <li>2024 CFC</li>
                </ul>
              </li>

              <li>UNI Computer Club</li>

            </ul>

          </div>

          {/* Right Section */}
          <div className="overflow-hidden clip-left-edge flex-1 p-4"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_seven.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <h1 className="font-bangers text-white text-lg md:text-xl lg:text-2xl tracking-wider pl-4">
              <span className="border-b-2 border-white">Awards</span>
            </h1>

            <ul className="list-disc font-nunito text-white text-xxs sm:text-sm md:text-base lg:text-lg pl-8 p-2">
              
              <li>
                UNI Dean's List
                <ul className="list-disc pl-5">
                  <li>Fall 2022</li>
                  <li>Spring and Fall 2023</li>
                  <li>Spring and Fall 2024</li>
                </ul>
              </li>

              <li>2023 Department of the Army Superior Cadet Award</li>
              <li>2024 Department of the Army Superior Cadet Award</li>
              <li>UNI SSR nominee Student Employee of the Year for 2023-2024</li>
              <li>2024 NODA Leadership Conference</li>

            </ul>

          </div>

        </div>

      )}
    </div>

  );

};

export default InvAwardsContentGrid;
