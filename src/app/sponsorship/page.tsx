"use client";

import Link from "next/link";

export default function SponsorshipPage() {
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
            <span className='text-white'>Sponsorship</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Sponsorship</span> Opportunities
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Connect your brand with passionate sports fans and growing
              athletic communities
            </p>
          </div>

          {/* Content */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Why Sponsor with Akture?
              </h2>
              <p className='text-gray-300 leading-relaxed mb-6'>
                Akture connects brands with authentic sports communities at
                every level—from youth leagues to professional teams. Our
                platform provides unique sponsorship opportunities that deliver
                measurable results and genuine fan engagement.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Targeted Reach
                  </h3>
                  <p className='text-gray-300'>
                    Connect with specific sports, demographics, and geographic
                    markets that align with your brand.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Measurable Impact
                  </h3>
                  <p className='text-gray-300'>
                    Track impressions, engagement, and conversion with detailed
                    analytics and reporting.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Authentic Engagement
                  </h3>
                  <p className='text-gray-300'>
                    Reach fans during their most engaged moments—watching live
                    sports they&apos;re passionate about.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Flexible Options
                  </h3>
                  <p className='text-gray-300'>
                    From event sponsorships to platform-wide campaigns, we offer
                    solutions for every budget.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Sponsorship Packages
              </h2>

              <div className='space-y-6'>
                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Event Sponsorship
                  </h3>
                  <p className='text-gray-300 mb-3'>
                    Associate your brand with specific tournaments,
                    championships, or high-profile matches.
                  </p>
                  <ul className='space-y-2 text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Pre-roll and mid-roll video ads</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Logo placement on event pages and streams</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Branded graphics and overlays</span>
                    </li>
                  </ul>
                </div>

                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Team Sponsorship
                  </h3>
                  <p className='text-gray-300 mb-3'>
                    Partner with teams and athletes to build long-term brand
                    associations.
                  </p>
                  <ul className='space-y-2 text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Season-long brand visibility</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Team profile page integration</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Co-branded content opportunities</span>
                    </li>
                  </ul>
                </div>

                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Platform Sponsorship
                  </h3>
                  <p className='text-gray-300 mb-3'>
                    Maximize reach with platform-wide brand exposure across all
                    sports and events.
                  </p>
                  <ul className='space-y-2 text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Homepage banner placement</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Multi-sport campaign exposure</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>Premium analytics and insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Success Stories
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Our sponsors have seen remarkable results partnering with
                Akture. From local businesses reaching their community to
                national brands connecting with niche sports audiences, we
                deliver ROI through authentic sports engagement. Contact us to
                learn more about how we can help your brand succeed.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <Link
              href='#'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200'
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
