"use client";

import Link from "next/link";

export default function PurchasePage() {
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
            <span className='text-white'>Purchase</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Choose Your <span className='text-red-600'>Plan</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Select the perfect plan for your sports streaming needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {/* Starter Plan */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h3 className='text-2xl font-bold text-white mb-2'>Starter</h3>
              <p className='text-gray-400 mb-6'>Perfect for getting started</p>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>$29</span>
                <span className='text-gray-400'>/month</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Up to 10 hours of streaming
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  720p HD quality
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Basic analytics
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Email support
                </li>
              </ul>
              <Link
                href='#'
                className='block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200'
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className='bg-red-600/10 backdrop-blur-sm rounded-xl p-8 border-2 border-red-600 relative'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                Most Popular
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>Pro</h3>
              <p className='text-gray-400 mb-6'>For serious broadcasters</p>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>$99</span>
                <span className='text-gray-400'>/month</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Unlimited streaming hours
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  1080p Full HD quality
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Advanced analytics
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Priority support
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Monetization tools
                </li>
              </ul>
              <Link
                href='#'
                className='block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200'
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h3 className='text-2xl font-bold text-white mb-2'>Enterprise</h3>
              <p className='text-gray-400 mb-6'>For large organizations</p>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>Custom</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Unlimited everything
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  4K Ultra HD quality
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Custom analytics
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  Dedicated support
                </li>
                <li className='flex items-center text-gray-300'>
                  <span className='text-red-600 mr-2'>✓</span>
                  White-label solution
                </li>
              </ul>
              <Link
                href='#'
                className='block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200'
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
