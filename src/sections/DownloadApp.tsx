import { FaApple, FaGooglePlay } from "react-icons/fa6";

const DownloadApp = () => {
  return (
    <section className='relative py-20 bg-gradient-to-r from-black via-gray-900 to-black border-t border-white/15'>
      {/* Background overlay for consistent styling */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Main headline */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
            Download <span className='text-red-600 font-extrabold'>Akture</span>{" "}
            Video App Soon
          </h2>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed'>
            Available for Android and iPhones
          </p>

          {/* Download Buttons */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-8'>
            {/* App Store Button */}
            <a
              href='#'
              className='inline-flex items-center bg-black hover:bg-blue-600 text-white px-6 py-4 rounded-xl transition-all duration-700 transform hover:scale-105 shadow-xl border border-gray-600 min-w-[200px]'
              aria-label='Download on the App Store'
            >
              <div className='mr-4'>
                <FaApple className='text-3xl' />
              </div>
              <div className='text-left'>
                <div className='text-xs text-gray-300 leading-tight'>
                  Download on the
                </div>
                <div className='text-lg font-semibold leading-tight'>
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href='#'
              className='inline-flex items-center bg-black hover:bg-blue-600 text-white px-6 py-4 rounded-xl transition-all duration-700 transform hover:scale-105 shadow-xl border border-gray-600 min-w-[200px]'
              aria-label='Get it on Google Play'
            >
              <div className='mr-4'>
                <FaGooglePlay className='text-3xl text-green-500' />
              </div>
              <div className='text-left'>
                <div className='text-xs text-gray-300 leading-tight'>
                  Get it on
                </div>
                <div className='text-lg font-semibold leading-tight'>
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
      <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
    </section>
  );
};

export default DownloadApp;
