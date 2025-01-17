import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/carousel-1.jpg",
      alt: "First slide",
      title: "Business Consultancy",
      description: "We Provide Solution On Your Business",
    },
    {
      id: 2,
      image: "/carousel-2.jpg",
      alt: "Second slide",
      title: "Business Growth",
      description: "Take Our Help To Reach The Top Level",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative " aria-label="carousel">
      {/* Carousel wrapper */}
      <div className="relative  min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute  w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-85 z-10"
            }`}
          >
            <img
              src={slide.image}
              className="absolute w-full h-full object-cover "
              alt={slide.alt}
              style={{objectPosition: "50% 0%"}}
            />
            <div
              className="absolute inset-0  flex flex-col items-center justify-center text-center text-white px-4"
              style={{ background: "rgba(21, 36, 64, 0.7)" }}
            >
              <p className="text-lg md:text-2xl mb-6 uppercase">{slide.title}</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.description}
              </h1>
              <div className="flex space-x-4 font-secondary-font">
                <a
                  href="/quote"
                  className="bg-primary-color hover:text-black transition-all ease-in text-white py-3 px-8 rounded-3xl"
                >
                  Get Quote
                </a>
                <a
                  href="/contact"
                  className="bg-white text-black py-3 px-8 rounded-3xl"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={previousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none focus:ring-4 focus:ring-white"
      >
        <ChevronLeft className="text-white w-6 h-6" />
        <span className="sr-only">Previous</span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none focus:ring-4 focus:ring-white"
      >
        <ChevronRight className="text-white w-6 h-6" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

