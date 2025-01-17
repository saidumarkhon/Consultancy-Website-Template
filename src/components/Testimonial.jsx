
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
    const testimonials = [
        {
          id: 1,
          text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.",
          image: "/testimonial-1.jpg",
          name: "Client",
          profession: "Profession"
        },
        {
          id: 2,
          text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.",
          image: "/testimonial-2.jpg",
          name: "Client Name",
          profession: "Profession"
        }
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-tb-color my-16">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 h-[500px] relative">
        <div className="absolute inset-0">
          <img 
            src="/testimonial.jpg" 
            alt="Working person" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Testimonial */}
      <div className="w-full md:w-1/2 p-12 bg-white">
        <h1 className="text-4xl font-bold mb-8 text-navy-900">What Say Our Client!!!</h1>
        
        <div className="relative overflow-hidden">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isAnimating ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <p className="text-lg text-gray-600 mb-6">
              <span className="text-red-500 text-2xl mr-3">"</span>
              {testimonials[currentIndex].text}
            </p>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                <span className="text-gray-600 uppercase text-sm">{testimonials[currentIndex].profession}</span>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 mt-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-primary-color flex items-center justify-center text-white rounded-full hover:bg-red-600 transition-colors"
              disabled={isAnimating}
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-primary-color flex items-center justify-center text-white rounded-full hover:bg-red-600 transition-colors"
              disabled={isAnimating}
            >
              <ArrowRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-red-500 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;