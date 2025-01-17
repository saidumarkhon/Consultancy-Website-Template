import React from 'react';

const Title = ({ text, link }) => {
  return (
    <div className="w-full py-10 bg-secondary-color">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-6xl font-bold text-center mb-6">
          {text}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <a 
            href="/" 
            className="hover:text-red-500 transition-colors duration-200"
          >
            Home
          </a>
          
          <span className="text-red-500 px-2">›</span>
          
          <a 
            href={`/${link.toLowerCase()}`} 
            className="text-red-500 hover:text-red-400 transition-colors duration-200"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;