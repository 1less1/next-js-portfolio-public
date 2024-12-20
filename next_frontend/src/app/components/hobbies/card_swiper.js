import React, { useState } from "react";
import "../../card_swiper.css";

// Swiper Imports
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper/modules';

const CardSwiper = ({ cards }) => {
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

  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        keyboard={true}
        modules={[EffectCards, Keyboard]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
              ></div>
              <div
                className="flip-card-back"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
              >
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="text-base sm:text-lg md:text-xl font-nunito font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base font-nunito text-white">
                      {card.caption}
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