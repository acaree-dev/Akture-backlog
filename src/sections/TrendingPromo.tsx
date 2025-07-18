import Link from "next/link";

const TrendingPromo = () => {
  // promo text
  const items = [
    "Akture Live is ON – Don't Miss Out on the Stream Everyone's Talking About",
    "We're Live! 🎥 Join the Akture Livestream – Real Stories, Real Vibes, Right Now. Tap In",
    "Invite a Friend to Akture & You BOTH Get 50% Off!",
  ];

  return (
    <div className='bg-[#C80004] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center py-2'>
          <div className='flex-1 overflow-hidden relative h-6'>
            <div className='flex items-center space-x-16 animate-marquee absolute left-0 top-0 h-full whitespace-nowrap'>
              {/* First set */}
              {items.map((item, index) => (
                <Link
                  key={`first-${index}`}
                  href='#'
                  className='text-lg hover:underline inline-block font-bold tracking-wide text-black'
                >
                  {item}
                </Link>
              ))}
              {/* Second set for seamless loop */}
              {items.map((item, index) => (
                <Link
                  key={`second-${index}`}
                  href='#'
                  className='text-lg hover:underline inline-block font-bold tracking-wide text-black'
                >
                  {item}
                </Link>
              ))}
              {/* Third set for extra seamless transition */}
              {items.map((item, index) => (
                <Link
                  key={`third-${index}`}
                  href='#'
                  className='text-lg hover:underline inline-block font-bold tracking-wide text-black'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPromo;
