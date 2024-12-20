import React from "react";
import "../../image_slider.css";


// Swiper Imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, } from 'swiper/modules'; // Import the EffectCoverflow module

const ImageSlider = ({ slides }) => {
  return (

    <div className="flex items-center justify-center flex-col w-full h-full">
      
      <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="group flex flex-col items-center justify-center text-center relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
              style={{
                height: "100%",
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-70 transition-opacity"></div>

              {/* Text that shows on hover */}
              <div className="absolute inset-0 flex flex-col justify-center p-16 opacity-0 group-hover:opacity-100 transition-opacity">
                
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito font-bold text-white text-left tracking-wider">
                  {slide.title}
                </h3>

                <p className="text-xxs md:text-sm lg:text-base font-nunito text-white text-left break-words">
                  {slide.caption}
                </p>

              </div>

            </div>
          </SwiperSlide>

        ))}

      </Swiper>

    </div>


  );
  
};

export default ImageSlider;