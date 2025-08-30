import React from "react";
import { Calendar, Star, Trophy, ChartBar } from "lucide-react";
import Image from "next/image";

const VpAthlete = () => {
  const features = [
    {
      icon: <Calendar className='w-5 h-5 text-red-600' />,
      title: "Instant Court Booking",
      subtitle: "Book your preferred courts anytime, anywhere",
    },
    {
      icon: <Star className='w-5 h-5 text-red-600' />,
      title: "Performance Analytics",
      subtitle: "Track your progress and improve your game",
    },
    {
      icon: <Trophy className='w-5 h-5 text-red-600' />,
      title: "Tournament Access",
      subtitle: "Join competitions and showcase your skills",
    },
    {
      icon: <ChartBar className='w-5 h-5 text-red-600' />,
      title: "Skill Development",
      subtitle: "Access training resources and expert coaching",
    },
  ];

  return (
    <section className='relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mb-[10rem]'>
      <div className='w-[90%] mx-auto'>
        <div className='grid lg:grid-cols-2 gap-[5%] items-center'>
          {/* Left Side - Image Container */}
          <div className='relative w-full h-[600px] order-2 lg:order-1 mt-10 lg:mt-0'>
            <div className='absolute inset-0 flex items-center justify-center lg:justify-start'>
              <div className='w-[300px] h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl'>
                <Image
                  src='/assets/athlete01.png'
                  alt='Akture athlete app interface showing court booking and performance tracking features'
                  fill
                  className='object-cover rounded-[2rem]'
                  priority
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content Container - Updated with matching height */}
          <div className='relative w-full h-[600px] order-1 lg:order-2 flex flex-col justify-center'>
            <div className='space-y-10'>
              {/* Main Title - Updated styling to match VpCoach */}
              <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-widest'>
                Why Athletes Choose
                <br />
                <span className='text-red-600'>Akture?</span>
              </h2>

              {/* Features Grid */}
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
                        <span className='text-gray-600 text-base font-normal block mt-1'>
                          {feature.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className='space-y-6'>
                <button className='w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]'>
                  <span className='mr-2 text-lg tracking-widest'>
                    {" "}
                    START TRAINING WITH AKTURE
                  </span>
                </button>

                {/* Trust Indicators */}
                <div className='text-sm text-gray-600 space-y-2'>
                  <p>Join thousands of athletes already using Akture</p>
                  <p className='font-medium'>
                    Trusted by sports facilities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpAthlete;
