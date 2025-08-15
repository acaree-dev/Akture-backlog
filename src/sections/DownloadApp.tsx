import { FaApple, FaGooglePlay } from "react-icons/fa6";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className='relative py-20 bg-gradient-to-r from-black via-gray-900 to-black border-t border-white/15'>
      {/* Background overlay for consistent styling */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left side - Content and Download Buttons */}
            <div className='text-center lg:text-left order-2 lg:order-1'>
              {/* Main headline */}
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
                Download{" "}
                <span className='text-red-600 font-extrabold'>Akture</span>{" "}
                Video App Soon
              </h2>

              {/* Subheadline */}
              <p className='text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0'>
                Available for Android and iPhones
              </p>

              {/* Download Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8'>
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
                  <div className='text-left group'>
                    <div className='text-xs text-gray-300 leading-tight'>
                      Download on the
                    </div>
                    <div className='text-lg font-semibold leading-tight'>
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* Platform indicators */}
            </div>

            {/* Right side - Smaller Phone Mockup */}
            <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
              <div className='relative max-w-[200px] w-full'>
                {/* Android-style phone frame */}
                <div className='relative bg-gradient-to-b from-gray-700 to-gray-900 p-1 rounded-[1.5rem] shadow-xl'>
                  {/* Screen */}
                  <div className='bg-white rounded-[1.25rem] overflow-hidden relative aspect-[9/16]'>
                    {/* Camera cutout */}
                    <div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30 flex items-center justify-center'>
                      <div className='w-2 h-2 bg-gray-600 rounded-full'></div>
                    </div>

                    {/* App interface mockup */}
                    <div className='absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100'>
                      {/* Header */}
                      <div className='absolute top-6 left-0 right-0 p-3 text-center'>
                        <h3 className='text-black text-sm font-bold mb-1'>
                          Akture
                        </h3>
                        <div className='h-0.5 w-8 bg-red-600 mx-auto rounded'></div>
                      </div>

                      {/* Content area */}
                      <div className='absolute top-16 left-2 right-2 bottom-12'>
                        {/* Video thumbnail grid */}
                        <div className='grid grid-cols-2 gap-1 mb-2'>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className='bg-gray-800 rounded aspect-video relative'
                            >
                              <div className='absolute inset-0 bg-gradient-to-br from-red-600/50 to-transparent rounded'></div>
                              <div className='absolute bottom-1 left-1 text-white text-[6px] font-bold'>
                                LIVE
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Featured video */}
                        <div className='bg-black rounded-lg aspect-video relative'>
                          <div className='absolute inset-0 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center'>
                            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                              <div className='w-0 h-0 border-l-[3px] border-l-black border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent ml-0.5'></div>
                            </div>
                          </div>
                          <div className='absolute bottom-1 left-1 text-white text-[6px]'>
                            2.5K watching
                          </div>
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className='absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2'>
                        <div className='flex justify-around'>
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full ${
                                i === 0 ? "bg-red-600" : "bg-gray-300"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className='absolute -inset-2 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 blur-lg opacity-50'></div>
              </div>
            </div>
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
