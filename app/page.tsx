import Image from "next/image";
import HowItWork from "./components/HowItWork";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Providers from "./components/Providers";
import { FAQ } from "./components/FAQ";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="providers">
        <Providers />
      </div>
      <div id="deals">
        <HowItWork />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
