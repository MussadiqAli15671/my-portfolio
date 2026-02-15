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
    href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/#about"
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
