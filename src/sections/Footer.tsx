"use client";

import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/banner_blackred.png";

const Footer = () => {
  // Navigation sections data structure for cleaner rendering
  const navigationSections = [
    {
      title: "Platform",
      links: [
        "Live Streaming",
        "Video on Demand",
        "Monetization",
        "Analytics",
        "Purchase",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Sponsorship",
        "Partnership",
        "Contact Us",
      ],
    },
    {
      title: "Support",
      links: [
        "Disclaimer",
        "Privacy Policy",
        "Terms of Service",
        "Cookies Policy",
        "Return Policy",
      ],
    },
  ];

  // Social media links with their respective icons and brand colors
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "#",
      label: "Follow us on Instagram",
      colorClass: "text-orange-500 hover:text-orange-600",
    },
    {
      icon: FaXTwitter,
      href: "#",
      label: "Follow us on X (Twitter)",
      colorClass: "text-black hover:text-gray-700",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "Follow us on YouTube",
      colorClass: "text-red-600 hover:text-red-700",
    },
    {
      icon: FaFacebookF,
      href: "#",
      label: "Follow us on Facebook",
      colorClass: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "Follow us on LinkedIn",
      colorClass: "text-blue-700 hover:text-blue-800",
    },
  ];

  // Shared styling classes for consistency
  const sectionContainerClass =
    "flex flex-col items-center text-center md:items-start md:text-left";
  const sectionTitleClass = "text-black font-medium mb-4";
  const navLinkClass =
    "text-gray-600 hover:text-red-600 transition-colors duration-200 text-lg md:text-base";
  const socialIconClass = "w-6 h-6 md:w-5 md:h-5";
  const socialLinkBaseClass =
    "hover:scale-125 transition-all duration-300 ease-in-out";

  return (
    <footer className='relative overflow-hidden bg-white text-black border-t border-gray-100'>
      <div className='relative z-10 border-t border-gray-400 pt-2 max-w-7xl mx-auto'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col space-y-8 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-6 lg:gap-12 md:space-y-0 py-6 md:py-10'>
            {/* Logo and Description */}
            <div className={`lg:col-span-4 ${sectionContainerClass}`}>
              <Link
                href='/'
                className='inline-block mb-4 md:mb-6 md:self-start'
              >
                <Image
                  src={logo}
                  alt='Akture Logo'
                  className='h-[5rem] w-auto'
                  height={80}
                  width={250}
                  priority
                />
              </Link>
              <p className='text-gray-600 text-base leading-relaxed max-w-[280px]'>
                Experience sports like never before. Join the revolution in live
                sports streaming and share your passion with the world.
              </p>
            </div>

            {/* Navigation Links */}
            <div className='lg:col-span-6 flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8'>
              {navigationSections.map((section) => (
                <div key={section.title} className={sectionContainerClass}>
                  <h3 className={sectionTitleClass}>{section.title}</h3>
                  <ul className='space-y-3'>
                    {section.links.map((linkText) => (
                      <li key={linkText}>
                        <Link href='#' className={navLinkClass}>
                          {linkText}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links  */}
            <div className={`lg:col-span-2 ${sectionContainerClass}`}>
              <h3 className={sectionTitleClass}>Follow Us</h3>
              <div className='flex items-center justify-center md:justify-start space-x-6 md:space-x-5'>
                {socialLinks.map(({ icon: Icon, href, label, colorClass }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`${colorClass} ${socialLinkBaseClass}`}
                    aria-label={label}
                  >
                    <Icon className={socialIconClass} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className='mt-3'>
            <div className='max-w-7xl mx-auto border-t border-gray-400 pt-2'>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <p className='text-gray-600 text-sm'>
                  © {new Date().getFullYear()} Akture. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
