
import { useEffect } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import imagesLoaded from "imagesloaded";
import "./portfolio.css";

export default function Portfolio() {

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
    <section id="portfolio" className="portfolio-section">

      <div className="container">

       <div className="portfolio-title">
        <h2>Projects</h2>
        <p>
          A collection of real-world projects I have worked on, including backend APIs,
          full-stack applications, AI solutions, and enterprise-level systems.
        </p>
      </div>

        {/* FILTERS */}

        <ul className="portfolio-filters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".backend">Backend APIs</li>
          <li data-filter=".fullstack">Full Stack Apps</li>
          <li data-filter=".ai">AI / ML</li>
          <li data-filter=".enterprise">Enterprise</li>
        </ul>

        <div className="row isotope-container gy-4">

{/* ================= BACKEND ================= */}

<div className="col-lg-4 col-md-6 portfolio-item backend">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/routineApp.jpg" />
  <div className="portfolio-info">
    <h4>Routine Planner</h4>
    <p>.NET Core • Stripe • SignalR</p>
    <a href="/my-portfolio/assets/img/routineApp.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 portfolio-item backend">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/refer-app.jpg" />
  <div className="portfolio-info">
    <h4>Refer App</h4>
    <p>.NET Core API • Firebase</p>
    <a href="/my-portfolio/assets/img/refer-app.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

{/* ================= FULLSTACK ================= */}

<div className="col-lg-4 col-md-6 portfolio-item fullstack">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/lms.jpg" />
  <div className="portfolio-info">
    <h4>LMS Portal (NCCCO)</h4>
    <p>React TS • .NET Core</p>
    <a href="/my-portfolio/assets/img/lms.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

{/* NCCCO Admin System */}

<div className="col-lg-4 col-md-6 portfolio-item fullstack">
  <div className="portfolio-content">

    <img src="/my-portfolio/assets/img/nccco.jpg" />

    <div className="portfolio-info">
      <h4>MyCCCO System</h4>
      <p>.NET API • React + TypeScript • Flows (For Crone Jobs) • CRM • Power Apps • Dataverse</p>

      <a href="/my-portfolio/assets/img/nccco.jpg" className="glightbox preview-link">
        <i className="bi bi-zoom-in" />
      </a>

    </div>

  </div>
</div>


<div className="col-lg-4 col-md-6 portfolio-item fullstack">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/lmsadmin.jpg" />
  <div className="portfolio-info">
    <h4>LMS Admin (NCCCO)</h4>
    <p>React • MSSQL • Azure • CI/CD Pipelines</p>
    <a href="/my-portfolio/assets/img/lmsadmin.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 portfolio-item fullstack">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/employee.jpg" />
  <div className="portfolio-info">
    <h4>Employee Management</h4>
    <p>Django • React</p>
    <a href="/my-portfolio/assets/img/employee.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 portfolio-item fullstack">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/intellectgate1.jpg" />
  <div className="portfolio-info">
    <h4>Intellect Gate</h4>
    <p>React TS</p>
    <a href="/my-portfolio/assets/img/intellectgate1.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

{/* ================= AI ================= */}

<div className="col-lg-4 col-md-6 portfolio-item ai">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/my.png" />
  <div className="portfolio-info">
    <h4>AI Business Scout</h4>
    <p>Python • ML</p>
    <a href="/my-portfolio/assets/img/my.png" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 portfolio-item ai">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/cv-matcher1.jpg" />
  <div className="portfolio-info">
    <h4>CV Matcher</h4>
    <p>OpenAI</p>
    <a href="/my-portfolio/assets/img/cv-matcher1.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

{/* ================= ENTERPRISE ================= */}

<div className="col-lg-4 col-md-6 portfolio-item enterprise">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/halliburton.jpg" />
  <div className="portfolio-info">
    <h4>Halliburton QCDOC Vendor</h4>
    <p>Legacy Optimization</p>
    <a href="/my-portfolio/assets/img/halliburton.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 portfolio-item enterprise">
  <div className="portfolio-content">
  <img src="/my-portfolio/assets/img/halliburton.jpg" />
  <div className="portfolio-info">
    <h4>Halliburton Internal</h4>
    <p>.NET Framework</p>
    <a href="/my-portfolio/assets/img/halliburton.jpg" className="glightbox"><i className="bi bi-zoom-in" /></a>
  </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}



// import { useEffect } from "react";
// import Isotope from "isotope-layout";
// import GLightbox from "glightbox";

// export default function Portfolio() {
//     // const Iso = Isotope as any;
//   useEffect(() => {
//   const container = document.querySelector(".isotope-container") as HTMLElement | null;


//   if (!container) return;

//   const iso = new Isotope(container, {
//     itemSelector: ".isotope-item",
//     layoutMode: "masonry",
//   });

//   GLightbox({ selector: ".glightbox" });

//   return () => iso.destroy();
// }, []);


//   return (
//      <section id="portfolio" className="portfolio section light-background" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
//     color: 'white', backgroundColor: 'black'}}>
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2 style={{color: 'white'}}>Portfolio</h2>
//         <p>Here are some of the backend APIs, full-stack systems, AI integrations, and enterprise-grade applications I have built or contributed to professionally.</p>
//       </div>{/* End Section Title */}
//       <div className="container">
//         <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
//           <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
//             <li data-filter="*" className="filter-active">All</li>
//             <li data-filter=".filter-backend">Backend APIs</li>
//             <li data-filter=".filter-fullstack">Full Stack Apps</li>
//             <li data-filter=".filter-ai">AI/ML Projects</li>
//             <li data-filter=".filter-enterprise">Enterprise Systems</li>
//           </ul>{/* End Portfolio Filters */}
//           <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
//             {/* Routine Planner App */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-backend">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/routineApp.jpg" className="img-fluid" alt="Routine Planner" />
//                 <div className="portfolio-info">
//                   <h4>Routine Planner App</h4>
//                   <p>.NET Core backend, Stripe, Backblaze B2, CSP, CI/CD, OneSignal Notifications, WebSockets, SignalR, MSSQL</p>
//                   <a href="/my-portfolio/assets/img/routineApp.jpg" title="Routine Planner" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#routine" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* Refer App */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-backend">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/refer-app.jpg" className="img-fluid" alt="Refer App" />
//                 <div className="portfolio-info">
//                   <h4>Refer App</h4>
//                   <p>.NET Core Web API backend, Stripe Multi-Connect, Firebase integration</p>
//                   <a href="/my-portfolio/assets/img/portfolio/refer.jpg" title="Refer App" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#refer" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* NCCCO Admin System */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/nccco.jpg" className="img-fluid" alt="NCCCO" />
//                 <div className="portfolio-info">
//                   <h4>CCO System</h4>
//                   <p>.NET API, React + TypeScript, CRM integration, Power Apps, CRM, Forms, Flows, DataVerse</p>
//                   <a href="/my-portfolio/assets/img/portfolio/nccco.jpg" title="NCCCO System" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#nccco" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* CV Matcher */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ai">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/cv-matcher1.jpg" className="img-fluid" alt="CV Matcher" />
//                 <div className="portfolio-info">
//                   <h4>CV Matcher</h4>
//                   <p>OpenAI-powered resume matcher built with Next.js and RooCode</p>
//                   <a href="/my-portfolio/assets/img/portfolio/cvmatcher.jpg" title="CV Matcher" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#ai" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* Halliburton (QCDOC) */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-enterprise">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/halliburton.jpg" className="img-fluid" alt="Halliburton QCDOC" />
//                 <div className="portfolio-info">
//                   <h4>Halliburton (QCDOC-Vendor)</h4>
//                   <p>Legacy system optimization, Enhance page load time, Clean and Implemented StoredProcedures, SQL tuning, WebForms enhancements</p>
//                   <a href="/my-portfolio/assets/img/portfolio/halliburton.jpg" title="Halliburton QCDOC" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#halliburtonVendor" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* Halliburton (QCDOC) */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-enterprise">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/halliburton.jpg" className="img-fluid" alt="Halliburton QCDOC" />
//                 <div className="portfolio-info">
//                   <h4>Halliburton (QCDOC-Internal)</h4>
//                   <p>Legacy system optimization, .Net Framework, MSSQL, StoredProcedures, SQL Profiler, Inhance the existing legacy application to .NetCore Web API, Entity FrameWork</p>
//                   <a href="/my-portfolio/assets/img/QCDOCHalliburton.png" title="Halliburton QCDOC" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#halliburton" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* NCCO-Testing Personnel Platform */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/LMS-CCO.jpg" className="img-fluid" alt="LMS System" />
//                 <div className="portfolio-info">
//                   <h4>NCCO-Testing Personnel</h4>
//                   <p>.NET Core API, TypeScript, Power Apps, CRM, Forms, Flows, DataVerse, React-Redux frontend for learning management</p>
//                   <a href="/my-portfolio/assets/img/portfolio/lms.jpg" title="LMS Platform" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#lms" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* LMS Admin Panel */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/lmsadmin.jpg" className="img-fluid" alt="LMS Admin Panel" />
//                 <div className="portfolio-info">
//                   <h4>LMS Admin Panel</h4>
//                   <p>Full Admin System • React TS, .NET Core, MSSQL, Azure • Courses, Lessons, Quizzes, Instructors</p>
//                   <a href="/my-portfolio/assets/img/portfolio/lms-admin.jpg" title="LMS Admin Panel" className="glightbox preview-link">
//                     <i className="bi bi-zoom-in" />
//                   </a>
//                   <a href="portfolio-details.html#lms_admin" className="details-link">
//                     <i className="bi bi-link-45deg" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* LMS Learner Portal */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/lms.jpg" className="img-fluid" alt="LMS Learner Portal" />
//                 <div className="portfolio-info">
//                   <h4>LMS (Learner Portal)</h4>
//                   <p>Learner Portal • React TS + .NET Core • Courses, Videos, Quizzes, Progress Tracking</p>
//                   <a href="/my-portfolio/assets/img/portfolio/lms-portal.jpg" title="LMS Learner Portal" className="glightbox preview-link">
//                     <i className="bi bi-zoom-in" />
//                   </a>
//                   <a href="portfolio-details.html#lms" className="details-link">
//                     <i className="bi bi-link-45deg" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* AI Business Location Scout */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ai">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/my.png" className="img-fluid" alt="AI Scout" />
//                 <div className="portfolio-info">
//                   <h4>AI Powered Business Location Scout</h4>
//                   <p>ML-based suggestion engine using Python, Web Scraping and Automation, Python, Tornado, React js, Open CV, Matplotlib</p>
//                   <a href="/my-portfolio/assets/img/my.png" title="AI Scout" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#scout" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* Employee Management System */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/employee.jpg" className="img-fluid" alt="Employee System" />
//                 <div className="portfolio-info">
//                   <h4>Employee Management</h4>
//                   <p>DJango, Python, React js, Google/LinkedIn OAuth, Firebase</p>
//                   <a href="/my-portfolio/assets/img/employee.jpg" title="Employee Management" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#employee" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//             {/* Intellect Gate */}
//             <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
//               <div className="portfolio-content h-100">
//                 <img src="/my-portfolio/assets/img/intellectgate1.jpg" className="img-fluid" alt="Employee System" />
//                 <div className="portfolio-info">
//                   <h4>Intellect Gate</h4>
//                   <p>React, Typescript, EmailJs, Vercel</p>
//                   <a href="/my-portfolio/assets/img/employee.jpg" title="Employee Management" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
//                   <a href="portfolio-details.html#intellectgate" className="details-link"><i className="bi bi-link-45deg" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>{/* End Portfolio Container */}
//         </div>
//       </div>
//     </section>
//   );
// }

