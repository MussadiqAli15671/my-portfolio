// import "..//my-portfolio/assets/css/main.css";
import ScrollTop from "../components/ScrollTop";
import { useEffect } from "react";
import AOS from "aos";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";

const Home = () => {
  
  useEffect(() => {
  AOS.init({ once: true });

  const container = document.querySelector(".isotope-container") as HTMLElement | null;

  if (container) {
    new Isotope(container, {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });
  }

  GLightbox({ selector: ".glightbox" });
}, []);

  return (
  <>
      <section id="hero">


  <main className="main">
    {/* Hero Section */}
    {/* <section id="hero" class="hero section dark-background">

<img src="/my-portfolio/assets/img/ok.png" alt="" data-aos="fade-in" class="">

<div class="container" data-aos="fade-up" data-aos-delay="100" style="margin-left: 90px;">
  <h2>Mussadiq Ali</h2>
  <p>I'm <span class="typed" data-typed-items="Full Stack Developer, .NET Core Specialist, React Developer, Back End Developer, Freelance Engineer, AI Enthusiast">Full Stack Developer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
</div>

    </section> */}
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background position-relative" style={{position: 'relative'}}>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-lg-8 col-12 text-lg-start text-center">
            <h2>Mussadiq Ali</h2>
            <p>
              I'm 
              <span className="typed" data-typed-items="Full Stack Developer, .NET Core Specialist, React Developer, Back End Developer, Freelance Engineer, AI Enthusiast">
                Full Stack Developer
              </span>
            </p>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="hero-image text-center text-lg-end" style={{position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', width: 360, height: 360, overflow: 'hidden'}}>
          <img src="/my-portfolio/assets/img/okk.png" alt="Profile Picture" className="rounded-circle img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </div>
    </section>
    {/* /Hero Section */}
    {/* About Section */}
    <section id="about" className="about section" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', */
     /* backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', */
     backgroundColor: 'black'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up" style={{color: 'white'}}>
        <h2 style={{color: 'white'}}>About</h2>
        <p>
          I'm a passionate Full Stack Developer with a strong focus on frontend, backend architecture, API development, and AI. I specialize in building secure, scalable systems using .NET Core, Python, React, TypeScript, and SQL/NoSQL databases. Over the past few years, I’ve delivered high-impact solutions for enterprise platforms, certification systems, and e-commerce apps.
          <br /><br />
          I’ve also worked extensively as a backend developer for mobile applications, integrating real-time features, secure payments (Stripe), and cloud storage (Backblaze, Firebase). In several projects, I leveraged web scraping tools like Selenium and Playwright to extract business-critical data, enrich datasets, and support AI-driven insights.
          <br /><br />
          Whether it's a web dashboard, AI integration, or a mobile backend, I bring performance, security, and clean architecture to every project.
        </p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          {/* <div class="col-lg-4">
      <img src="/my-portfolio/assets/img/my-profile-img.jpg" class="img-fluid" alt="">
    </div> */}
          <div className="col-lg-12 content" style={{color: 'white'}}>
            <h2 style={{color: 'white'}}>Full Stack &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              A dedicated developer with a passion for building modern web and mobile solutions. Experienced in full-stack development, backend architecture, and real-time integrations across diverse platforms.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>01 Jul 2002</span></li> */}
                  <li><i className="bi bi-chevron-right" /> <strong>LinkedIn:</strong> <span>https://www.linkedin.com/in/mussadiqaliprogrammer/</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Github:</strong> <span>https://github.com/MussadiqAli15671</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+92 310 5292088</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li> */}
                  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>BS Computer Science</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>mussadiqali2002@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              With hands-on experience in .NET Core, React, TypeScript, Python, and cloud platforms, I’ve built and deployed scalable systems for startups and enterprise clients alike. I bring a strong focus on clean architecture, real-time communication (SignalR, Firebase), secure payments (Stripe), and optimized data handling.
              <br /><br />
              From building admin dashboards to developing intelligent AI-powered platforms and web scrapers with Selenium/Playwright, I always aim for performance, security, and user-friendly design.
            </p>
          </div>
        </div>
      </div>
    </section>{/* /About Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section" style={{display: 'none'}}>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile" />
              <span data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext" />
              <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset" />
              <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people" />
              <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
            </div>
          </div>{/* End Stats Item */}
        </div>
      </div>
    </section>{/* /Stats Section */}
    {/* Skills Section */}
    <section id="skills" className="skills section light-background" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
backgroundColor: 'black'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{color: 'white'}}>Skills</h2>
        <p style={{color: 'white'}}>
          I bring a versatile skill set covering both frontend and backend development. My expertise spans scalable APIs, real-time systems, cloud integration, and AI-powered automation—ensuring modern, secure, and high-performance web and mobile solutions.
        </p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill" style={{color: 'white'}}><span>.NET Core / C#</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill" style={{color: 'white'}}><span>Entity Framework / LINQ</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>React / TypeScript</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Dataverse</span> <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Github</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Azure</span> <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
          </div>
          <div className="col-lg-6">            
            <div className="progress">
              <span className="skill"><span>Python</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Web Scraping and Automation</span> <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Firebase / Backblaze B2</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>SQL / NoSQL</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>AI</span> <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
            <div className="progress">
              <span className="skill"><span>Power Apps</span> <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>{/* End Skills Item */}
          </div>
        </div>
      </div>
    </section>{/* /Skills Section */}
    {/* Resume Section */}
    <section id="resume" className="resume section" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
  backgroundColor: 'black'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{color: 'white'}}>Resume</h2>
        <p style={{color: 'white'}}>
          A dedicated Full Stack Developer with hands-on experience in building scalable web and mobile backend systems using .NET Core, Python, and React. I've contributed to AI-driven platforms, enterprise solutions, and cloud-integrated apps. Below is a summary of my professional journey, education, and technical skillset.
        </p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title" style={{color: 'white'}}>Sumary</h3>
            {/* <div class="resume-item pb-0">
        <h4>Brandon Johnson</h4>
        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
        <ul>
          <li>Portland par 127,Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div> */}
            {/* Edn Resume Item */}
            <h3 className="resume-title" style={{color: 'white'}}>Education</h3>
            <div className="resume-item" style={{color: 'white'}}>
              <h4 style={{color: 'white'}}>BS in Computer Science</h4>
              <h5 style={{color: 'white'}}>CGPA - 3.95</h5>
              <h5 style={{color: 'white'}}>2020 - 2024</h5>
              <p><em>National University of Modern Languages (NUML), Islamabad</em></p>
              <p>Completed core CS courses in Data Structures, Algorithms, Software Engineering, and Artificial Intelligence. Developed multiple academic and industry-grade software projects.</p>
            </div>
            {/* Edn Resume Item */}
            {/* <div class="resume-item">
        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
        <h5>2010 - 2014</h5>
        <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
        <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
      </div> */}
            {/* Edn Resume Item */}
          </div>
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="resume-title" style={{color: 'white'}}>Professional Experience</h3>
            <div className="resume-item">
              <h4 style={{color: 'white'}}>Full Stack Developer</h4>
              <h5 style={{color: 'white'}}>Sep 2024 – Sep 2025</h5>
              <p style={{color: 'white'}}><em>ASM Wiz LLC</em></p>
              <ul style={{color: 'white'}}>
                <li>Developed enterprise-grade applications across energy, education, and service domains using .NET Core, SQL Server, and React/Redux.</li>
                <li>Led backend architecture design, API development, and CI/CD pipelines using Azure DevOps.</li>
                <li>Customized Microsoft Dynamics 365 Dataverse modules and integrated secure third-party services (Stripe, Backblaze).</li>
                <li>Implemented Power Apps Flows and automated background jobs for business workflows and process integrations.</li>
                <li>Implemented performance optimizations and data security standards across multiple projects.</li>
              </ul>
            </div>{/* Edn Resume Item */}
            <div className="resume-item">
              <h4 style={{color: 'white'}}>Full Stack Engineer</h4>
              <h5 style={{color: 'white'}}>Jun 2022 – Jun 2023</h5>
              <p style={{color: 'white'}}><em>GrowUp Tech Solutions, NIC Islamabad</em></p>
              <ul style={{color: 'white'}}>
                <li>Worked on full-stack development using React.js (frontend) and Python (backend) with Firebase integration.</li>
                <li>Built real-time web scraping tools and data dashboards using Tornado, Playwright, and Selenium.</li>
                <li>Developed user-centric applications for clients in retail and education sectors with fast delivery cycles.</li>
                <li>Collaborated with UI/UX designers to turn concepts into responsive, scalable applications.</li>
              </ul>
            </div>{/* End Resume Item */}
          </div>
        </div>
      </div>
    </section>{/* /Resume Section */}
    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio section light-background" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
    color: 'white', backgroundColor: 'black'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{color: 'white'}}>Portfolio</h2>
        <p>Here are some of the backend APIs, full-stack systems, AI integrations, and enterprise-grade applications I have built or contributed to professionally.</p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-backend">Backend APIs</li>
            <li data-filter=".filter-fullstack">Full Stack Apps</li>
            <li data-filter=".filter-ai">AI/ML Projects</li>
            <li data-filter=".filter-enterprise">Enterprise Systems</li>
          </ul>{/* End Portfolio Filters */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
            {/* Routine Planner App */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-backend">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/routineApp.jpg" className="img-fluid" alt="Routine Planner" />
                <div className="portfolio-info">
                  <h4>Routine Planner App</h4>
                  <p>.NET Core backend, Stripe, Backblaze B2, CSP, CI/CD, OneSignal Notifications, WebSockets, SignalR, MSSQL</p>
                  <a href="/my-portfolio/assets/img/routineApp.jpg" title="Routine Planner" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#routine" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* Refer App */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-backend">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/refer-app.jpg" className="img-fluid" alt="Refer App" />
                <div className="portfolio-info">
                  <h4>Refer App</h4>
                  <p>.NET Core Web API backend, Stripe Multi-Connect, Firebase integration</p>
                  <a href="/my-portfolio/assets/img/portfolio/refer.jpg" title="Refer App" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#refer" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* NCCCO Admin System */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/nccco.jpg" className="img-fluid" alt="NCCCO" />
                <div className="portfolio-info">
                  <h4>CCO System</h4>
                  <p>.NET API, React + TypeScript, CRM integration, Power Apps, CRM, Forms, Flows, DataVerse</p>
                  <a href="/my-portfolio/assets/img/portfolio/nccco.jpg" title="NCCCO System" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#nccco" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* CV Matcher */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ai">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/cv-matcher1.jpg" className="img-fluid" alt="CV Matcher" />
                <div className="portfolio-info">
                  <h4>CV Matcher</h4>
                  <p>OpenAI-powered resume matcher built with Next.js and RooCode</p>
                  <a href="/my-portfolio/assets/img/portfolio/cvmatcher.jpg" title="CV Matcher" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#ai" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* Halliburton (QCDOC) */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-enterprise">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/halliburton.jpg" className="img-fluid" alt="Halliburton QCDOC" />
                <div className="portfolio-info">
                  <h4>Halliburton (QCDOC-Vendor)</h4>
                  <p>Legacy system optimization, Enhance page load time, Clean and Implemented StoredProcedures, SQL tuning, WebForms enhancements</p>
                  <a href="/my-portfolio/assets/img/portfolio/halliburton.jpg" title="Halliburton QCDOC" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#halliburtonVendor" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* Halliburton (QCDOC) */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-enterprise">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/halliburton.jpg" className="img-fluid" alt="Halliburton QCDOC" />
                <div className="portfolio-info">
                  <h4>Halliburton (QCDOC-Internal)</h4>
                  <p>Legacy system optimization, .Net Framework, MSSQL, StoredProcedures, SQL Profiler, Inhance the existing legacy application to .NetCore Web API, Entity FrameWork</p>
                  <a href="/my-portfolio/assets/img/QCDOCHalliburton.png" title="Halliburton QCDOC" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#halliburton" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* NCCO-Testing Personnel Platform */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/LMS-CCO.jpg" className="img-fluid" alt="LMS System" />
                <div className="portfolio-info">
                  <h4>NCCO-Testing Personnel</h4>
                  <p>.NET Core API, TypeScript, Power Apps, CRM, Forms, Flows, DataVerse, React-Redux frontend for learning management</p>
                  <a href="/my-portfolio/assets/img/portfolio/lms.jpg" title="LMS Platform" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#lms" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* LMS Admin Panel */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/lmsadmin.jpg" className="img-fluid" alt="LMS Admin Panel" />
                <div className="portfolio-info">
                  <h4>LMS Admin Panel</h4>
                  <p>Full Admin System • React TS, .NET Core, MSSQL, Azure • Courses, Lessons, Quizzes, Instructors</p>
                  <a href="/my-portfolio/assets/img/portfolio/lms-admin.jpg" title="LMS Admin Panel" className="glightbox preview-link">
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a href="portfolio-details.html#lms_admin" className="details-link">
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* LMS Learner Portal */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/lms.jpg" className="img-fluid" alt="LMS Learner Portal" />
                <div className="portfolio-info">
                  <h4>LMS (Learner Portal)</h4>
                  <p>Learner Portal • React TS + .NET Core • Courses, Videos, Quizzes, Progress Tracking</p>
                  <a href="/my-portfolio/assets/img/portfolio/lms-portal.jpg" title="LMS Learner Portal" className="glightbox preview-link">
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a href="portfolio-details.html#lms" className="details-link">
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* AI Business Location Scout */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ai">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/my.png" className="img-fluid" alt="AI Scout" />
                <div className="portfolio-info">
                  <h4>AI Powered Business Location Scout</h4>
                  <p>ML-based suggestion engine using Python, Web Scraping and Automation, Python, Tornado, React js, Open CV, Matplotlib</p>
                  <a href="/my-portfolio/assets/img/my.png" title="AI Scout" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#scout" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* Employee Management System */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/employee.jpg" className="img-fluid" alt="Employee System" />
                <div className="portfolio-info">
                  <h4>Employee Management</h4>
                  <p>DJango, Python, React js, Google/LinkedIn OAuth, Firebase</p>
                  <a href="/my-portfolio/assets/img/employee.jpg" title="Employee Management" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#employee" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
            {/* Intellect Gate */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-fullstack">
              <div className="portfolio-content h-100">
                <img src="/my-portfolio/assets/img/intellectgate1.jpg" className="img-fluid" alt="Employee System" />
                <div className="portfolio-info">
                  <h4>Intellect Gate</h4>
                  <p>React, Typescript, EmailJs, Vercel</p>
                  <a href="/my-portfolio/assets/img/employee.jpg" title="Employee Management" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                  <a href="portfolio-details.html#intellectgate" className="details-link"><i className="bi bi-link-45deg" /></a>
                </div>
              </div>
            </div>
          </div>{/* End Portfolio Container */}
        </div>
      </div>
    </section>{/* /Portfolio Section */}
    {/* Services Section */}
    <section id="services" className="services section" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
     backgroundColor: 'black', color: 'white'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{color: 'white'}}>Services</h2>
        <p>I offer end-to-end development solutions for businesses and startups—from scalable APIs to intelligent automation systems. With expertise in .NET Core, React, Python, Flutter, and AI, I bring ideas to life through modern technology stacks.</p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          {/* Full-Stack Web Development */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon flex-shrink-0"><i className="bi bi-code-slash" /></div>
            <div>
              <h4 className="title"><a href="service-details-webdev.html" className="stretched-link">Full-Stack Development</a></h4>
              <p className="description">End-to-end web application development using .NET Core, Python, DJango, Flask, React, TypeScript, and SQL/NoSQL databases. I build scalable, secure, and maintainable solutions tailored to your business needs.</p>
            </div>
          </div>
          {/* Real-Time System Integration */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon flex-shrink-0"><i className="bi bi-lightning-charge-fill" /></div>
            <div>
              <h4 className="title"><a href="service-details-realtime.html" className="stretched-link">Real-Time Systems</a></h4>
              <p className="description">Leverage SignalR, WebSockets, and background services to build real-time dashboards, collaborative apps, and live communication features across devices.</p>
            </div>
          </div>
          {/* API Design & Integration */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon flex-shrink-0"><i className="bi bi-diagram-3-fill" /></div>
            <div>
              <h4 className="title"><a href="service-details-api.html" className="stretched-link">API Design &amp; Integration</a></h4>
              <p className="description">I specialize in building secure RESTful and GraphQL APIs, third-party service integrations, and scalable backend architectures using C#, Python, and Node.js.</p>
            </div>
          </div>
          {/* AI & Automation Solutions */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={400}>
            <div className="icon flex-shrink-0"><i className="bi bi-cpu-fill" /></div>
            <div>
              <h4 className="title"><a href="service-details-ai.html" className="stretched-link">AI &amp; Automation</a></h4>
              <p className="description">Custom AI solutions using OpenAI, LangChain, and Python for tasks like resume parsing, location recommendation, and chat automation. I build intelligent tools that save time and boost efficiency.</p>
            </div>
          </div>
          {/* Mobile App Backend Development */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={500}>
            <div className="icon flex-shrink-0"><i className="bi bi-hdd-network-fill" /></div>
            <div>
              <h4 className="title"><a href="service-details-backend-mobile.html" className="stretched-link">Backend Development</a></h4>
              <p className="description">I specialize in building robust, secure, and scalable backend systems for mobile apps using .NET Core, Python, DJango, Flask. My services include API development, user authentication, real-time updates (SignalR/WebSockets), and database integration.</p>
            </div>
          </div>
          {/* UI/UX and Dashboard Design */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
            <div className="icon flex-shrink-0"><i className="bi bi-palette-fill" /></div>
            <div>
              <h4 className="title"><a href="service-details-uiux.html" className="stretched-link">UI/UX &amp; Admin Dashboards</a></h4>
              <p className="description">Modern, responsive interfaces with React, Bootstrap, and Tailwind CSS. I design intuitive dashboards for managing complex systems with ease.</p>
            </div>
          </div>
          {/* Portfolio Website Development */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
            <div className="icon flex-shrink-0"><i className="bi bi-window-desktop" /></div>
            <div>
              <h4 className="title"><a href="service-details-portfolio.html" className="stretched-link">Portfolio Website</a></h4>
              <p className="description">Custom-designed, responsive portfolio websites to showcase personal or business profiles. Built with clean UI, contact forms, image galleries, and modern frontend technologies.</p>
            </div>
          </div>
          {/* Database Development (SQL & NoSQL) */}
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
            <div className="icon flex-shrink-0"><i className="bi bi-database-fill" /></div>
            <div>
              <h4 className="title">
                <a href="service-details-database.html" className="stretched-link">Database Development</a>
              </h4>
              <p className="description">
                Expert in designing and managing SQL &amp; NoSQL databases. I build optimized schemas, write efficient queries, and implement scalable solutions for high-performance applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Services Section */}
    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section light-background" style={{display: 'none'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <img src="/my-portfolio/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="Testimonial 1" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <img src="/my-portfolio/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Testimonial 2" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <img src="/my-portfolio/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Testimonial 3" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <img src="/my-portfolio/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="Testimonial 4" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
                <img src="/my-portfolio/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="Testimonial 5" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/* /Testimonials Section */}
    {/* Contact Section */}
    <section id="contact" className="contact section" style={{/* backgroundImage: 'url("/my-portfolio/assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
     backgroundColor: 'black', color: 'white'}}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{color: 'white'}}>Contact</h2>
        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap" style={{backgroundColor: 'transparent !important', boxShadow: 'none !important'}}>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>Rawalpindi, Pakistan</p>
                </div>
              </div>{/* End Info Item */}
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+92 310 5292088</p>
                </div>
              </div>{/* End Info Item */}
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>ali11mussadiq@gmail.com</p>
                </div>
              </div>{/* End Info Item */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345!5m2!1sen!2sus" width="100%" height={270} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="col-lg-7" style={{backgroundColor: 'transparent !important', boxShadow: 'none !important'}}>
            <form id="contactForm" className="php-email-form" data-aos="fade-up" data-aos-delay={200} style={{backgroundColor: 'transparent !important', boxShadow: 'none !important'}}>
              <input type="hidden" name="_captcha" defaultValue="false" />
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" name="email" id="email-field" className="form-control" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" name="subject" id="subject-field" className="form-control" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea name="message" id="message-field" rows={10} className="form-control" required defaultValue={""} />
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>{/* End Contact Form */}
        </div>
      </div>
    </section>{/* /Contact Section */}
  </main>
  <footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <div className="copyright text-center ">
        {/* <p>© <span>Copyright</span> <strong class="px-1 sitename">MaTechs</strong> <span>All Rights Reserved</span></p> */}
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="#">MaTechs</a> Distributed by <a href="#">MaTechs</a>
      </div>
    </div>
  </footer>

</section>
 <ScrollTop />
</>
  );
};

export default Home;
