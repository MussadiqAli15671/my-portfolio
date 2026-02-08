// import { useEffect, useState } from "react";
// import AOS from "aos";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
// import Preloader from "./components/Preloader";

export default function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   AOS.init({ once: true, duration: 800 });

    // const timer = setTimeout(() => setLoading(false), 1200);

    // return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Preloader />;

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
