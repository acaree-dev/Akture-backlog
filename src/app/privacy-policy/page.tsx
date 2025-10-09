"use client";

import { Header } from "@/sections/Header";
import Footer from "@/sections/Footer";
import TrendingPromo from "@/sections/TrendingPromo";
import Link from "next/link";

export default function PrivacyPolicy() {
  const tableOfContents = [
    "WHAT INFORMATION DO WE COLLECT?",
    "HOW DO WE PROCESS YOUR INFORMATION?",
    "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
    "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
    "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
    "HOW LONG DO WE KEEP YOUR INFORMATION?",
    "HOW DO WE KEEP YOUR INFORMATION SAFE?",
    "WHAT ARE YOUR PRIVACY RIGHTS?",
    "CONTROLS FOR DO-NOT-TRACK FEATURES",
    "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    "DO WE MAKE UPDATES TO THIS NOTICE?",
    "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
  ];

  const sections = [
    {
      id: "what-information",
      title: "1. WHAT INFORMATION DO WE COLLECT?",
      content: [
        "Personal information you disclose to us",
        "In Short: We collect personal information that you provide to us.",
        "We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
        "Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:\n• email addresses\n• names\n• phone numbers\n• usernames\n• passwords\n• contact or authentication data\n• contact preferences",
        "Sensitive Information. We do not process sensitive information.",
        "Payment Data. We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/privacy.",
        "Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider.",
        "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.",
      ],
    },
    {
      id: "how-process",
      title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
      content: [
        "In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.",
        "We process your personal information for a variety of reasons, depending on how you interact with our Services, including facilitating account creation and authentication, and saving or protecting an individual's vital interest.",
      ],
    },
    {
      id: "legal-bases",
      title: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?",
      content: [
        "In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.",
        "The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on. We may rely on consent, legal obligations, and vital interests as our legal bases.",
      ],
    },
    {
      id: "share-information",
      title: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
      content: [
        "In Short: We may share information in specific situations with specific categories of third parties.",
        "We may share your data with third-party vendors and service providers who perform services for us, including Cloud Computing Services, Data Storage Service Providers, and Website Hosting Service Providers.",
      ],
    },
    {
      id: "cookies",
      title: "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
      content: [
        "In Short: We may use cookies and other tracking technologies to collect and store your information.",
        "We may use cookies and similar tracking technologies to gather information when you interact with our Services. For more information, see our Cookie Notice: akture.video/cookie-policy.",
      ],
    },
    {
      id: "social-logins",
      title: "6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
      content: [
        "In Short: If you choose to register or log in using a social media account, we may have access to certain information about you.",
        "Our Services offer you the ability to register and log in using your third-party social media account details. The profile information we receive may vary depending on the social media provider.",
      ],
    },
    {
      id: "international-transfer",
      title: "7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
      content: [
        "In Short: We may transfer, store, and process your information in countries other than your own.",
        "Our servers are located in the United States. We will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.",
      ],
    },
    {
      id: "how-long",
      title: "8. HOW LONG DO WE KEEP YOUR INFORMATION?",
      content: [
        "In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.",
        "We will only keep your personal information for as long as necessary, with no purpose requiring us to keep it for longer than six (6) months past the termination of the user's account.",
      ],
    },
    {
      id: "keep-safe",
      title: "9. HOW DO WE KEEP YOUR INFORMATION SAFE?",
      content: [
        "In Short: We aim to protect your personal information through a system of organizational and technical security measures.",
        "We have implemented appropriate security measures designed to protect your personal information. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.",
      ],
    },
    {
      id: "privacy-rights",
      title: "10. WHAT ARE YOUR PRIVACY RIGHTS?",
      content: [
        "In Short: Depending on your location, you have rights that allow you greater access to and control over your personal information.",
        "In some regions, you have certain rights under applicable data protection laws, including the right to request access, rectification, erasure, data portability, and to withdraw consent.",
        "If you have questions about your privacy rights, you may email us at Contact@Akture.video.",
      ],
    },
    {
      id: "dnt-features",
      title: "11. CONTROLS FOR DO-NOT-TRACK FEATURES",
      content: [
        "Most web browsers include a Do-Not-Track (&quot;DNT&quot;) feature. At this stage, no uniform technology standard has been finalized, so we do not currently respond to DNT browser signals.",
      ],
    },
    {
      id: "us-privacy-rights",
      title: "12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
      content: [
        "In Short: If you are a resident of Texas, you may have the right to request access to and receive details about the personal information we maintain about you.",
        "Your Rights include the right to know, access, correct, delete, and obtain a copy of your personal data, as well as the right to non-discrimination and to opt out of targeted advertising.",
        "To exercise these rights, contact us at Contact@Akture.video or call 512.436.0546.",
      ],
    },
    {
      id: "updates",
      title: "13. DO WE MAKE UPDATES TO THIS NOTICE?",
      content: [
        "In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.",
        "We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this Privacy Notice.",
      ],
    },
    {
      id: "contact",
      title: "14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
      content: [
        "If you have questions, you may email us at Contact@akture.video or contact us by post at:",
        "CraZed Entertainment, LLC\n460 Bastrop Hwy SB, Suite 1217\nAustin, TX 78741\nUnited States",
      ],
    },
    {
      id: "review-update-delete",
      title:
        "15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
      content: [
        "Based on applicable laws, you may have the right to request access to the personal information we collect from you, correct inaccuracies, or delete your personal information.",
        "To request to review, update, or delete your personal information, please submit a data subject access request.",
      ],
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black'>
      <TrendingPromo />
      <Header />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Breadcrumb */}
          <div className='mb-8'>
            <nav className='flex items-center space-x-2 text-sm'>
              <Link
                href='/'
                className='text-gray-400 hover:text-red-500 transition-colors'
              >
                Home
              </Link>
              <span className='text-gray-600'>/</span>
              <span className='text-white font-medium'>Privacy Policy</span>
            </nav>
          </div>

          {/* Page Title */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
              Privacy <span className='text-red-600'>Policy</span>
            </h1>
            <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto'>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <div className='mt-6 text-sm text-gray-500'>
              <p>Last updated September 22, 2025</p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-12'>
            <h2 className='text-white font-semibold mb-4 text-lg'>
              Table of Contents
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {tableOfContents.map((item, index) => (
                <div key={index} className='text-gray-400 text-sm'>
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Introduction */}
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 mb-8'>
            <h2 className='text-2xl font-bold text-white mb-6'>Introduction</h2>
            <p className='text-gray-300 leading-relaxed mb-4'>
              We are CraZed Entertainment, LLC, doing business as Akture
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;).
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              http://akture.video and use our services.
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              You can contact us by phone at (+1)5124360546, email at
              contact@akture.video, or by mail to 460 Bastrop Hwy SB, Suite
              1217, Austin, TX 78741, United States.
            </p>
            <p className='text-gray-300 leading-relaxed font-semibold'>
              Please read this privacy policy carefully. By using our Services,
              you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className='space-y-8'>
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 scroll-mt-24'
              >
                <h2 className='text-2xl font-bold text-white mb-6'>
                  {section.title}
                </h2>
                <div className='space-y-4'>
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className='text-gray-300 leading-relaxed whitespace-pre-line'
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className='mt-12 bg-gradient-to-r from-red-900/20 to-gray-800/20 backdrop-blur-sm rounded-xl p-8 border border-red-700/30'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Questions About This Privacy Policy?
            </h2>
            <p className='text-gray-300 leading-relaxed mb-6'>
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <div className='space-y-2 text-gray-400'>
              <p>
                <span className='text-white font-medium'>Email:</span>{" "}
                contact@akture.video
              </p>
              <p>
                <span className='text-white font-medium'>Address:</span> 460
                Bastrop Hwy SB, Suite 1217, Austin, TX 78741, United States
              </p>
              <p>
                <span className='text-white font-medium'>Phone:</span> (+1) 512
                436 0546
              </p>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className='mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center'>
            <p className='text-gray-400 text-sm'>
              By using the Akture platform, you acknowledge that you have read
              and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </section>

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
