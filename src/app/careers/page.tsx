"use client";

import Link from "next/link";

export default function CareersPage() {
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
            <span className='text-white'>Careers</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Join the <span className='text-red-600'>Akture</span> Team
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Be part of the revolution in sports streaming and help us build
              the future of sports broadcasting
            </p>
          </div>

          {/* Content */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Why Akture?
              </h2>
              <p className='text-gray-300 leading-relaxed mb-6'>
                At Akture, we&apos;re not just building a platform—we&apos;re
                transforming how the world experiences sports. We&apos;re a team
                of passionate innovators, sports enthusiasts, and technology
                experts working together to make professional sports
                broadcasting accessible to everyone.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    🚀 Innovation-First
                  </h3>
                  <p className='text-gray-300'>
                    Work with cutting-edge streaming technology and shape the
                    future of sports media.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    🎯 Mission-Driven
                  </h3>
                  <p className='text-gray-300'>
                    Make a real impact by democratizing access to professional
                    broadcasting tools.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    🌟 Growth-Focused
                  </h3>
                  <p className='text-gray-300'>
                    Continuous learning opportunities and clear career
                    advancement paths.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    🤝 Collaborative Culture
                  </h3>
                  <p className='text-gray-300'>
                    Work alongside talented individuals who share your passion
                    for sports and technology.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Open Positions
              </h2>
              <p className='text-gray-400 mb-6'>
                We&apos;re always looking for talented individuals to join our
                team. Check out our current openings:
              </p>

              <div className='space-y-4'>
                <div className='bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold text-white'>
                      Senior Full-Stack Engineer
                    </h3>
                    <span className='text-red-600 text-sm font-semibold'>
                      Engineering
                    </span>
                  </div>
                  <p className='text-gray-300 mb-4'>
                    Build scalable streaming infrastructure and user-facing
                    features for our platform.
                  </p>
                  <div className='flex gap-2 text-sm text-gray-400'>
                    <span>📍 Austin, TX / Remote</span>
                    <span>•</span>
                    <span>⏱️ Full-time</span>
                  </div>
                </div>

                <div className='bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold text-white'>
                      Product Designer
                    </h3>
                    <span className='text-red-600 text-sm font-semibold'>
                      Design
                    </span>
                  </div>
                  <p className='text-gray-300 mb-4'>
                    Create intuitive and beautiful experiences for broadcasters
                    and viewers alike.
                  </p>
                  <div className='flex gap-2 text-sm text-gray-400'>
                    <span>📍 Austin, TX / Remote</span>
                    <span>•</span>
                    <span>⏱️ Full-time</span>
                  </div>
                </div>

                <div className='bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700 transition-colors'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold text-white'>
                      Sports Partnership Manager
                    </h3>
                    <span className='text-red-600 text-sm font-semibold'>
                      Business
                    </span>
                  </div>
                  <p className='text-gray-300 mb-4'>
                    Build relationships with sports organizations and help them
                    succeed on our platform.
                  </p>
                  <div className='flex gap-2 text-sm text-gray-400'>
                    <span>📍 Austin, TX</span>
                    <span>•</span>
                    <span>⏱️ Full-time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Benefits & Perks
              </h2>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Competitive salary and equity</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Health, dental, and vision insurance</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Flexible work arrangements</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Unlimited PTO</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Professional development budget</span>
                </li>
                <li className='flex items-start text-gray-300'>
                  <span className='text-red-600 mr-2 mt-1'>✓</span>
                  <span>Latest tech equipment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              View All Openings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
