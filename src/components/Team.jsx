import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleText from './TitleText';

gsap.registerPlugin(ScrollTrigger);

const TeamMembers = () => {
  const teamRef = useRef(null);

  const members = [
    {
      id: 1,
      image: "/team-1.jpg",
      name: "John Smith",
      designation: "CEO"
    },
    {
      id: 2,
      image: "/team-2.jpg",
      name: "Michael Brown",
      designation: "CTO"
    },
    {
      id: 3,
      image: "/team-3.jpg",
      name: "David Wilson",
      designation: "Lead Designer"
    }
  ];

  useEffect(() => {
    const members = teamRef.current.querySelectorAll('.team-member');
    
    // Initial setup
    gsap.set(members, { 
      opacity: 0,
      scale: 0.8
    });

    // Create stagger animation for team members
    gsap.to(members, {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Hover animations
    members.forEach(member => {
      const overlay = member.querySelector('.member-overlay');
      const image = member.querySelector('.member-image');

      member.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5
        });
        gsap.to(overlay, {
          x: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      member.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5
        });
        gsap.to(overlay, {
          x: '-100%',
          duration: 0.5,
          ease: "power2.in"
        });
      });
    });
  }, []);

  return (
    <div className='py-8'>
      <TitleText text={'Our Team Members'}/>
      <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {members.map((member) => (
          <div 
            key={member.id} 
            className="team-member relative overflow-hidden cursor-pointer"
          >
            <div 
              className="member-image w-full h-[550px] bg-cover transition-transform duration-500"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundPosition: 'center'
              }}
            />
            <div className="member-overlay absolute left-0 right-0 top-1/2 -translate-y-1/2 h-14 bg-red-500 transform -translate-x-full">
              <div className="text-center text-white">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-xs">{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;