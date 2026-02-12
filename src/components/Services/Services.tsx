import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./services.css";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      {/* ===== SEO FOR SERVICES ===== */}
      <Helmet>
        <title>
          {t("services.seo.title")} | Mussadiq Ali
        </title>

        <meta
          name="description"
          content={t("services.seo.description")}
        />

        <meta
          name="keywords"
          content={t("services.seo.keywords")}
        />

        <link
          rel="canonical"
          href="https://mussadiqali15671.github.io/my-portfolio/#services"
        />
      </Helmet>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="services-section">

        {/* TITLE */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div className="container">
          <div className="row gy-4">

            <Service icon="bi-code-slash"
              title={t("services.items.fullstack.title")}
              desc={t("services.items.fullstack.desc")}
            />

            <Service icon="bi-cpu" delay={200}
              title={t("services.items.software.title")}
              desc={t("services.items.software.desc")}
            />

            <Service icon="bi-globe2" delay={100}
              title={t("services.items.website.title")}
              desc={t("services.items.website.desc")}
            />

            <Service icon="bi-whatsapp" delay={200}
              title={t("services.items.whatsapp.title")}
              desc={t("services.items.whatsapp.desc")}
            />

            <Service icon="bi-mic" delay={300}
              title={t("services.items.voice.title")}
              desc={t("services.items.voice.desc")}
            />

            <Service icon="bi-lightning-charge-fill" delay={100}
              title={t("services.items.realtime.title")}
              desc={t("services.items.realtime.desc")}
            />

            <Service icon="bi-diagram-3-fill" delay={200}
              title={t("services.items.api.title")}
              desc={t("services.items.api.desc")}
            />

            <Service icon="bi-cpu-fill" delay={300}
              title={t("services.items.ai.title")}
              desc={t("services.items.ai.desc")}
            />

            <Service icon="bi-hdd-network-fill" delay={400}
              title={t("services.items.backend.title")}
              desc={t("services.items.backend.desc")}
            />

            <Service icon="bi-palette-fill" delay={500}
              title={t("services.items.uiux.title")}
              desc={t("services.items.uiux.desc")}
            />

            <Service icon="bi-window-desktop" delay={600}
              title={t("services.items.portfolio.title")}
              desc={t("services.items.portfolio.desc")}
            />

            <Service icon="bi-database-fill" delay={700}
              title={t("services.items.database.title")}
              desc={t("services.items.database.desc")}
            />

          </div>
        </div>

      </section>
    </>
  );
}

/* ===== REUSABLE SERVICE CARD ===== */
function Service({
  icon,
  title,
  desc,
  delay = 0
}: {
  icon: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="service-item d-flex">
        <div className="icon">
          <i className={`bi ${icon}`} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
