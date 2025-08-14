import { FaAndroid, FaApple } from "react-icons/fa6";

const DownloadApp = () => {
  return (
    <section className='relative py-20 bg-gradient-to-r from-black via-gray-900 to-black border-t border-white/15'>
      {/* Background overlay for consistent styling */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Main headline */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
            Soon Download{" "}
            <span className='text-red-600 font-extrabold'>Akture</span> Video
            App
          </h2>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
            Available for Android and iPhones
          </p>

          {/* Platform icons */}
          <div className='flex justify-center items-center gap-16 opacity-60'>
            <div className='flex flex-col items-center gap-2'>
              <FaAndroid className='text-4xl md:text-5xl text-green-500' />
              <span className='text-sm text-gray-400 font-medium'>Android</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <FaApple className='text-4xl md:text-5xl text-gray-300' />
              <span className='text-sm text-gray-400 font-medium'>iOS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements matching site style */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
      <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
    </section>
  );
};

export default DownloadApp;
