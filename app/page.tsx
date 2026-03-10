import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Products from "./components/Products";
import Process from "./components/Process";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Features />
      <Products />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
