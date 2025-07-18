import { Header } from "@/sections/Header";
import TrendingPromo from "@/sections/TrendingPromo";
import AktureCarousel from "@/sections/AktureCarousel";

export default function Home() {
  return (
    <>
      <div className=''>
        <TrendingPromo />
        <Header />
        <AktureCarousel />
      </div>
    </>
  );
}
