"use client";
import React, { useState, useEffect } from "react";
import "@/card_swiper.css";

const xss = require('xss');

import { sanitizeImage } from '@/utils/security';

// Swiper Imports
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper/modules';

const CardSwiper = ({ cards, onLoaded }) => {
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFlip = (index) => {
    if (index === activeIndex) {
      setFlipped((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = !newFlipped[index];
        return newFlipped;
      });
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setFlipped(Array(cards.length).fill(false)); // Reset all flips when slide changes
  };

  useEffect(() => {
    // Trigger the onLoaded callback once the component has been initialized
    if (onLoaded) {
      onLoaded(); // Notify parent component that Swiper is ready
    }
  }, [onLoaded]);

  return (
    <div className="flex items-center justify-center flex-col w-full h-full">

      <Swiper
        effect={'cards'}
        grabCursor={true}
        keyboard={true}
        modules={[EffectCards, Keyboard]}
        className="card-swiper"
        onSlideChange={handleSlideChange}
      >

        {cards && cards.length > 0 && cards.map((card, index) =>(
          <SwiperSlide key={index}>

            <div
              className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >

              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${sanitizeImage(card.backgroundImage)})`,
                }}
              />
              
              <div
                className="flip-card-back"
                style={{
                  backgroundImage: `url(${sanitizeImage(card.backgroundImage)})`,
                }}
              >

                <div className="overlay">

                  <div className="overlay-content">

                    <h3 className="text-base sm:text-lg md:text-xl font-nunito font-bold text-white">
                      {xss(card.title)}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base font-nunito text-white">
                      {xss(card.caption)}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  );
};

export default CardSwiper;