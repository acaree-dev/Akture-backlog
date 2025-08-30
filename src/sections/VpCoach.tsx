import React from "react";
import { Users, Trophy, Video, BarChart, Star } from "lucide-react";
import Image from "next/image";

const VpCoach = () => {
  const features = [
    {
      icon: <Video className='w-5 h-5 text-red-600' />,
      title: "Professional Live Streaming",
      subtitle: "Broadcast games in HD quality",
      superscript: "1",
    },
    {
      icon: <Users className='w-5 h-5 text-red-600' />,
      title: "Better teams Communication",
      subtitle: "all in one platform",
      superscript: "2",
    },
    {
      icon: <Trophy className='w-5 h-5 text-red-600' />,
      title: "Performance Analytics & Tracking",
      subtitle: "for player development",
      superscript: "3 future",
    },
    {
      icon: <BarChart className='w-5 h-5 text-red-600' />,
      title: "Develop Strategic Training",
      subtitle: " suggestions for improvement",
      superscript: "4",
    },
    {
      icon: <Star className='w-5 h-5 text-red-600' />,
      title: "Premium Features Access",
      subtitle: "including advanced analytics",
      superscript: "5",
    },
  ];

  return (
    <section className='relative bg-white py-20 w-full overflow-hidden mt-[15rem] mb-[18rem]'>
      {/* Changed container width and padding */}
      <div className='w-[90%] mx-auto'>
        {/* Updated grid to ensure exact 50% width distribution */}
        <div className='grid lg:grid-cols-2 gap-[5%] items-center'>
          {/* Left Content - Value Proposition */}
          <div className='w-full space-y-10'>
            {/* Removed max-w-xl to allow full 50% width */}
            {/* Main Title - Improved spacing and responsive sizing */}
            <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-widest'>
              Elevate Your
              <br />
              <span className='text-red-600'>Coaching Impact</span>
            </h2>

            {/* Features List - Fixed alignment */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start space-x-4 group'>
                  {/* Icon container */}
                  <div className='flex-shrink-0 w-10 h-10 border-2 border-red-200 rounded-lg flex items-center justify-center mt-1 bg-red-50 group-hover:border-red-300 group-hover:bg-red-100 transition-colors duration-200'>
                    {feature.icon}
                  </div>

                  {/* Feature text */}
                  <div className='flex-1'>
                    <div className='text-gray-900 text-lg font-medium leading-relaxed'>
                      {feature.title}
                      {feature.superscript && (
                        <sup className='text-sm text-red-600 ml-0.5'>
                          {feature.superscript}
                        </sup>
                      )}
                      {feature.subtitle && (
                        <span className='text-gray-600 text-base font-normal block mt-1'>
                          {feature.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Enhanced spacing and hover effects */}
            <div className='space-y-6 w-full'>
              <button className='w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]'>
                <span className='mr-2 text-lg tracking-widest'>
                  START COACHING WITH AKTURE
                </span>
              </button>

              {/* Value Proposition Note - Improved typography */}
              <div className='text-sm text-gray-600 space-y-2'>
                <p>Join the community of successful coaches using Akture</p>
                <p className='font-medium'>Trusted by professional coaches</p>
              </div>
            </div>
          </div>

          {/* Right Content - image */}
          <div className='relative w-full h-[600px] lg:h-full hidden lg:block'>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* <div className='relative transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105'> */}
              <div className='w-[500px] h-[600px]  rounded-[2.5rem] p-2 shadow-2xl'>
                <Image
                  src='/assets/owner.png'
                  alt='Akture App Preview'
                  fill
                  className='object-cover rounded-[2rem]'
                  priority
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpCoach;
