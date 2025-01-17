import React from 'react';

const TitleText = ({ text }) => {
  return (
    <div className="w-full text-secondary-color py-8 mb-6 ">
      <div className="container mx-auto px-4">
        <h1 className=" text-5xl font-bold text-center mb-6 ">
          {text}
        </h1>
        <hr className='w-40 border-primary-color m-auto'/>
      </div>
    </div>
  );
};

export default TitleText;