// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import "./assets/css/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "./i18n";
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/my-portfolio">
      <HelmetProvider>
        <App />
      </HelmetProvider>
  </BrowserRouter>,
)
