import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import { Link } from "react-router-dom";

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
        <Link to="/my-portfolio" onClick={() => setOpen(false)} style={{ textDecoration: "none" }}>
          <h1 className="sitename">{t("header.name")}</h1>
        </Link>

        {/* NAV MENU */}
        <nav className="navmenu">
          <ul>
            <li>
              <Link to="/my-portfolio" onClick={() => setOpen(false)}>
                {t("header.menu.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                {t("header.menu.about")}
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => setOpen(false)}>
                {t("header.menu.resume")}
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setOpen(false)}>
                {t("header.menu.skills")}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setOpen(false)}>
                {t("header.menu.projects")}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setOpen(false)}>
                {t("header.menu.services")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                {t("header.menu.contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
