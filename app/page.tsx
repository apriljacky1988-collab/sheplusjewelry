import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Products />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
