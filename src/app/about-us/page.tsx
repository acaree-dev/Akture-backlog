"use client";

import Link from "next/link";

export default function AboutUsPage() {
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
            <span className='text-white'>About Us</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              About <span className='text-red-600'>Akture</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Revolutionizing sports broadcasting for teams, athletes, and fans
              worldwide
            </p>
          </div>

          {/* Content */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Our Mission
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                At Akture, we believe that every sports moment deserves to be
                captured and shared. Our mission is to empower teams, athletes,
                and sports organizations with professional-grade streaming
                technology that was once only available to major networks.
                We&apos;re democratizing sports broadcasting, making it
                accessible, affordable, and easy for everyone.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>Our Story</h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Founded by sports enthusiasts and technology innovators, Akture
                was born from a simple observation: too many great sports
                moments were going unseen. Local teams, youth leagues, and
                emerging athletes lacked the tools to share their passion with
                fans and families who couldn&apos;t attend in person.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                We set out to change that. By combining cutting-edge streaming
                technology with an intuitive platform, we&apos;ve created a
                solution that lets anyone broadcast professional-quality sports
                content with just a few clicks.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>What We Do</h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Akture provides a comprehensive sports broadcasting platform
                that includes:
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2 mt-1'>•</span>
                  <span>Live streaming with professional production tools</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2 mt-1'>•</span>
                  <span>On-demand video hosting and management</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2 mt-1'>•</span>
                  <span>
                    Monetization solutions to turn passion into profit
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2 mt-1'>•</span>
                  <span>Analytics to understand and grow your audience</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>Our Values</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Innovation
                  </h3>
                  <p className='text-gray-300'>
                    Continuously pushing the boundaries of what&apos;s possible
                    in sports streaming technology.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Accessibility
                  </h3>
                  <p className='text-gray-300'>
                    Making professional broadcasting tools available to
                    everyone, regardless of budget or technical expertise.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Community
                  </h3>
                  <p className='text-gray-300'>
                    Building connections between athletes, teams, and fans
                    through the power of live sports.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Excellence
                  </h3>
                  <p className='text-gray-300'>
                    Delivering broadcast-quality streams and exceptional user
                    experience in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Join the Akture Community
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
