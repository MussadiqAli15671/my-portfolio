import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("sidebar-active", open);
  }, [open]);

  // 🔁 Handle RTL / LTR automatically
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir =
      i18n.language === "ur" || i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      {/* ===== TOGGLE BUTTON ===== */}
      <button className="header-toggle" onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? "bi-x" : "bi-list"}`} />
      </button>

      {/* ===== SIDEBAR ===== */}
      <header
        id="header"
        className={`header d-flex flex-column ${open ? "header-show" : ""}`}
      >
        {/* SITE NAME */}
        <h1 className="sitename">{t("header.name")}</h1>

        {/* NAV MENU */}
        <nav className="navmenu">
          <ul>
            <li>
              <a href="#hero" onClick={() => setOpen(false)}>
                {t("header.menu.home")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                {t("header.menu.about")}
              </a>
            </li>
            <li>
              <a href="#resume" onClick={() => setOpen(false)}>
                {t("header.menu.resume")}
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setOpen(false)}>
                {t("header.menu.projects")}
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setOpen(false)}>
                {t("header.menu.services")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                {t("header.menu.contact")}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
