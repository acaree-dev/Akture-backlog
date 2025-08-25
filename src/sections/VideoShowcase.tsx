"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const VideoShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Video frame data - replace with actual video thumbnails later
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
    <section className='relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white border-t border-gray-100 overflow-hidden'>
      <div className='px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8'>
        {/* Header content */}
        <div className='text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12'>
          <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 xs:mb-4 sm:mb-5 md:mb-6 tracking-wide'>
            See <span className='text-red-600 font-extrabold'>Akture</span> in
            Action
          </h2>
          <p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2 xs:px-3 sm:px-4'>
            Preview the speed, simplicity, and connection of the Akture Video
            App.
          </p>
        </div>

        {/* Carousel container - optimized for all mobile views */}
        <div className='w-[95%] xs:w-[92%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto'>
          <div className='relative flex items-center justify-center'>
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className='absolute left-0 xs:left-1 sm:left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-black text-black hover:text-white p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Previous videos'
            >
              <svg
                className='w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5'
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

            {/* Carousel content container - responsive padding */}
            <div className='flex-1 flex justify-center px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 xl:px-16 overflow-hidden'>
              <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 w-full max-w-full'>
                {getCurrentFrames().map((frame) => (
                  <div key={frame.id} className='cursor-pointer group'>
                    <div className='relative h-16 xs:h-18 sm:h-20 md:h-24 lg:h-32 xl:h-36 2xl:h-40 bg-black rounded-sm xs:rounded sm:rounded-md md:rounded-lg overflow-hidden shadow-md sm:shadow-lg'>
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
                        {/* Play button - responsive sizing */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <div className='w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110'>
                            <svg
                              className='w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white ml-0.5'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M8 5v14l11-7z' />
                            </svg>
                          </div>
                        </div>

                        {/* Video info - conditional display based on screen size */}
                        <div className='absolute bottom-0.5 xs:bottom-1 left-0.5 xs:left-1 text-white'>
                          <h3 className='font-medium xs:font-semibold text-xs xs:text-xs sm:text-sm mb-0 truncate'>
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

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === totalPages - 1}
              className='absolute right-0 xs:right-1 sm:right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-black text-black hover:text-white p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Next videos'
            >
              <svg
                className='w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5'
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
