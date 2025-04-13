import React from 'react';
import '../../globals.css';
import '../../angled_divider.css';

const VerticalDivider = () => {

    return (

        <div className="relative flex flex-col h-112 w-[440px] mx-auto mt-12 border-[10px] border-white bg-white">

            { /* Top Section */}
            <div className="relative flex overflow-hidden clip-bottom-edge" 
                style={{ 
                flexBasis: '50%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.png')", // 25% Opacity applied to Background
                backgroundSize: "cover",
                backgroundPosition: "center",
                

                }}>


            </div>



            { /* Bottom Section */ }
            <div className="relative flex overflow-hidden clip-top-edge" 
                style={{ 
                flexBasis: '50%',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/comic_bg_four.png')", // 25% Opacity applied to Background
                backgroundSize: "cover",
                backgroundPosition: "center",
                

                }}>


            </div>




        </div>



    );



};

export default VerticalDivider;