import { useTranslation } from "react-i18next";
import "./about.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { t } = useTranslation();

  <Helmet>
  <title>
    About | AI & Full Stack Developer – Mussadiq Ali
  </title>

  <meta
    name="description"
    content="Learn about Mussadiq Ali, an AI & Full Stack Developer with expertise in .NET Core, React, Python, Machine Learning, and enterprise software development."
  />

  <link
    rel="canonical"
    href="https://mussadiq-ali-portfolio.vercel.app/#about"
  />
</Helmet>

  return (
    <section id="about" className="about-section">

      {/* ===== SECTION TITLE ===== */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("about.title")}</h2>
        <p>{t("about.intro")}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="about-content">

              {/* ROLE TITLE */}
              <h2>{t("about.roleTitle")}</h2>

              {/* ITALIC TEXT */}
              <p className="fst-italic">
                {t("about.italicText")}
              </p>

              {/* PARAGRAPHS */}
              <p>{t("about.para1")}</p>
              <p>{t("about.para2")}</p>
              <p>{t("about.para3")}</p>

              {/* ## Professional Profile

My name is **Mussadiq Ali**, and I am a **Full-Stack & AI Developer** with a strong academic background in Computer Science. I completed my **MPhil in Computer Science with a 3.93/4.00 GPA** and my **Bachelor’s degree in Computer Science as a Gold Medalist**.

I have extensive experience in developing and delivering software throughout its complete lifecycle—from **gathering and analyzing client requirements** and converting them into technical specifications to **system architecture, database design, frontend and backend development, AI/ML integration, payment gateway integration, testing, CI/CD pipeline development, DevOps practices, and production deployment**.

I have worked on **highly scalable SaaS, ERP, complex analytical, and multi-tenant systems** for organizations based in **Pakistan and the USA**. I have experience developing applications from scratch, where I design the overall architecture, establish separation of concerns, create reusable components, develop business-logic and repository layers, design database schemas and ERDs, and build maintainable frontend and backend systems.

I have also worked extensively with **existing and legacy systems**, where my responsibilities included resolving bugs, implementing enhancement requests, improving application performance, optimizing database queries, addressing issues such as **N+1 queries**, debugging and profiling applications, and upgrading legacy technologies to modern frameworks. For example, I have worked on migrations such as **ADO.NET/WebForms applications to .NET 8 with Entity Framework** and modernization of older **Flask applications into modular Django-based systems**.

My core technical expertise includes **Python, .NET Core, React.js, TypeScript, SQL, NoSQL databases, vector databases, RAG, AI agents, Machine Learning, Deep Learning, and LLM-based applications**. Over the past few years, I have increasingly specialized in **backend engineering and AI engineering**, particularly in building intelligent applications using modern AI and LLM technologies.

I have experience not only integrating AI services but also **developing and training Machine Learning and Deep Learning models**, integrating LLMs into applications, building **RAG pipelines and AI agents**, and incorporating AI-driven solutions into production software.

My two most recent and impactful projects are **MySchedule Buddy** and **AI AgentDesk**, where I have worked extensively on backend architecture, AI integrations, intelligent agents, and scalable application development.

I am currently open to **full-time, part-time, and contract-based opportunities**, as well as opportunities in **AI research and applied AI engineering**. */}


              {/* INFO LIST */}
              <div className="row mt-4">

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.linkedin")}:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/in/mussadiqaliprogrammer/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/mussadiqaliprogrammer
                      </a>
                    </li>

                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.github")}:</strong>{" "}
                      <a
                        href="https://github.com/MussadiqAli15671"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/MussadiqAli15671
                      </a>
                    </li>

                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.phone")}:</strong> +92 310 5292088
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.degree")}:</strong>{" "}
                      {t("about.degreeValue")}
                    </li>

                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.email")}:</strong>{" "}
                      mussadiqali2002@gmail.com
                    </li>

                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>{t("about.labels.freelance")}:</strong>{" "}
                      {t("about.freelanceValue")}
                    </li>
                  </ul>
                </div>

              </div>

              {/* CLOSING TEXT */}
              <p className="mt-3">
                {t("about.closing")}
              </p>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
