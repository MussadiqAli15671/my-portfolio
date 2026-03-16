import { useTranslation } from "react-i18next";
import "./resume.css";
import { Helmet } from "react-helmet-async";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <>
    <Helmet>
      <title>
        {t("resume.seo.title")} | Mussadiq Ali
      </title>

      <meta
        name="description"
        content={t("resume.seo.description")}
      />

      <meta
        name="keywords"
        content={t("resume.seo.keywords")}
      />

      <link
        rel="canonical"
        href="https://mussadiq-ali-portfolio.vercel.app/#resume"
      />
    </Helmet>

    <section id="resume" className="resume-section">

      {/* ===== SECTION TITLE ===== */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("resume.title")}</h2>
        <p>{t("resume.subtitle")}</p>
      </div>

      <div className="container">
        <div className="row">

          {/* ===== EDUCATION ===== */}
          <div className="col-lg-12" data-aos="fade-up">
            <h3 className="resume-title">{t("resume.education.title")}</h3>

            <div className="resume-item">
              <h4>{t("resume.education.degree")}</h4>
              <h5>{t("resume.education.achievement")}</h5>
              <h5>{t("resume.education.duration")}</h5>
              <p>
                <em>{t("resume.education.institute")}</em>
              </p>
              <p>{t("resume.education.description")}</p>
            </div>
          </div>

          {/* ===== EXPERIENCE ===== */}
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="150">
            <h3 className="resume-title">{t("resume.experience.title")}</h3>

            {/* EXPERIENCE 1 */}
            <div className="resume-item">
              <h4>{t("resume.experience.exp1.role")}</h4>
              <h5>{t("resume.experience.exp1.duration")}</h5>
              <p>
                <em>{t("resume.experience.exp1.company")}</em>
              </p>

              <ul>
                <li>{t("resume.experience.exp1.points.0")}</li>
                <li>{t("resume.experience.exp1.points.1")}</li>
                <li>{t("resume.experience.exp1.points.2")}</li>
                <li>{t("resume.experience.exp1.points.3")}</li>
                <li>{t("resume.experience.exp1.points.4")}</li>
              </ul>
            </div>

            {/* EXPERIENCE 2 */}
            <div className="resume-item">
              <h4>{t("resume.experience.exp2.role")}</h4>
              <h5>{t("resume.experience.exp2.duration")}</h5>
              <p>
                <em>{t("resume.experience.exp2.company")}</em>
              </p>

              <ul>
                <li>{t("resume.experience.exp2.points.0")}</li>
                <li>{t("resume.experience.exp2.points.1")}</li>
                <li>{t("resume.experience.exp2.points.2")}</li>
                <li>{t("resume.experience.exp2.points.3")}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}
