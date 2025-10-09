"use client";

import Link from "next/link";

export default function PartnershipPage() {
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
            <span className='text-white'>Partnership</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Partner</span> with Akture
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Collaborate with us to create innovative solutions and grow the
              sports streaming ecosystem
            </p>
          </div>

          {/* Content */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Partnership Opportunities
              </h2>
              <p className='text-gray-300 leading-relaxed mb-6'>
                We&apos;re always looking for strategic partners who share our
                vision of democratizing sports broadcasting. Whether you&apos;re
                a technology provider, sports organization, content creator, or
                media company, let&apos;s explore how we can work together.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Technology Partners
                </h3>
                <p className='text-gray-300 mb-4'>
                  Integrate your technology with our platform to deliver
                  enhanced capabilities to our users.
                </p>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>API and SDK integration</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Co-development opportunities</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>White-label solutions</span>
                  </li>
                </ul>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Sports Organizations
                </h3>
                <p className='text-gray-300 mb-4'>
                  Partner with leagues, associations, and governing bodies to
                  broadcast their events.
                </p>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>League-wide streaming solutions</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Custom branding and features</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Revenue sharing models</span>
                  </li>
                </ul>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Content Creators
                </h3>
                <p className='text-gray-300 mb-4'>
                  Work with sports media companies, commentators, and analysts
                  to enhance broadcasts.
                </p>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Content distribution channels</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Monetization support</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Production tools access</span>
                  </li>
                </ul>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Hardware Vendors
                </h3>
                <p className='text-gray-300 mb-4'>
                  Collaborate with camera and equipment manufacturers to offer
                  bundled solutions.
                </p>
                <ul className='space-y-2 text-gray-300'>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Hardware-software bundles</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Co-marketing initiatives</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-red-600 mr-2'>•</span>
                    <span>Technical support collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Partnership Benefits
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Market Reach
                  </h3>
                  <p className='text-gray-300'>
                    Access our growing network of sports teams, athletes, and
                    passionate fans worldwide.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Innovation
                  </h3>
                  <p className='text-gray-300'>
                    Collaborate on cutting-edge features and push the boundaries
                    of sports streaming.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Brand Visibility
                  </h3>
                  <p className='text-gray-300'>
                    Co-marketing opportunities and visibility across our
                    platform and communications.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Dedicated Support
                  </h3>
                  <p className='text-gray-300'>
                    Work with our partnership team to ensure success and
                    maximize value.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Let&apos;s Build Together
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Whether you have a specific partnership idea or want to explore
                possibilities, we&apos;d love to hear from you. Our partnership
                team is ready to discuss how we can create mutual value and
                advance the sports streaming industry together.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Discuss Partnership Opportunities
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
