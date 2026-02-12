import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import PersonSchema from "./components/SEO/PersonSchema";
import ServiceSchema from "./components/SEO/ServiceSchema";
import SkillsPage from "./pages/SkillsPage";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const isRTL = i18n.language === "ur" || i18n.language === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/my-portfolio" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <ScrollTop />
      <PersonSchema />
      <ServiceSchema />
    </>
  );
}
