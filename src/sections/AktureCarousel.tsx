"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  ctaText: string;
  ctaLink: string;
  learnMoreLink?: string;
  badge?: string;
  badgeColor?: "red" | "blue" | "green" | "orange";
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80",
    badge: "NEW FEATURE",
    badgeColor: "blue",
    title: "CAPTURE EVERY MOMENT",
    subtitle: "Professional sports video recording for all athletes",
    ctaText: "START RECORDING",
    ctaLink: "#",
    learnMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80",
    badge: "FOR ATHLETES",
    badgeColor: "green",
    title: "ENHANCE YOUR GAME",
    subtitle: "Analyze your performance with high-quality footage",
    ctaText: "LEARN MORE",
    ctaLink: "#",
    learnMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80",
    badge: "FOR VENUES",
    badgeColor: "orange",
    title: "PROMOTE YOUR FACILITY",
    subtitle: "Enhanced security and marketing with live streaming",
    ctaText: "GET STARTED",
    ctaLink: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80",
    badge: "COMING SOON",
    badgeColor: "red",
    title: "SHARE YOUR HIGHLIGHTS",
    subtitle: "Showcase standout moments with teammates and coaches",
    ctaText: "JOIN WAITLIST",
    ctaLink: "#",
    learnMoreLink: "#",
  },
];

const AktureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentSlide, isTransitioning]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds between slides to match GoPro timing

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getBadgeStyles = (color: string) => {
    const styles = {
      red: "bg-red-600 text-white",
      blue: "bg-blue-600 text-white",
      green: "bg-green-600 text-white",
      orange: "bg-orange-500 text-white",
    };
    return styles[color as keyof typeof styles] || "bg-gray-800 text-white";
  };

  return (
    <div
      ref={carouselRef}
      className='relative w-full h-screen overflow-hidden bg-black'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role='region'
      aria-label='Product carousel'
    >
      {/* Slides Container */}
      <div className='relative w-full h-full'>
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev =
            index === (currentSlide - 1 + slides.length) % slides.length;
          const isNext = index === (currentSlide + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-20"
                  : isPrev
                  ? "opacity-0 scale-95 -translate-x-full z-10"
                  : isNext
                  ? "opacity-0 scale-95 translate-x-full z-10"
                  : "opacity-0 scale-90 z-0"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <div className='absolute inset-0'>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className='object-cover'
                  sizes='100vw'
                />
                <div className='absolute inset-0 bg-white/20' />
              </div>

              {/* Content Overlay */}
              <div className='relative z-10 h-full flex items-center'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='max-w-2xl'>
                    {/* Badge */}
                    {slide.badge && (
                      <div
                        className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${getBadgeStyles(
                          slide.badgeColor || "red"
                        )}`}
                      >
                        {slide.badge}
                      </div>
                    )}

                    {/* Discount Banner */}
                    {slide.discount && (
                      <div className='text-orange-600 text-sm font-semibold mb-2 tracking-wide'>
                        {slide.discount}
                      </div>
                    )}

                    {/* Title */}
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 leading-tight'>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    {slide.subtitle && (
                      <p className='text-lg sm:text-xl text-black mb-6 leading-relaxed'>
                        {slide.subtitle}
                      </p>
                    )}

                    {/* Price */}
                    {slide.price && (
                      <div className='flex items-center gap-3 mb-8'>
                        <span className='text-2xl sm:text-3xl font-bold text-black'>
                          {slide.price}
                        </span>
                        {slide.originalPrice && (
                          <span className='text-lg text-gray-600 line-through'>
                            {slide.originalPrice}
                          </span>
                        )}
                      </div>
                    )}

                    {/* CTAs */}
                    <div className='flex flex-col sm:flex-row gap-4'>
                      <button
                        className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        onClick={() => window.open(slide.ctaLink, "_self")}
                      >
                        {slide.ctaText}
                      </button>

                      {slide.learnMoreLink && (
                        <button
                          className='border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                          onClick={() =>
                            window.open(slide.learnMoreLink, "_self")
                          }
                        >
                          Learn More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className='absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 shadow-lg'
        aria-label='Previous slide'
      >
        <svg
          className='w-6 h-6'
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

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className='absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 shadow-lg'
        aria-label='Next slide'
      >
        <svg
          className='w-6 h-6'
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

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 ${
              index === currentSlide
                ? "bg-black scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-30'>
        <div
          className='h-full bg-black transition-all duration-75 ease-linear'
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 6s linear infinite" : "none",
          }}
        />
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className='absolute top-8 right-8 z-30 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black shadow-lg'
        aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
      >
        {isAutoPlaying ? (
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M6 4h4v16H6V4zm8 0h4v16h-4V4z' />
          </svg>
        ) : (
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z' />
          </svg>
        )}
      </button>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AktureCarousel;
