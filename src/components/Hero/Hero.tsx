import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

import "./hero.css";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Full Stack Developer",
        "AI & Machine Learning Engineer",
        ".NET Core Specialist",
        "React + TypeScript Developer",
        "Cloud & DevOps Enthusiast"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="hero" className="hero">

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
            <h2 className="hero-name">Mussadiq Ali</h2>

            <p>
              I'm <span ref={typedRef} />
            </p>

            {/* SERVICE */}
            <a href="#contact" className="hero-service">
              For any type of <span>software</span>, <span>website</span>,
              <span> AI solution</span>, or <span>chatbot</span> — I can build it for you.<br/>
              <strong> Free consultation</strong> →
            </a>

            {/* ACTIONS */}
            <div className="hero-actions">

              <a
                href="https://wa.me/923105292088"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp"
              >
                📱 WhatsApp: +92 310 5292088 — <span>Direct message me</span>
              </a>

              <a
                href="assets/MussadiqAli__DevCV.pdf"
                download
                className="hero-btn"
              >
                Download CV
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
  );
}
