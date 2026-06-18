import Hero from "./components/home/Hero";
import TrustBar from "./components/common/TrustBar";
import Projects from "./components/home/Projects";
import Features from "./components/home/Features";
import OfferBanner from "./components/home/OfferBanner";
import Reviews from "./components/home/Reviews";
import MapContact from "./components/home/MapContact";

export const metadata = {
  title: "Sunvia Properties Ltd. | Premium Land-Share Flats & Plots in Dhaka",
};

export default function Home() {
  return (
    <div className="bg-[#F8F5F0]">
      <Hero />
      <TrustBar />
      <Projects />
      <Features />
      <OfferBanner />
      <Reviews />
      <MapContact />
    </div>
  );
}
