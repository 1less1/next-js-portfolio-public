import React, { useState, useEffect } from 'react';
import '../../globals.css';
import '../../angled_divider.css';

const WelcomeAngledGrid = () => {
  
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
    <div className="relative w-11/12 mx-auto mt-8 md:mt-12 border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">
      {isSmallScreen ? (

        // Alternate Setup for Smaller Screens
        <div className="flex flex-col h-100">
          {/* Top Section */}
          <div className="relative flex items-center justify-center overflow-hidden clip-bottom-edge-alt" 
            style={{
              flexBasis: '50%',
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>

            <img 
              src="/svg/welcome_msg.svg"
              className="relative flex w-auto h-48"
            />

          </div>
          
           {/* Bottom Section */}
          <div className="relative flex items-center justify-center overflow-hidden clip-top-edge-alt" 
            style={{
              flexBasis: '50%',
              backgroundImage: "url('/images/mark_and_moon.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>

            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center animate-slide-in">
              
              <p className="text-white text-sm p-2 sm:p-4 md:p-6 text-center">
                "You know the Greeks didn't write obituaries. <br/>
                They only asked one question after a man died: <br/>
                Did he have <strong>passion</strong>?" <br/>
                - Serendipity
              </p>

            </div>

          </div>

        </div>
        
      ) : (

        // Original Setup for Medium Screens and Larger
        <div className="relative flex h-56 sm:h-64 md:h-80 lg:h-112">

          {/* Left Section */}
          <div className="relative flex items-center justify-center overflow-hidden clip-right-edge" 
            style={{ 
              flexBasis: '35%',
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>

            <img 
              src="/svg/welcome_msg.svg"
              className="relative flex w-auto h-48 md:h-64 lg:h-80"
            />

          </div>

          {/* Right Section */}
          <div className="relative flex overflow-hidden clip-left-edge" 
            style={{ 
              flexBasis: '65%',
              backgroundImage: "url('/images/mark_and_moon.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>

            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center animate-slide-in">
              
              <p className="text-white text-base lg:text-xl ml-2 sm:ml-4 md:ml-6 text-center">
                "You know the Greeks didn't write obituaries. <br/>
                They only asked one question after a man died: <br/>
                Did he have <strong>passion</strong>?" <br/>
                - Serendipity
              </p>

            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default WelcomeAngledGrid;



