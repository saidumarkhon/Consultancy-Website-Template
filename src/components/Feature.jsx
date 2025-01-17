import React from 'react';
import { 
  Award, 
  PercentSquare, 
  Trophy, 
  SmilePlus, 
  Users2, 
  HeadphonesIcon 
} from 'lucide-react';
import TitleText from './TitleText';

const FeatureComponent = () => {
  const features = [
    {
      icon: <Users2 size={24} className="text-white" />,
      title: "Best In Industry",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    },
    {
      icon: <PercentSquare size={24} className="text-white" />,
      title: "99% Success Rate",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    },
    {
      icon: <Trophy size={24} className="text-white" />,
      title: "Award Winning",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    },
    {
      icon: <SmilePlus size={24} className="text-white" />,
      title: "100% Happy Client",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "Professional Advisors",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    },
    {
      icon: <HeadphonesIcon size={24} className="text-white" />,
      title: "24/7 Customer Support",
      description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea"
    }
  ];

  return (
    <div className="container mx-auto p-4 mb-6">
        <TitleText text={'Why Choose Us!!!'}/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column features */}
        <div className="space-y-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-primary-color rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Center column with image and text */}
        <div className="flex flex-col items-center bg-primary-color">
          <div className="relative w-full h-full">
            <img
              src="/feature.jpg"
              alt="Business professional"
              className="w-full"
            />
            <div className=" px-6 py-8 text-white text-center">
              <p className="mb-6">
                Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd
              </p>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right column features */}
        <div className="space-y-8">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-primary-color rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;

