"use client";

import Link from "next/link";

export default function MonetizationPage() {
  return (
    <main className='bg-gradient-to-br from-black via-gray-900 to-black'>
      {/* Hero Section */}
      <div className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Breadcrumb */}
          <nav className='flex items-center text-sm text-gray-400 mb-8'>
            <Link href='/' className='hover:text-red-600 transition-colors'>
              Home
            </Link>
            <span className='mx-2'>/</span>
            <span className='text-white'>Monetization</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Monetization</span> Solutions
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Turn your passion into profit with multiple revenue streams for
              your sports content
            </p>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Feature Cards */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Subscription Plans
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Create tiered subscription packages with exclusive content
                access. Build a loyal fan base with recurring revenue streams.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Pay-Per-View
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Monetize premium events with one-time access fees. Perfect for
                championship games, special tournaments, and exclusive matches.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Advertising Revenue
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Integrate pre-roll, mid-roll, and display ads seamlessly into
                your content. Earn revenue while keeping content accessible.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Sponsorship Integration
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Connect with brands and integrate sponsored content. Track
                sponsorship ROI with detailed analytics and engagement metrics.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Start Earning Today
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
