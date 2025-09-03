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
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
              Download{" "}
              <span className='text-red-600 font-extrabold'>Akture</span> Video
              App Soon
            </h2>

            <p className='text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed'>
              Available for Android and iPhones
            </p>

            {/* Badge Container - Fixed exact sizing */}
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-8'>
              {/* App Store Badge */}
              <a
                href='#'
                className='inline-flex items-center justify-center transform hover:scale-105 transition-all duration-700'
                aria-label='Download on the App Store'
              >
                <div
                  className='relative'
                  style={{ width: "200px", height: "80px" }}
                >
                  <Image
                    src='/assets/apple-store-badge2.svg'
                    alt='Download on the App Store'
                    fill
                    className='object-contain'
                    priority
                    sizes='200px'
                  />
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href='#'
                className='inline-flex items-center justify-center transform hover:scale-105 transition-all duration-700'
                aria-label='Get it on Google Play'
              >
                <div
                  className='relative'
                  style={{ width: "160px", height: "50px" }}
                >
                  <Image
                    src='/assets/google-play-badge1.svg'
                    alt='Get it on Google Play'
                    fill
                    className='object-contain'
                    priority
                    sizes='160px'
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup - Unchanged */}
          <div className='relative lg:h-[600px] hidden lg:block mb-4'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='relative transform rotate-6 hover:rotate-0 transition-transform duration-500'>
                <div className='w-[200px] h-[450px] rounded-[2.5rem] p-2 shadow-2xl'>
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

      {/* Decorative elements - Unchanged */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
      <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
    </section>
  );
};

export default DownloadApp;
