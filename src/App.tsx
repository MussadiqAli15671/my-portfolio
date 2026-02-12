import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

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
import PersonSchema from "./components/SEO/PersonSchema";
import ServiceSchema from "./components/SEO/ServiceSchema";

export default function App() {
  const { i18n } = useTranslation();

  // AOS init
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100,
    });
  }, []);

  // 🔥 RTL / LTR HANDLER
  useEffect(() => {
    const isRTL = i18n.language === "ur" || i18n.language === "ar";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
      <PersonSchema />
      <ServiceSchema />
    </>
  );
}
