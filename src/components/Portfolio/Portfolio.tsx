import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import imagesLoaded from "imagesloaded";
import "./portfolio.css";
import { Helmet } from "react-helmet-async";
import { projectsData } from "../../data/projects";

export default function Portfolio() {
  const { t } = useTranslation();

  useEffect(() => {
    const container = document.querySelector(
      ".isotope-container"
    ) as HTMLElement;

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
            <li data-filter="*" className="filter-active">
              {t("projects.filters.all")}
            </li>

            <li data-filter=".backend">
              {t("projects.filters.backend")}
            </li>

            <li data-filter=".fullstack">
              {t("projects.filters.fullstack")}
            </li>

            <li data-filter=".ai">
              {t("projects.filters.ai")}
            </li>

            <li data-filter=".enterprise">
              {t("projects.filters.enterprise")}
            </li>
          </ul>

          <div className="row isotope-container gy-4">
            {projectsData.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                img={project.image}
                title={t(
                  `projects.items.${project.id.replace(/-/g, "")}`,
                  {
                    defaultValue: project.title,
                  }
                )}
                tech={project.technologies}
                category={project.category}
                noImage={project.noImage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== REUSABLE PROJECT CARD ===== */
function Project({
  id,
  img,
  title,
  tech,
  category,
  noImage,
}: {
  id: string;
  img: string | string[];
  title: string;
  tech: string;
  category: string;
  noImage?: boolean;
}) {
  const mainImage = Array.isArray(img) ? img[0] : img;

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${category}`}>
      <div className="portfolio-content">

        {noImage ? (
          <div className="portfolio-placeholder" />
        ) : (
          <img
            src={`/assets/img/${mainImage}`}
            alt={title}
          />
        )}

        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{tech}</p>

          <Link
            to={`/projects/${id}`}
            className="details-link"
          >
            <i className="bi bi-eye" />
          </Link>

          {!noImage && (
            <a
              href={`/assets/img/${mainImage}`}
              className="glightbox"
            >
              <i className="bi bi-zoom-in" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}