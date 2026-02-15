
import { useTranslation } from "react-i18next";
import "./skills.css";
import { Helmet } from "react-helmet-async";

export default function Skills() {
  const { t } = useTranslation();

  const skills = t("skills.items", { returnObjects: true }) as string[];

  return (
    <>
    <Helmet>
      <title>
        {t("skills.seo.title")} | Mussadiq Ali
      </title>

      <meta
        name="description"
        content={t("skills.seo.description")}
      />

      <meta
        name="keywords"
        content={t("skills.seo.keywords")}
      />

      <link
        rel="canonical"
        href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/#skills"
      />
    </Helmet>

    <section id="skills" className="skills3d-section">
      <div className="container">

        <div className="skills3d-title">
          <h2>{t("skills.title")}</h2>
          <p>{t("skills.subtitle")}</p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">
              <div className="skill3d-card">
                {skill}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
