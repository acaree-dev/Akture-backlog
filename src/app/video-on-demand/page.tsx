"use client";

import Link from "next/link";

export default function VideoOnDemandPage() {
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
            <span className='text-white'>Video on Demand</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Video on <span className='text-red-600'>Demand</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Build your sports content library and let fans watch their
              favorite moments anytime, anywhere
            </p>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Feature Cards */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Unlimited Storage
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Upload and store unlimited hours of content. From highlights to
                full game replays, your entire sports library is accessible
                24/7.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Smart Organization
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Automatically organize your content with AI-powered tagging,
                searchable metadata, and customizable playlists for easy
                discovery.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Adaptive Streaming
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Deliver the best viewing experience with adaptive bitrate
                streaming that automatically adjusts to viewer bandwidth.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Content Protection
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Protect your premium content with DRM encryption, geo-blocking,
                and access controls to ensure only authorized viewers can watch.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Upload Your Content
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
