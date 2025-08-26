import { useState, useEffect } from "react";

const SlidingBanner = () => {
  const slides = [
    {
      img: "/garden.jpg",
      text1:
        "Create your perfect outdoor space with our garden designs, landscaping, and paving solutions.",
    },
    { img: "/k.jpg" },
    { img: "/b1.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      if (currentSlide === slides.length) {
        setIsTransitioning(false); // Remove transition for instant reset
        setCurrentSlide(0);

        // Wait a tiny bit before re-enabling transition
        setTimeout(() => setIsTransitioning(true), 100);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 5000); // Slide every 2 seconds

    return () => clearTimeout(slideTimeout);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden h-[400px]">
      <div
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Render slides + extra first slide for looping */}
        {[...slides, slides[0]].map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={slide.img} className="w-full h-[600px] object-cover" />
            <h1 className="absolute top-[10%] left-2/3 transform -translate-x-1/2 ml-32 text-4xl font-bold text-gray-800 font-arsenal italic">
              {slide.text1}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
