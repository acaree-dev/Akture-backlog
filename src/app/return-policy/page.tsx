"use client";

import Link from "next/link";

export default function ReturnPolicyPage() {
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
            <span className='text-white'>Return Policy</span>
          </nav>

          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              <span className='text-red-600'>Return</span> & Refund Policy
            </h1>
            <div className='mt-6 text-sm text-gray-500'>
              <p>Last updated October 9, 2025</p>
            </div>
          </div>

          {/* Introduction */}
          <div className='max-w-4xl mx-auto mb-12'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <p className='text-gray-300 leading-relaxed mb-4'>
                This Return and Refund Policy describes how{" "}
                <strong className='text-white'>
                  CraZed Entertainment, LLC
                </strong>
                , doing business as{" "}
                <strong className='text-white'>Akture</strong> (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), handles refund requests for
                our services and products available on{" "}
                <strong className='text-white'>akture.video</strong> (the
                &quot;Site&quot;).
              </p>
              <p className='text-gray-300 leading-relaxed'>
                We strive to ensure customer satisfaction with our sports
                streaming platform. However, please read this policy carefully
                to understand your rights and obligations regarding refunds.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Subscription Services
              </h2>

              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Monthly Subscriptions
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Monthly subscriptions are billed on a recurring basis. You
                    may cancel your subscription at any time, and the
                    cancellation will take effect at the end of your current
                    billing period. We do not offer prorated refunds for partial
                    months of service.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Annual Subscriptions
                  </h3>
                  <p className='text-gray-300 leading-relaxed mb-3'>
                    Annual subscriptions are paid in advance for a 12-month
                    period. Refund eligibility:
                  </p>
                  <ul className='space-y-2 text-gray-300'>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>
                        Full refund within 14 days of purchase if no streaming
                        hours have been used
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>
                        Prorated refund available after 14 days, minus any used
                        streaming hours and a $25 processing fee
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-red-600 mr-2'>•</span>
                      <span>
                        No refunds after 6 months of the subscription period
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-red-600 mb-2'>
                    Free Trials
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Free trial periods allow you to test our service before
                    committing to a paid subscription. You may cancel at any
                    time during the trial period without being charged. If you
                    do not cancel before the trial ends, you will be
                    automatically charged for the subscription.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Pay-Per-View Events
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Pay-per-view purchases are final and non-refundable once the
                event has started. Refund requests made before the event starts
                will be evaluated on a case-by-case basis. Eligible reasons for
                refund include:
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Event cancellation or postponement</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>
                    Technical issues preventing you from accessing the stream
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Duplicate charges or billing errors</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Add-On Services
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Additional features and services (such as extra storage,
                advanced analytics, or premium support) are non-refundable once
                purchased, unless:
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>The service fails to function as advertised</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>We are unable to provide the service as described</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>A billing error occurred</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Technical Issues
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                If you experience technical difficulties that prevent you from
                accessing our services, please contact our support team
                immediately. We will work to resolve the issue promptly. If we
                are unable to resolve the problem within a reasonable timeframe,
                you may be eligible for a refund or service credit.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Please note that issues caused by your internet connection,
                device compatibility, or other factors outside our control do
                not qualify for refunds.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                How to Request a Refund
              </h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                To request a refund, please contact our support team with the
                following information:
              </p>
              <ul className='space-y-2 text-gray-300 mb-6'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Your account email address</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Order or transaction ID</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Date of purchase</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Detailed reason for the refund request</span>
                </li>
              </ul>
              <p className='text-gray-300 leading-relaxed'>
                Refund requests will be reviewed within 5-7 business days. If
                approved, refunds will be processed to the original payment
                method within 10-14 business days.
              </p>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Exceptions and Restrictions
              </h2>
              <p className='text-gray-300 leading-relaxed mb-3'>
                We reserve the right to deny refund requests in the following
                circumstances:
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Violation of our Terms of Service</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Abuse of the refund policy</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>Fraudulent activity or chargebacks</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-red-600 mr-2'>•</span>
                  <span>
                    Excessive service usage before requesting a refund
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50'>
              <h2 className='text-2xl font-bold text-white mb-4'>Contact Us</h2>
              <p className='text-gray-300 leading-relaxed mb-4'>
                For refund requests or questions about this policy, please
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
                By making a purchase or subscribing to our services, you
                acknowledge that you have read, understood, and agree to this
                Return and Refund Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
