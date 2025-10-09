import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";
import VideoShowcase from "@/sections/VideoShowcase"; // Add this import
import DownloadApp from "@/sections/DownloadApp";
import Footer from "@/sections/Footer";
import FacilitySubscribe from "@/sections/FacilitySubscribe";

import VpCoach from "@/sections/VpCoach";
import VpAthlete from "@/sections/VpAthlete";
import SubscribeSection from "@/sections/SubscribeSection";
import LiveSportsBroadcast from "@/sections/LiveSportsBroadcast";
export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
        <VpAthlete />
        <VideoShowcase /> {/* Add this component above DownloadApp */}
        <SubscribeSection />
        <LiveSportsBroadcast />
        <FacilitySubscribe />
        {/* <VpCoach /> */}
        {/* <DownloadApp /> */}
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}
