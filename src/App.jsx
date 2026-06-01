import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Flow from "./components/Flow";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";

function App() {

  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) return <Loader />;

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
      <Flow />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />

      <FloatingContact
        open={contactOpen}
        setOpen={setContactOpen}
      />

      <FloatingButtons
        contactOpen={contactOpen}
      />

    </div>

  );
}

export default App;