import Slider from "./components/CardSlider";
import Footer from "./components/Footer";
import SliderCard from "./components/SliderCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="container-fluid pt-8 h-auto pb-20">
      <Navbar />
      <Hero />
      <Slider />
      <SliderCard />
      <Footer />
    </div>
  );
}
