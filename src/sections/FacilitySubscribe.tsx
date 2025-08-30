"use client";

import { useState } from "react";
import Image from "next/image";

const FacilitySubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  return (
    <section
      id='facility-owners-subscribe'
      className='relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden  mb-[10rem]'
    >
      {/* Background accent elements */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full -translate-y-1/2 translate-x-1/2'></div>
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          {/* Section header */}
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>
              Subscribe + Get the Most Out of Your Facility with{" "}
              <span className='text-red-600 font-extrabold'>Akture</span>{" "}
            </h2>
            <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto'>
              Join hundreds of facility owners who are maximizing revenue,
              streamlining operations, and delivering exceptional experiences to
              their athletes and fans.
            </p>
          </div>

          {/* Benefits grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-8 h-8 text-red-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='font-bold text-lg'>Boost Revenue</h3>
              </div>
              <p className='text-gray-600'>
                Advanced booking systems and dynamic pricing that maximize your
                facility&#39;s utilization and profitability.
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-8 h-8 text-red-600'
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
                <h3 className='font-bold text-lg'>Implement Technologies</h3>
              </div>
              <p className='text-gray-600'>
                Implement technologies that assist your facility athletes to
                advance in their game level.
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-8 h- text-red-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                    />
                  </svg>
                </div>
                <h3 className='font-bold text-lg'>Engage Athletes</h3>
              </div>
              <p className='text-gray-600'>
                Live streaming, social features, and community tools that keep
                your athletes and fans connected.
              </p>
            </div>
          </div>

          {/* Subscription form */}
          <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto border border-gray-100 mt-10'>
            {!isSubmitted ? (
              <>
                <h3 className='text-2xl font-bold text-center mb-6'>
                  Get Started with Akture Today
                </h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex-1 w-full'>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        required
                      />
                    </div>
                    <div>
                      {" "}
                      <button
                        type='submit'
                        className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 tracking-widest whitespace-nowrap shadow-md hover:shadow-lg text-xl'
                      >
                        <span className='tracking-widest leading-4 whitespace-nowrap '>
                          {" "}
                          Get Started{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className='text-center py-8'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <svg
                    className='w-8 h-8 text-green-600'
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
                </div>
                <h3 className='text-2xl font-bold text-green-800 mb-2'>
                  Thank You!
                </h3>
                <p className='text-gray-600'>
                  We&#39;ve sent you an email with next steps to get started
                  with Akture.
                </p>
              </div>
            )}
          </div>

          {/* Social proof */}
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-500 mb-6'>
              TRUSTED BY LEADING SPORTS FACILITIES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySubscribe;
