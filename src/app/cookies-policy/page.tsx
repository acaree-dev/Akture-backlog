"use client";

import Link from "next/link";

export default function CookiesPolicyPage() {
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
            <span className='text-white'>Cookies Policy</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Cookies</span> Policy
            </h1>
            <div className='mt-6 text-sm text-gray-500'>
              <p>Last updated October 9, 2025</p>
            </div>
          </div>

          {/* Introduction */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <p className='text-gray-300 leading-relaxed mb-4'>
                This Cookies Policy explains how{" "}
                <strong className='text-white'>
                  CraZed Entertainment, LLC
                </strong>
                , doing business as{" "}
                <strong className='text-white'>Akture</strong> (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), uses cookies and similar
                technologies on our website{" "}
                <strong className='text-white'>akture.video</strong> (the
                &quot;Site&quot;).
              </p>
              <p className='text-gray-300 leading-relaxed'>
                By using our Site, you consent to the use of cookies in
                accordance with this Cookies Policy. If you do not agree to our
                use of cookies, you should set your browser settings accordingly
                or not use our Site.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                What Are Cookies?
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Cookies are small text files that are placed on your device
                (computer, smartphone, or tablet) when you visit a website. They
                are widely used to make websites work more efficiently and to
                provide information to the owners of the site.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Cookies allow us to recognize your device and store information
                about your preferences or past actions, making your experience
                more personalized and efficient.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Types of Cookies We Use
              </h2>

              <div className='space-y-6'>
                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Essential Cookies
                  </h3>
                  <p className='text-gray-300 mb-2'>
                    These cookies are necessary for the Site to function
                    properly. They enable core functionality such as security,
                    network management, and accessibility. You cannot opt out of
                    these cookies.
                  </p>
                  <p className='text-sm text-gray-400'>
                    Examples: Session management, authentication, load balancing
                  </p>
                </div>

                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Performance Cookies
                  </h3>
                  <p className='text-gray-300 mb-2'>
                    These cookies collect information about how visitors use our
                    Site, such as which pages are visited most often and if
                    users receive error messages. This helps us improve the
                    performance and functionality of our Site.
                  </p>
                  <p className='text-sm text-gray-400'>
                    Examples: Google Analytics, page load time tracking
                  </p>
                </div>

                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Functional Cookies
                  </h3>
                  <p className='text-gray-300 mb-2'>
                    These cookies allow our Site to remember choices you make
                    (such as your username, language, or region) and provide
                    enhanced, personalized features.
                  </p>
                  <p className='text-sm text-gray-400'>
                    Examples: User preferences, video quality settings, language
                    selection
                  </p>
                </div>

                <div className='border-l-4 border-red-600 pl-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    Targeting/Advertising Cookies
                  </h3>
                  <p className='text-gray-300 mb-2'>
                    These cookies are used to deliver advertisements more
                    relevant to you and your interests. They may also be used to
                    limit the number of times you see an advertisement and
                    measure the effectiveness of advertising campaigns.
                  </p>
                  <p className='text-sm text-gray-400'>
                    Examples: Ad targeting, retargeting pixels, conversion
                    tracking
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Third-Party Cookies
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                We may use third-party cookies from trusted partners to help us
                analyze Site usage, provide social media features, and deliver
                relevant advertisements. These third parties may collect
                information about your online activities over time and across
                different websites.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Third-party services we use may include:
              </p>
              <ul className='mt-3 space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Google Analytics for website analytics</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Social media platforms for sharing features</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Payment processors for transaction processing</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Advertising networks for targeted advertising</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Managing Cookies
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Most web browsers allow you to control cookies through their
                settings preferences. You can set your browser to refuse cookies
                or delete certain cookies. Please note that if you choose to
                block cookies, some features of our Site may not function
                properly.
              </p>
              <p className='text-gray-300 leading-relaxed mb-4'>
                To learn more about managing cookies in popular browsers:
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>
                    Google Chrome: Settings &gt; Privacy and security &gt;
                    Cookies
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>
                    Mozilla Firefox: Options &gt; Privacy & Security &gt;
                    Cookies
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Safari: Preferences &gt; Privacy &gt; Cookies</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>
                    Microsoft Edge: Settings &gt; Privacy &gt; Cookies
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Do Not Track Signals
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature
                that signals to websites that you do not want your online
                activities tracked. Currently, there is no industry standard for
                how to respond to DNT signals. We currently do not respond to
                DNT signals, but we will update this policy if we adopt a DNT
                standard in the future.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Changes to This Cookies Policy
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                We may update this Cookies Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the new policy on this page with an updated
                &quot;Last updated&quot; date.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>Contact Us</h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                If you have any questions about our use of cookies, please
                contact us:
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
                By continuing to use our Site, you acknowledge that you have
                read and understood this Cookies Policy and consent to our use
                of cookies as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
