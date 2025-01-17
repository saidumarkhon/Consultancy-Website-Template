import React, { useEffect, useRef } from 'react';
import { UserCircle2, LineChart, Scale } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutComponent = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const serviceRefs = useRef([]);

  const services = [
    {
      icon: UserCircle2,
      title: "Business Planning",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"
    },
    {
      icon: LineChart,
      title: "Financial Analysis",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"
    },
    {
      icon: Scale,
      title: "Legal Advisory",
      description: "Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo"
    }
  ];

  useEffect(() => {
    // Initial animations
    gsap.set([leftSectionRef.current, rightSectionRef.current], { 
      opacity: 0,
      x: index => index === 0 ? -50 : 50
    });

    // Text elements initial state
    gsap.set([titleRef.current, subtitleRef.current, paragraphRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });

    // Service items initial state
    gsap.set(serviceRefs.current, {
      opacity: 0,
      x: 50,
      stagger: 0.2
    });

    // Main sections animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to([leftSectionRef.current, rightSectionRef.current], {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3
    });

    // Text elements animation
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    textTl.to([titleRef.current, subtitleRef.current, paragraphRef.current, buttonRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Service items animation
    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: rightSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    serviceTl.to(serviceRefs.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Hover animations for service items
    serviceRefs.current.forEach(ref => {
      ref.addEventListener('mouseenter', () => {
        gsap.to(ref, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      ref.addEventListener('mouseleave', () => {
        gsap.to(ref, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Button hover animation
    buttonRef.current.addEventListener('mouseenter', () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    buttonRef.current.addEventListener('mouseleave', () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-96 overflow-hidden">
      {/* Left Section */}
      <div ref={leftSectionRef} className="w-full lg:w-1/2 bg-tb-color md:p-16 flex flex-col justify-center p-6">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-navy-900">Welcome To </span>
          <span className="text-red-500">CONSULT</span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl text-red-500 mb-6">
          Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
        </p>
        
        <p ref={paragraphRef} className="text-gray-600 mb-8">
          Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.
        </p>
        
        <button 
          ref={buttonRef}
          className="bg-red-500 text-white px-8 py-3 rounded-full w-fit hover:bg-red-600 transition-colors"
        >
          Get A Quote
        </button>
      </div>

      {/* Right Section */}
      <div ref={rightSectionRef} className="w-full lg:w-1/2 bg-red-500 p-8 md:p-16 flex flex-col justify-center space-y-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            ref={el => serviceRefs.current[index] = el}
            className="flex items-start space-x-4"
          >
            <div className="bg-white p-3 rounded-full">
              <service.icon className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-color mb-2">
                {service.title}
              </h3>
              <p className="text-white/90">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutComponent;