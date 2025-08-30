"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const VideoShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Video frame data
  const videoFrames = [
    {
      id: 1,
      title: "Live Streaming",
      description: "Watch sports live",
      thumbnail: "https://picsum.photos/300/150?random=1",
    },
    {
      id: 2,
      title: "Video on Demand",
      description: "Catch up anytime",
      thumbnail: "https://picsum.photos/300/150?random=2",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Track your performance",
      thumbnail: "https://picsum.photos/300/150?random=3",
    },
    {
      id: 4,
      title: "Social Features",
      description: "Connect with fans",
      thumbnail: "https://picsum.photos/300/150?random=7",
    },
    {
      id: 5,
      title: "Monetization",
      description: "Earn from content",
      thumbnail: "https://picsum.photos/300/150?random=5",
    },
    {
      id: 6,
      title: "Community Hub",
      description: "Build your network",
      thumbnail: "https://picsum.photos/300/150?random=6",
    },
    {
      id: 7,
      title: "Sports Highlights",
      description: "Best moments replay",
      thumbnail: "https://picsum.photos/300/150?random=8",
    },
    {
      id: 8,
      title: "Team Management",
      description: "Organize your squad",
      thumbnail: "https://picsum.photos/300/150?random=9",
    },
    {
      id: 9,
      title: "Fan Engagement",
      description: "Interactive features",
      thumbnail: "https://picsum.photos/300/150?random=10",
    },
    {
      id: 10,
      title: "Live Chat",
      description: "Real-time discussions",
      thumbnail: "https://picsum.photos/300/150?random=11",
    },
    {
      id: 11,
      title: "Match Scheduling",
      description: "Plan your games",
      thumbnail: "https://picsum.photos/300/150?random=12",
    },
    {
      id: 12,
      title: "Statistics Tracking",
      description: "Performance metrics",
      thumbnail: "https://picsum.photos/300/150?random=13",
    },
  ];

  const framesPerView = 5;
  const totalPages = Math.ceil(videoFrames.length / framesPerView);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getCurrentFrames = () => {
    const startIndex = currentIndex * framesPerView;
    const endIndex = startIndex + framesPerView;
    return videoFrames.slice(startIndex, endIndex);
  };

  return (
    <section className='relative py-12 sm:py-16 md:py-20 bg-white border-t border-gray-100 overflow-hidden mb-[15rem]'>
      {/* Main container with responsive padding */}
      <div className='px-3 sm:px-4 md:px-6 lg:px-8'>
        {/* Header content */}
        <div className='text-center mb-8 md:mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-wide'>
            See <span className='text-red-600 font-extrabold'>Akture</span> in
            Action
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
            Preview the speed, simplicity, and connection of the Akture Video
            App.
          </p>
        </div>

        {/* Carousel container - 93% width of viewport */}
        <div className='w-[93%] mx-auto'>
          <div className='relative flex items-center justify-center'>
            {/* Left arrow - positioned relative to the carousel */}
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className='absolute -left-4 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-black text-black hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Previous videos'
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Carousel content container */}
            <div className='flex-1 flex justify-center overflow-hidden px-2 sm:px-4 md:px-6'>
              {/* Responsive grid layout */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 w-full'>
                {getCurrentFrames().map((frame) => (
                  <div key={frame.id} className='cursor-pointer group'>
                    <div className='relative h-24 sm:h-32 md:h-36 lg:h-40 bg-black rounded-lg overflow-hidden shadow-lg'>
                      <Image
                        src={frame.thumbnail}
                        alt={frame.title}
                        width={350}
                        height={150}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                        style={{ width: "100%", height: "100%" }}
                        unoptimized
                      />

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300'>
                        {/* Play button */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110'>
                            <svg
                              className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M8 5v14l11-7z' />
                            </svg>
                          </div>
                        </div>

                        {/* Video info with responsive text sizing */}
                        <div className='absolute bottom-1 left-1 text-white'>
                          <h3 className='font-semibold text-xs sm:text-sm mb-0 truncate'>
                            {frame.title}
                          </h3>
                          <p className='text-xs text-gray-200 truncate hidden sm:block'>
                            {frame.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow - positioned relative to the carousel */}
            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === totalPages - 1}
              className='absolute -right-4 sm:-right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-black text-black hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Next videos'
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>
    </section>
  );
};

export default VideoShowcase;
