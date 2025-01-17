import React, { useEffect, useRef } from 'react';
import { UserCircle2, PieChart, LineChart, BarChart3, Scale, Home } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleText from './TitleText';

gsap.registerPlugin(ScrollTrigger);

const ServicesComponent = () => {
  const servicesRef = useRef(null);
  const services = [
    {
      icon: UserCircle2,
      title: "Business Research",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    },
    {
      icon: PieChart,
      title: "Strategic Planning",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    },
    {
      icon: LineChart,
      title: "Market Analysis",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    },
    {
      icon: BarChart3,
      title: "Financial Analysis",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    },
    {
      icon: Scale,
      title: "Legal Advisory",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    },
    {
      icon: Home,
      title: "Tax & Insurance",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem"
    }
  ];
  useEffect(() => {
    const cards = servicesRef.current.querySelectorAll('.service-card');
    
    // Initial state
    gsap.set(cards, { y: 100, opacity: 0 });
    
    // Animate cards when they come into view
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animate icon on hover
      const icon = card.querySelector('.icon-container');
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <TitleText text={'What We Offer'}/>
      <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="service-card bg-gray-50 p-8 rounded-lg text-center hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="icon-container inline-flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;