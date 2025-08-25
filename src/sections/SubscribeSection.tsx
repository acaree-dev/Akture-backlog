"use client";

import { useState } from "react";
import Image from "next/image";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id='subscribe-get-most-out-akture'
      className='relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600 to-black transform rotate-12 scale-150'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Icon/Graphic */}
          <div className='mb-8 flex justify-center'>
            <div className='relative w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-xl'>
              <svg
                className='w-10 h-10 md:w-12 md:h-12 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                />
              </svg>
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center'>
                <svg
                  className='w-3 h-3 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>
            Subscribe + Get the Most Out of Your{" "}
            <span className='text-red-600 font-extrabold'>Akture</span> Facility
          </h2>

          {/* Supporting Text */}
          <p className='text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto'>
            Join thousands of facility owners maximizing their revenue,
            streamlining operations, and creating unforgettable experiences with
            our comprehensive sports facility management platform.
          </p>

          {/* Benefits List */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto'>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-black mb-2'>
                Increase Revenue
              </h3>
              <p className='text-gray-600 text-sm'>
                Advanced booking systems and dynamic pricing to maximize
                facility utilization
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-black mb-2'>
                Save Time
              </h3>
              <p className='text-gray-600 text-sm'>
                Automated scheduling, payments, and facility management tools
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-black mb-2'>
                Engage Community
              </h3>
              <p className='text-gray-600 text-sm'>
                Live streaming, social features, and community building tools
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    required
                    className='w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  />
                </div>
                <button
                  type='submit'
                  className='px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-full transition-colors duration-200 whitespace-nowrap shadow-lg hover:shadow-xl'
                >
                  Get Started Free
                </button>
              </div>
              <p className='text-sm text-gray-500 mt-4'>
                Free 30-day trial • No credit card required • Cancel anytime
              </p>
            </form>
          ) : (
            <div className='max-w-lg mx-auto'>
              <div className='bg-green-50 border border-green-200 rounded-full px-8 py-4 flex items-center justify-center'>
                <svg
                  className='w-6 h-6 text-green-600 mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-green-800 font-semibold'>
                  Thank you for subscribing! Check your email for next steps.
                </span>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <p className='text-sm text-gray-500 mb-4'>
              Trusted by 500+ sports facilities worldwide
            </p>
            <div className='flex justify-center items-center space-x-8 opacity-60'>
              {/* Placeholder for customer logos */}
              <div className='w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center'>
                <span className='text-xs text-gray-500'>Logo 1</span>
              </div>
              <div className='w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center'>
                <span className='text-xs text-gray-500'>Logo 2</span>
              </div>
              <div className='w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center'>
                <span className='text-xs text-gray-500'>Logo 3</span>
              </div>
              <div className='w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center'>
                <span className='text-xs text-gray-500'>Logo 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 left-0 w-32 h-32 bg-red-600 rounded-full opacity-10 -translate-x-16 translate-y-16'></div>
      <div className='absolute top-0 right-0 w-48 h-48 bg-black rounded-full opacity-5 translate-x-24 -translate-y-24'></div>
    </section>
  );
};

export default SubscribeSection;
