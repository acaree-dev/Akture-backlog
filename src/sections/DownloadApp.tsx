import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className='relative py-20 bg-gradient-to-r from-black via-gray-900 to-black border-t border-white/15'>
      {/* Background overlay for consistent styling */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-center lg:text-left'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-0 tracking-wide'>
              Download{" "}
              <span className='text-red-600 font-extrabold'>Akture</span> Video
              App Soon
            </h2>

            <p className='text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed'>
              Available for Android and iPhones
            </p>

            <div className='flex flex-col md:flex-row justify-between lg:justify-start items-center gap-6 '>
              {/* App Store Button */}
              <a
                href='#'
                className='inline-block transform hover:scale-105 transition-all duration-700'
                aria-label='Get it on Google Play'
              >
                <Image
                  src='/assets/apple-store-badge1.svg'
                  alt='Download on the App Store'
                  width={200}
                  height={72}
                  className='w-auto '
                  priority
                />
              </a>

              {/* Google Play Badge */}
              <a
                href='#'
                className='inline-block transform hover:scale-105 transition-all duration-700'
                aria-label='Get it on Google Play'
              >
                <Image
                  src='/assets/google-play-badge.svg'
                  alt='Get it on Google Play'
                  width={200}
                  height={72}
                  className='w-auto h-[60px] sm:h-[77px] md:h-[72px]'
                  priority
                />
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className='relative lg:h-[600px] hidden lg:block mb-4'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='relative transform rotate-6 hover:rotate-0 transition-transform duration-500'>
                <div className='w-[200px] h-[450px]  rounded-[2.5rem] p-2 shadow-2xl'>
                  <Image
                    src='/assets/mockup18.png'
                    alt='Akture App Preview'
                    fill
                    className='object-cover rounded-[2rem]'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
