import React from 'react';
import '@/globals.css';
import '@/angled_divider.css';


const WelcomeAngledGrid = () => {

  return (

    <div className="relative w-11/12 mx-auto mt-8 md:mt-12 border-[8px] md:border-[10px] lg:border-[12px] border-white bg-white">

      {/* Small Screens Layout */}
      <div className="flex flex-col md:hidden min-h-[350px] h-[65vh] max-h-[400px]">

        {/* Top Section */}

        <div className="relative flex items-center justify-center overflow-hidden flex-[50%] bg-cover bg-center bg-blend-overlay clip-bottom-edge-alt"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.webp')" 
          }}>
            
            <img 
              src="/images/svg/welcome_msg.webp"
              alt="Welcome Message"
              className="relative w-auto h-[85%]" 
            />

          </div>
          
          {/* Bottom Section */}
          <div className="relative flex items-center justify-center overflow-hidden flex-[50%] bg-cover bg-center clip-top-edge-alt"
            style={{
              backgroundImage: "url('/images/mark_and_moon.webp')"
            }}>

            <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-60 animate-slide-in">

              <p className="text-white text-xs sm:text-sm p-2 text-center">
                "You know the Greeks didn't write obituaries. <br/>
                They only asked one question after a man died: <br/>
                Did he have <strong>passion</strong>?" <br/>
                - Serendipity
              </p>

            </div>

          </div>

      </div>

      {/* Medium and Larger Screens Layout */}
      <div className="relative hidden md:flex overflow-hidden min-h-[250px] max-h-[65vh]">
        
        {/* Left Section */}

        <div className="relative flex items-center justify-center overflow-hidden flex-[35%] bg-cover bg-center bg-blend-overlay clip-right-edge"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.webp')" }}
          >

            <img 
              src="/images/svg/welcome_msg.webp"
              alt="Welcome Message"
              className="relative w-auto h-[85%]" 
            />

          </div>

          {/* Right Section */}
          <div className="relative flex overflow-hidden flex-[65%] bg-cover bg-center clip-left-edge" 
              style={{ backgroundImage: "url('/images/mark_and_moon.webp')" }}
            >

            <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-60 animate-slide-in">

              <p className="text-white text-base lg:text-xl p-2 text-center">
                "You know the Greeks didn't write obituaries. <br/>
                They only asked one question after a man died: <br/>
                Did he have <strong>passion</strong>?" <br/>
                - Serendipity
              </p>

            </div>

          </div>

      </div>

    </div>

  );
};

export default WelcomeAngledGrid;
