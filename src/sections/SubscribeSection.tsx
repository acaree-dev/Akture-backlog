"use client";

import { useState } from "react";
import Image from "next/image";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    // Add your subscription logic here
  };

  return (
    <section
      id='subscribe-section'
      className='relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 mb-[10rem]'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-red-50 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            Get the Most Out of Your{" "}
            <span className='text-red-600'>Akture</span> Experience
          </h2>
          <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
            Join thousands of sports enthusiasts who are already transforming
            their game with Akture&#39;s premium features and exclusive content.
          </p>

          {/* Benefits Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white p-6 rounded-xl shadow-md'>
              <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Live Streaming</h3>
              <p className='text-gray-600'>
                Stream your games live and connect with fans worldwide
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md'>
              <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Analytics</h3>
              <p className='text-gray-600'>
                Track performance metrics and improve your game
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md'>
              <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-red-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Community</h3>
              <p className='text-gray-600'>
                Connect with athletes and grow your network
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <div className='max-w-xl mx-auto'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col sm:flex-row gap-4'
              >
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  required
                />
                <button
                  type='submit'
                  className='px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl'
                >
                  <span className='tracking-widest text-xl'>Get Started</span>
                </button>
              </form>
            </div>
          ) : (
            <div className='max-w-xl mx-auto bg-green-50 p-6 rounded-xl'>
              <svg
                className='w-12 h-12 text-green-500 mx-auto mb-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <h3 className='text-xl font-semibold text-green-800 mb-2'>
                Thanks for subscribing!
              </h3>
              <p className='text-green-700'>Check your email for next steps.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
