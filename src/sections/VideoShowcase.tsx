"use client";

import { useRef } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward, IoPlay } from "react-icons/io5";

const VideoShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className='relative py-12 md:py-16 bg-white border-t border-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header content */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 tracking-wide'>
              See <span className='text-red-600 font-extrabold'>Akture</span> in
              Action
            </h2>
            <p className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
              Preview the speed, simplicity, and connection of the Akture Video
              App.
            </p>
          </div>

          {/* Carousel container */}
          <div className='relative'>
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black hover:bg-gray-800 text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200'
              aria-label='Previous videos'
            >
              <IoChevronBack className='w-5 h-5' />
            </button>

            {/* Carousel scroll container */}
            <div
              ref={scrollRef}
              className='flex gap-4 overflow-x-auto scrollbar-hide px-12 snap-x snap-mandatory'
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {videoFrames.map((frame) => (
                <div
                  key={frame.id}
                  className='flex-none w-[270px] md:w-[300px] snap-start cursor-pointer group'
                >
                  <div className='relative h-[150px] bg-black rounded-lg overflow-hidden shadow-lg'>
                    <Image
                      src={frame.thumbnail}
                      alt={frame.title}
                      width={300}
                      height={150}
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                      style={{ width: "100%", height: "100%" }}
                      unoptimized
                    />

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300'>
                      {/* Play button */}
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110'>
                          <IoPlay className='w-5 h-5 text-white ml-0.5' />
                        </div>
                      </div>

                      {/* Video info */}
                      <div className='absolute bottom-3 left-3 text-white'>
                        <h3 className='font-semibold text-sm mb-1'>
                          {frame.title}
                        </h3>
                        <p className='text-xs text-gray-200'>
                          {frame.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black hover:bg-gray-800 text-white hover:text-white p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200'
              aria-label='Next videos'
            >
              <IoChevronForward className='w-5 h-5' />
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
