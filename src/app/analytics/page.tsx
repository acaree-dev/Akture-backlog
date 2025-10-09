"use client";

import Link from "next/link";

export default function AnalyticsPage() {
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
            <span className='text-white'>Analytics</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Analytics</span> Dashboard
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Make data-driven decisions with comprehensive insights into your
              audience and content performance
            </p>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Feature Cards */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Real-Time Metrics
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Monitor live viewer counts, engagement rates, and concurrent
                streams in real-time. See exactly how your content is performing
                right now.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Audience Insights
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Understand your audience demographics, viewing patterns, and
                preferences. Discover when and where your fans are watching.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Revenue Tracking
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Track all revenue streams in one place. From subscriptions to
                pay-per-view, monitor your earnings and identify growth
                opportunities.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Custom Reports
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Generate detailed reports with the metrics that matter to you.
                Export data and share insights with your team or sponsors.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              View Your Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
