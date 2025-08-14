import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";
import DownloadApp from "@/sections/DownloadApp"; // Add this import
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
        <DownloadApp /> {/* Add this component before Footer */}
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}
