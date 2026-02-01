import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* TITLE */}

      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I'm a passionate Full Stack Developer with strong expertise in frontend, backend architecture,
          API development, and AI. I specialize in building secure and scalable systems using .NET Core,
          Python, React, TypeScript, and SQL/NoSQL databases.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div className="about-content">

              <h2>Full Stack, AI & Web Developer</h2>

              <p className="fst-italic">
                A dedicated Full Stack Developer with experience across frontend, backend, cloud deployment, and AI-driven systems, focused on building scalable, secure, and high-performance applications.
              </p>

              <p>
                Over the past few years, I’ve delivered enterprise platforms, certification systems, and e-commerce applications, contributing across the entire development lifecycle — from UI implementation and API architecture to database design and production deployments.
              </p>

              <p>
                I’ve worked extensively on React and TypeScript frontends, .NET Core and Python backends, and cloud deployments on Azure, including CI/CD pipelines and infrastructure automation. My experience also includes integrating real-time systems, secure payment gateways (Stripe), and cloud storage solutions (Backblaze, Firebase).
              </p>

              <p>
                I’ve also built AI-powered tools and web scrapers using Selenium and Playwright to extract
                business-critical data and support intelligent automation workflows.
              </p>

              <div className="row mt-4">

                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /><strong>LinkedIn:</strong> https://www.linkedin.com/in/mussadiqaliprogrammer/</li>
                    <li><i className="bi bi-chevron-right" /><strong>Github:</strong> https://github.com/MussadiqAli15671</li>
                    <li><i className="bi bi-chevron-right" /><strong>Phone:</strong> +92 310 5292088</li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /><strong>Degree:</strong> BS Computer Science</li>
                    <li><i className="bi bi-chevron-right" /><strong>Email:</strong> mussadiqali2002@gmail.com</li>
                    <li><i className="bi bi-chevron-right" /><strong>Freelance:</strong> Available</li>
                  </ul>
                </div>

              </div>

              <p className="mt-3">
                From building admin dashboards to developing intelligent AI platforms and scalable APIs,
                I always prioritize performance, security, and user-friendly design in every project.
              </p>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}



// export default function About() {
//   return (
//         <section id="about" className="about section" style={{/* backgroundImage: 'url("assets/img/bg5.jpg")', */
//      /* backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', */
//      backgroundColor: 'black'}}>
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up" style={{color: 'white'}}>
//         <h2 style={{color: 'white'}}>About</h2>
//         <p>
//           I'm a passionate Full Stack Developer with a strong focus on frontend, backend architecture, API development, and AI. I specialize in building secure, scalable systems using .NET Core, Python, React, TypeScript, and SQL/NoSQL databases. Over the past few years, I’ve delivered high-impact solutions for enterprise platforms, certification systems, and e-commerce apps.
//           <br /><br />
//           I’ve also worked extensively as a backend developer for mobile applications, integrating real-time features, secure payments (Stripe), and cloud storage (Backblaze, Firebase). In several projects, I leveraged web scraping tools like Selenium and Playwright to extract business-critical data, enrich datasets, and support AI-driven insights.
//           <br /><br />
//           Whether it's a web dashboard, AI integration, or a mobile backend, I bring performance, security, and clean architecture to every project.
//         </p>
//       </div>{/* End Section Title */}
//       <div className="container" data-aos="fade-up" data-aos-delay={100}>
//         <div className="row gy-4 justify-content-center">
//           {/* <div class="col-lg-4">
//       <img src="assets/img/my-profile-img.jpg" class="img-fluid" alt="">
//     </div> */}
//           <div className="col-lg-12 content" style={{color: 'white'}}>
//             <h2 style={{color: 'white'}}>Full Stack &amp; Web Developer.</h2>
//             <p className="fst-italic py-3">
//               A dedicated developer with a passion for building modern web and mobile solutions. Experienced in full-stack development, backend architecture, and real-time integrations across diverse platforms.
//             </p>
//             <div className="row">
//               <div className="col-lg-6">
//                 <ul>
//                   {/* <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>01 Jul 2002</span></li> */}
//                   <li><i className="bi bi-chevron-right" /> <strong>LinkedIn:</strong> <span>https://www.linkedin.com/in/mussadiqaliprogrammer/</span></li>
//                   <li><i className="bi bi-chevron-right" /> <strong>Github:</strong> <span>https://github.com/MussadiqAli15671</span></li>
//                   <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+92 310 5292088</span></li>
//                 </ul>
//               </div>
//               <div className="col-lg-6">
//                 <ul>
//                   {/* <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li> */}
//                   <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>BS Computer Science</span></li>
//                   <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>mussadiqali2002@gmail.com</span></li>
//                   <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
//                 </ul>
//               </div>
//             </div>
//             <p className="py-3">
//               With hands-on experience in .NET Core, React, TypeScript, Python, and cloud platforms, I’ve built and deployed scalable systems for startups and enterprise clients alike. I bring a strong focus on clean architecture, real-time communication (SignalR, Firebase), secure payments (Stripe), and optimized data handling.
//               <br /><br />
//               From building admin dashboards to developing intelligent AI-powered platforms and web scrapers with Selenium/Playwright, I always aim for performance, security, and user-friendly design.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
