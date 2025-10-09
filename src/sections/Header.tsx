import AktureLogo from "@/assets/Akture-logo.svg";
import logo from "@/assets/banner_blackred.png";
import { SlMenu } from "react-icons/sl";
import buttonBg from "@/assets/button-bg.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none mt-8'>
      <div className='w-full px-4'>
        {/* subcontainer for header content */}
        <div className='flex justify-between items-center border border-white/15 py-1 px-2 rounded-2xl mx-auto mt-4 fixed top-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] md:max-w-7xl z-50 backdrop-blur-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-saturate-200 before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/40 before:bg-gradient-to-br before:from-white/30 before:to-transparent before:backdrop-blur-xl before:-z-10'>
          <div className='relative z-10 flex flex-col items-center justify-center gap-2'>
            {/* <AktureLogo className='h-[4rem] w-auto' /> */}
            {/* <span className='text-4xl font-extrabold text-black ml-2 font-teko tracking-wider transform -skew-x-12 inline-block'>
              AKTURE
            </span> */}
            <Image src={logo} alt='Akture Logo' className='h-[5rem] w-auto' />
          </div>
          {/* navigation  menu */}
          <div className='hidden md:block relative z-10'>
            <nav className='flex gap-8  text-xl  justify-center items-center font-bold'>
              <a
                href='#'
                className='text-black text-xl  hover:text-red-700 transition-colors'
              >
                Home
              </a>
              <a
                href='#'
                className='text-black text-xl  hover:text-red-700 transition-colors'
              >
                Purchase
              </a>
              <a
                href='#'
                className='text-black hover:text-red-700 e transition-colors'
              >
                Livestreams
              </a>
              <a
                href='#'
                className='text-black hover:text-red-700  transition-colors'
              >
                Mission
              </a>
              <a
                href='#'
                className='text-black   hover:text-red-700  transition-colors'
              >
                About
              </a>
              <a
                href='#'
                className='text-black  hover:text-red-700  transition-colors'
              >
                Contact
              </a>
            </nav>
          </div>
          {/* Right side - Login button and menu icon */}
          <div className='flex gap-4 items-center relative z-10'>
            <button
              className='border-2 mr-3 border-black relative py-2 px-6 rounded-lg font-bold text-lg text-black
               shadow-[0px_0px_12px_#000000] hover:shadow-[0px_0px_20px_#000000] hover:scale-105 hover:brightness-110 
               transition-all duration-300 ease-in-out overflow-hidden group'
              style={{
                backgroundImage: `url(${buttonBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition:
                  "background-position 0.3s ease-in-out, transform 0.3s ease-in-out",
                boxShadow:
                  "0 2px 20px rgba(0, 0, 0, 0.6), 0 2px 5px rgba(220, 38, 38, 0.5)",
              }}
            >
              <div className='absolute inset-0'>
                <div className=' rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/20 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
              </div>
              <span className='relative z-10'>Login</span>
            </button>
            {/* mobile menu icon */}

            <SlMenu className='h-7 w-7 text-black md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
