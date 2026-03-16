import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import "./hero.css";
import LanguageSwitcher from "../LanguageSwitcher";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: t("hero.roles", { returnObjects: true }) as string[],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, [i18n.language, t]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <>
    <Helmet>
  <title>
    {t("hero.seo.title")} | Mussadiq Ali
  </title>

  <meta
    name="description"
    content={t("hero.seo.description")}
  />

  <meta
    name="keywords"
    content={t("hero.seo.keywords")}
  />

  <link
    rel="canonical"
    href="https://mussadiq-ali-portfolio.vercel.app/"
  />
</Helmet>

    <section id="hero" className="hero">

      {/* 🌍 LANGUAGE SWITCHER */}
        <div className="hero-language">
          <LanguageSwitcher />
        </div>
  
      {/* PARTICLES */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.4 },
            links: { enable: true, color: "#149ddd" }
          }
        }}
      />

      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-7 text-lg-start text-center">
            <h2 className="hero-name">{t("hero.name")}</h2>

            <p>
              {t("hero.im")} <span ref={typedRef} />
            </p>

            {/* SERVICE */}
            <a href="#contact" className="hero-service">
              {t("hero.service.line1")}{" "}
              <span>{t("hero.service.software")}</span>,{" "}
              <span>{t("hero.service.website")}</span>,{" "}
              <span>{t("hero.service.ai")}</span>,{" "}
              <span>{t("hero.service.chatbot")}</span>{" "}
              — {t("hero.service.line2")}
              <br />
              <strong>{t("hero.service.free")}</strong> →
            </a>

            {/* ACTIONS */}
            <div className="hero-actions">
              <a
                href="https://wa.me/923105292088"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp"
              >
                📱 {t("hero.whatsapp")} — <span>{t("hero.whatsappCta")}</span>
              </a>

              <a
                href="assets/MussadiqAli__DevCV.pdf"
                download
                className="hero-btn"
              >
                {t("hero.download")}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
            <img
              src="assets/img/okk.png"
              className="hero-profile"
              alt="Profile"
            />
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
