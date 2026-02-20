import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import imagesLoaded from "imagesloaded";
import "./portfolio.css";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const { t } = useTranslation();

  useEffect(() => {
    const container = document.querySelector(".isotope-container") as HTMLElement;
    if (!container) return;

    const iso = new Isotope(container, {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      percentPosition: true,
    });

    imagesLoaded(container).on("always", () => {
      iso.layout();
    });

    GLightbox({ selector: ".glightbox" });

    const filters = document.querySelectorAll(".portfolio-filters li");

    filters.forEach((filter) => {
      filter.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLLIElement;

        filters.forEach((el) => el.classList.remove("filter-active"));
        target.classList.add("filter-active");

        iso.arrange({
          filter: target.getAttribute("data-filter") || "*",
        });
      });
    });

    return () => iso.destroy();
  }, []);

  return (
    <>
    <Helmet>
      <title>
        {t("projects.seo.title")} | Mussadiq Ali
      </title>

      <meta
        name="description"
        content={t("projects.seo.description")}
      />

      <meta
        name="keywords"
        content={t("projects.seo.keywords")}
      />

      <link
        rel="canonical"
        href="https://mussadiq-ali-portfolio.vercel.app/#portfolio"
      />
    </Helmet>

    <section id="portfolio" className="portfolio-section">
      <div className="container">

        {/* ===== TITLE ===== */}
        <div className="portfolio-title">
          <h2>{t("projects.title")}</h2>
          <p>{t("projects.subtitle")}</p>
        </div>

        {/* ===== FILTERS ===== */}
        <ul className="portfolio-filters">
          <li data-filter="*" className="filter-active">{t("projects.filters.all")}</li>
          <li data-filter=".backend">{t("projects.filters.backend")}</li>
          <li data-filter=".fullstack">{t("projects.filters.fullstack")}</li>
          <li data-filter=".ai">{t("projects.filters.ai")}</li>
          <li data-filter=".enterprise">{t("projects.filters.enterprise")}</li>
        </ul>

        <div className="row isotope-container gy-4">

          {/* ===== BACKEND ===== */}
          <Project img="routineApp.jpg" title={t("projects.items.routine")} tech=".NET Core • Stripe • SignalR" />
          <Project img="refer-app.jpg" title={t("projects.items.refer")} tech=".NET Core API • Firebase" />

          {/* ===== FULLSTACK ===== */}
          <Project img="lms.jpg" title={t("projects.items.lms")} tech="React TS • .NET Core" />
          <Project img="nccco.jpg" title={t("projects.items.myccco")} tech=".NET API • React • CRM • Power Apps" />
          <Project img="lmsadmin.jpg" title={t("projects.items.lmsAdmin")} tech="React • MSSQL • Azure • CI/CD" />
          <Project img="employee.jpg" title={t("projects.items.employee")} tech="Django • React" />
          <Project img="intellectgate1.jpg" title={t("projects.items.intellect")} tech="React TS" />

          {/* ===== AI ===== */}
          <Project img="my.png" title={t("projects.items.aiScout")} tech="Python • ML" />
          <Project img="cv-matcher1.jpg" title={t("projects.items.cv")} tech="OpenAI" />

          {/* ===== ENTERPRISE ===== */}
          <Project img="halliburton.jpg" title={t("projects.items.hallVendor")} tech={t("projects.legacy")} />
          <Project img="halliburton.jpg" title={t("projects.items.hallInternal")} tech=".NET Framework" />

        </div>
      </div>
    </section>
    </>
  );
}

/* ===== REUSABLE PROJECT CARD ===== */
function Project({ img, title, tech }: { img: string; title: string; tech: string }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-content">
        <img src={`/assets/img/${img}`} />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{tech}</p>
          <a href={`/my-portfolio/assets/img/${img}`} className="glightbox">
            <i className="bi bi-zoom-in" />
          </a>
        </div>
      </div>
    </div>
  );
}
