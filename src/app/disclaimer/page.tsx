"use client";

import Link from "next/link";

export default function DisclaimerPage() {
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
            <span className='text-white'>Disclaimer</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Disclaimer</span>
            </h1>
            <div className='mt-6 text-sm text-gray-500'>
              <p>Last updated October 9, 2025</p>
            </div>
          </div>

          {/* Introduction */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <p className='text-gray-300 leading-relaxed'>
                <strong className='text-white'>
                  CraZed Entertainment, LLC
                </strong>
                , doing business as{" "}
                <strong className='text-white'>Akture</strong> (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), operates the website{" "}
                <strong className='text-white'>akture.video</strong> (the
                &quot;Site&quot;) and provides sports streaming services. The
                information contained on our Site is for general information
                purposes only.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Website Content
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                The information on the Site is provided on an &quot;as is&quot;
                basis. We make no representations or warranties of any kind,
                express or implied, about the completeness, accuracy,
                reliability, suitability, or availability of the information,
                products, services, or related graphics contained on the Site
                for any purpose.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Any reliance you place on such information is strictly at your
                own risk. We will not be liable for any loss or damage,
                including without limitation, indirect or consequential loss or
                damage, or any loss or damage whatsoever arising from loss of
                data or profits arising out of, or in connection with, the use
                of this Site.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Live Streaming Services
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Our live streaming services may experience interruptions,
                delays, or technical issues due to factors beyond our control,
                including but not limited to internet connectivity, hardware
                failures, or third-party service disruptions. We do not
                guarantee uninterrupted or error-free service.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                The quality of streaming content may vary depending on user
                equipment, internet connection speed, and other technical
                factors. We are not responsible for any degradation in streaming
                quality caused by factors outside our control.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                User-Generated Content
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Our platform allows users to upload and stream their own
                content. We do not pre-screen, monitor, or edit user-generated
                content. The views and opinions expressed in user-generated
                content are those of the content creators and do not reflect our
                views or opinions. We are not responsible for the accuracy,
                legality, or appropriateness of user-generated content.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                External Links
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Through our Site, you may be able to link to other websites that
                are not under our control. We have no control over the nature,
                content, and availability of those sites. The inclusion of any
                links does not necessarily imply a recommendation or endorse the
                views expressed within them.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Professional Advice
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                The information on our Site is not intended to constitute
                professional advice. You should seek independent legal,
                financial, or other professional advice before making any
                decisions based on information provided on our Site.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Changes to This Disclaimer
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                We reserve the right to modify this disclaimer at any time.
                Changes will be effective immediately upon posting to the Site.
                Your continued use of the Site following any changes indicates
                your acceptance of the revised disclaimer.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>Contact Us</h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                If you have any questions about this disclaimer, please contact
                us:
              </p>
              <div className='space-y-2 text-gray-300'>
                <p>
                  <strong className='text-white'>Email:</strong>{" "}
                  <a
                    href='mailto:contact@akture.video'
                    className='text-red-600 hover:text-red-500'
                  >
                    contact@akture.video
                  </a>
                </p>
                <p>
                  <strong className='text-white'>Phone:</strong> 512.436.0546
                </p>
                <p>
                  <strong className='text-white'>Address:</strong>
                  <br />
                  460 Bastrop Hwy SB, Suite 1217
                  <br />
                  Austin, TX 78741
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className='max-w-4xl mx-auto mt-12'>
            <div className='bg-red-600/10 backdrop-blur-sm rounded-xl p-8 border border-red-600/50'>
              <p className='text-gray-300 leading-relaxed'>
                By using our Site and services, you acknowledge that you have
                read this disclaimer and agree to all its terms and conditions.
                If you do not agree with any part of this disclaimer, you should
                not use our Site or services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
