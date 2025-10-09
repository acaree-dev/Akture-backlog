"use client";

import Link from "next/link";

export default function LiveStreamingPage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black'>
      {/* Hero Section */}
      <div className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Breadcrumb */}
          <nav className='flex items-center text-sm text-gray-400 mb-8'>
            <Link href='/' className='hover:text-red-600 transition-colors'>
              Home
            </Link>
            <span className='mx-2'>/</span>
            <span className='text-white'>Live Streaming</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Live <span className='text-red-600'>Streaming</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Broadcast your sports events in real-time with professional-grade
              streaming technology
            </p>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Feature Cards */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Professional Quality
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Stream in high definition with adaptive bitrate technology that
                ensures smooth playback for viewers on any device or connection
                speed.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Real-Time Engagement
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Connect with your audience through live chat, reactions, and
                interactive features that keep viewers engaged throughout the
                event.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Multi-Platform Distribution
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Stream simultaneously to multiple platforms and reach your
                audience wherever they are with our advanced distribution
                network.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Advanced Analytics
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Track viewer engagement, peak concurrent viewers, watch time,
                and other key metrics to optimize your streaming strategy.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Start Streaming Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
