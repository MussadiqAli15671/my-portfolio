import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("sidebar-active", open);
  }, [open]);

  return (
    <>
      {/* TOGGLE BUTTON (OUTSIDE HEADER) */}

      <button className="header-toggle" onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? "bi-x" : "bi-list"}`} />
      </button>

      {/* SIDEBAR */}

      <header
        id="header"
        className={`header d-flex flex-column ${open ? "header-show" : ""}`}
      >

        <h1 className="sitename">Mussadiq Ali</h1>

        <nav className="navmenu">
          <ul>
            <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#resume" onClick={() => setOpen(false)}>Resume</a></li>
            <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
            <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>

      </header>
    </>
  );
}
