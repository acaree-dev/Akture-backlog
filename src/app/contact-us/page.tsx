"use client";

import Link from "next/link";

export default function ContactUsPage() {
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
            <span className='text-white'>Contact Us</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Get in <span className='text-red-600'>Touch</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Have questions? We&apos;re here to help and would love to hear
              from you
            </p>
          </div>

          {/* Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Contact Form */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Send us a Message
              </h2>

              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors'
                    placeholder='How can we help?'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors resize-none'
                    placeholder='Tell us more about your inquiry...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Contact Information
                </h2>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                      <span className='text-red-600 text-xl'>📧</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-white mb-1'>
                        Email
                      </h3>
                      <a
                        href='mailto:contact@akture.video'
                        className='text-gray-400 hover:text-red-600 transition-colors'
                      >
                        contact@akture.video
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                      <span className='text-red-600 text-xl'>📞</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-white mb-1'>
                        Phone
                      </h3>
                      <a
                        href='tel:+15124360546'
                        className='text-gray-400 hover:text-red-600 transition-colors'
                      >
                        512.436.0546
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center'>
                      <span className='text-red-600 text-xl'>📍</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-white mb-1'>
                        Address
                      </h3>
                      <p className='text-gray-400'>
                        460 Bastrop Hwy SB, Suite 1217
                        <br />
                        Austin, TX 78741
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Business Hours
                </h2>
                <div className='space-y-3 text-gray-300'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span className='text-white'>9:00 AM - 6:00 PM CT</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span className='text-white'>10:00 AM - 4:00 PM CT</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span className='text-white'>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
