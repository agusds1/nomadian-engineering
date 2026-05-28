import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import BootcampFlow from "./components/BootcampFlow";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div>

      {loading && <Loader />}

      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Gallery />
      <Testimonial />
      <BootcampFlow />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
      <FloatingWhatsApp />

    </div>

  );
}

export default App;