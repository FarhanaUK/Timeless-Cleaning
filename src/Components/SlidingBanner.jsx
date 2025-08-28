import { useState, useEffect } from "react";

const SlidingBanner = () => {
  const slides = [
    { img: "banner1.png" },
    { img: "banner3.png" },
    { img: "banner2.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      if (currentSlide === slides.length) {
        setIsTransitioning(false);
        setCurrentSlide(0);
        setTimeout(() => setIsTransitioning(true), 50);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 5000);

    return () => clearTimeout(slideTimeout);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {[...slides, slides[0]].map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-[170px] sm:h-auto" // mobile height 200px, rest same as before
          >
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
            {slide.text1 && (
              <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 px-4 text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 font-arsenal italic text-center max-w-xs sm:max-w-md md:max-w-lg">
                {slide.text1}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
