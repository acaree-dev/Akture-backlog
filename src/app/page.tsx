import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";
import VideoShowcase from "@/sections/VideoShowcase"; // Add this import
import DownloadApp from "@/sections/DownloadApp";
import Footer from "@/sections/Footer";
import FacilitySubscribe from "@/sections/FacilitySubscribe";
import VpOwner from "@/sections/VpCoach";
import VpCoach from "@/sections/VpCoach";
import VpAthlete from "@/sections/VpAthlete";
import SubscribeSection from "@/sections/SubscribeSection";

export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
        <VpCoach />
        <VpAthlete />
        <SubscribeSection />
        <VideoShowcase /> {/* Add this component above DownloadApp */}
        <DownloadApp />
        <div className='mt-auto'>
          <FacilitySubscribe />

          <Footer />
        </div>
      </div>
    </>
  );
}
