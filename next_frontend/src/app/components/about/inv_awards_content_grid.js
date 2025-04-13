import React from "react";
import '@/globals.css';
import '@/angled_divider.css';

const InvAwardsContentGrid = () => {
  return (
    <div className="relative w-11/12 mx-auto border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">

      {/* Small Screens Layout */}
      <div className="flex flex-col md:hidden">

        {/* Top Section */}
        <div className="relative overflow-hidden bg-gray p-4 clip-bottom-edge-alt"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_five.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h1 className="justify-start font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
            <span className="border-b-2 border-white">Campus Involvement</span>
          </h1>

          <ul className="justify-start list-[square] ml-4 font-nunito text-xxs sm:text-xs md:text-base lg:text-lg text-white">
            <li>UNI Army ROTC - Color Guard and Push Up Crew</li>
            <li>UNI Jump Start Program - Pathfinder</li>
            <li>UNI Student Success and Retention - Success Coach</li>
            <li>
              UNISEC - Cyber Security Club
              <ul className="list-[circle] ml-4">
                <li>2024 ISU ICE</li>
                <li>2024 CPTC</li>
                <li>2024 CFC</li>
                <li>2025 ICDC</li>
              </ul>
            </li>
            <li>UNI Computer Club</li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="relative overflow-hidden bg-gray p-4 clip-top-edge-alt"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_seven.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h1 className="justify-start font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
            <span className="border-b-2 border-white">Awards</span>
          </h1>

          <ul className="justify-start list-[square] ml-4 font-nunito text-xxs sm:text-xs md:text-base lg:text-lg text-white">
            <li>
              UNI Dean's List
              <ul className="list-[circle] ml-4">
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

      {/* Medium and Larger Screens Layout */}
      <div className="hidden md:flex w-full">

        {/* Left Section */}
        <div className="relative overflow-hidden flex-1 bg-gray p-4 clip-right-edge"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_five.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h1 className="justify-start ml-6 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
            <span className="border-b-2 border-white">Campus Involvement</span>
          </h1>

          <ul className="justify-start list-[square] ml-12 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg text-white">
            <li>UNI Army ROTC - Color Guard and Push Up Crew</li>
            <li>UNI Jump Start Program - Pathfinder</li>
            <li>UNI Student Success and Retention - Success Coach</li>
            <li>
              UNISEC - Cyber Security Club
              <ul className="list-[circle] ml-6">
                <li>2024 ISU ICE</li>
                <li>2024 CPTC</li>
                <li>2024 CFC</li>
              </ul>
            </li>
            <li>UNI Computer Club</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="relative overflow-hidden flex-1 bg-gray p-4 clip-left-edge"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/comic_bg_seven.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h1 className="justify-start ml-6 font-bangers text-lg md:text-xl lg:text-2xl tracking-wider text-white">
            <span className="border-b-2 border-white">Awards</span>
          </h1>

          <ul className="justify-start list-[square] ml-12 font-nunito text-xxs sm:text-sm md:text-base lg:text-lg text-white ">
            <li>
              UNI Dean's List
              <ul className="list-[circle] ml-6">
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

    </div>
  );
};

export default InvAwardsContentGrid;
