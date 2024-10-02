import Download from "./components/sections/Download";
import Faq from "./components/sections/Faq";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-[1024px]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Reviews />
      <Download />
      <Footer />
    </div>
  );
}
