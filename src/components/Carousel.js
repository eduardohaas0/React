import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--prev"
        onClick={goToPreviousSlide}
      >
        voltar
      </button>
      <img src={images[currentIndex]} alt="Carousel Slide" />
      <button
        className="carousel__button carousel__button--next"
        onClick={goToNextSlide}
      >
        proxima
      </button>
    </div>
  );
};

export default Carousel;
