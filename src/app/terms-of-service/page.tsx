"use client";

import { Header } from "@/sections/Header";
import Footer from "@/sections/Footer";
import TrendingPromo from "@/sections/TrendingPromo";
import Link from "next/link";

export default function TermsOfService() {
  const tableOfContents = [
    "OUR SERVICES",
    "INTELLECTUAL PROPERTY RIGHTS",
    "USER REPRESENTATIONS",
    "USER REGISTRATION",
    "PRODUCTS",
    "PURCHASES AND PAYMENT",
    "REFUNDS POLICY",
    "PROHIBITED ACTIVITIES",
    "USER GENERATED CONTRIBUTIONS",
    "CONTRIBUTION LICENSE",
    "SERVICES MANAGEMENT",
    "PRIVACY POLICY",
    "TERM AND TERMINATION",
    "MODIFICATIONS AND INTERRUPTIONS",
    "GOVERNING LAW",
    "DISPUTE RESOLUTION",
    "CORRECTIONS",
    "DISCLAIMER",
    "LIMITATIONS OF LIABILITY",
    "INDEMNIFICATION",
    "USER DATA",
    "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    "CALIFORNIA USERS AND RESIDENTS",
    "MISCELLANEOUS",
    "CONTACT US",
  ];

  const sections = [
    {
      id: "our-services",
      title: "1. OUR SERVICES",
      content: [
        "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
        "The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).",
      ],
    },
    {
      id: "intellectual-property",
      title: "2. INTELLECTUAL PROPERTY RIGHTS",
      content: [
        "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).",
        "Our Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use only.",
      ],
    },
    // Additional sections 3-25 will be added as content becomes available
    {
      id: "contact",
      title: "25. CONTACT US",
      content: [
        "For questions or concerns about these Terms of Service, please contact us:",
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
              <span className='text-white font-medium'>Terms of Service</span>
            </nav>
          </div>

          {/* Page Title */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
              Terms of <span className='text-red-600'>Service</span>
            </h1>
            <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto'>
              Please read these terms and conditions carefully before using the
              Akture platform
            </p>
            <div className='mt-6 text-sm text-gray-500'>
              <p>Last updated September 12, 2024</p>
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
            <h2 className='text-2xl font-bold text-white mb-6'>
              Agreement to Our Legal Terms
            </h2>
            <p className='text-gray-300 leading-relaxed mb-4'>
              We are CraZed Entertainment, LLC, doing business as Akture
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;).
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              We operate the website http://akture.video (the &quot;Site&quot;),
              as well as any other related products and services that refer or
              link to these legal terms (the &quot;Legal Terms&quot;)
              (collectively, the &quot;Services&quot;).
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              Akture provides recreational and competitive athletes with instant
              access to high-definition video of their time on the court or
              field.
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              You can contact us by phone at (+1)5124360546, email at
              contact@akture.video, or by mail to 460 Bastrop Hwy SB, Suite
              1217, Austin, TX 78741, United States.
            </p>
            <p className='text-gray-300 leading-relaxed mb-4'>
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&quot;you&quot;), and CraZed Entertainment, LLC, concerning your
              access to and use of the Services. You agree that by accessing the
              Services, you have read, understood, and agreed to be bound by all
              of these Legal Terms.
            </p>
            <p className='text-gray-300 leading-relaxed font-semibold'>
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
              DISCONTINUE USE IMMEDIATELY.
            </p>
          </div>

          {/* Terms Sections */}
          <div className='space-y-8'>
            {sections.map((section, index) => (
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
              Questions About These Terms?
            </h2>
            <p className='text-gray-300 leading-relaxed mb-6'>
              If you have any questions about these Terms of Service, please
              contact us:
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
              By using the Akture platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service and
              our Privacy Policy.
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
