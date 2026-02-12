import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SEO() {
  const { t, i18n } = useTranslation();

  const baseUrl = "https://mussadiqali15671.github.io/my-portfolio";
  const imageUrl = `${baseUrl}/assets/img/okk.png`; 
  // 👆 add a good preview image later (1200x630)

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      {/* ===== BASIC SEO ===== */}
      <title>{t("seo.title")}</title>

      <meta
        name="description"
        content={t("seo.description")}
      />

      <meta
        name="keywords"
        content={t("seo.keywords")}
      />

      <meta name="author" content="Mussadiq Ali" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <link rel="canonical" href={`${baseUrl}/`} />

      {/* ===== OPEN GRAPH (WhatsApp, Facebook, LinkedIn) ===== */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/`} />
      <meta property="og:title" content={t("seo.ogTitle")} />
      <meta property="og:description" content={t("seo.ogDescription")} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ===== TWITTER (X) ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("seo.ogTitle")} />
      <meta name="twitter:description" content={t("seo.ogDescription")} />
      <meta name="twitter:image" content={imageUrl} />

      {/* ===== HREFLANG (MULTI-LANGUAGE SEO) ===== */}
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="ur" />
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="ar" />
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="x-default" />
    </Helmet>
  );
}
