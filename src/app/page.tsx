import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}
