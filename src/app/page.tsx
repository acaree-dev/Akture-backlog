import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";
import VideoShowcase from "@/sections/VideoShowcase"; // Add this import
import DownloadApp from "@/sections/DownloadApp";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
        <VideoShowcase /> {/* Add this component above DownloadApp */}
        <DownloadApp />
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}
