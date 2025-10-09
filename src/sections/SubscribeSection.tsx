"use client";

import { useState } from "react";

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
      className='relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-red-50 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-full'></div>
        <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            Subscribe to Our <span className='text-red-600'>Newsletter</span>
          </h2>
          <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
            Stay updated with the latest sports streaming tips, product updates,
            exclusive content, and industry insights delivered straight to your
            inbox.
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
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Latest Updates</h3>
              <p className='text-gray-600 tracking-wide'>
                Be the first to know about new features and platform updates
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
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Expert Tips</h3>
              <p className='text-gray-600 tracking-wide'>
                Get streaming tips, best practices, and industry insights
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
                    d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Exclusive Offers</h3>
              <p className='text-gray-600 tracking-wide'>
                Receive special promotions and early access to new features
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <div className='max-w-xl mx-auto'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col md:flex-row   gap-4'
              >
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-1 px-6 py-4 rounded-md border w-full border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  required
                />
                <button
                  type='submit'
                  className='px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 tracking-widest whitespace-nowrap shadow-md hover:shadow-lg text-xl'
                >
                  <span className='tracking-widest leading-4 whitespace-nowrap '>
                    {" "}
                    Subscribe Now{" "}
                  </span>
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
                Welcome to our newsletter!
              </h3>
              <p className='text-green-700'>
                Check your email to confirm your subscription.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
