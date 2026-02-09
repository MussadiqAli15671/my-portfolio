import "./resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Full Stack Developer (AI) specializing in .NET Core, Python, ML, NLP and React with experience building scalable enterprise solutions and cloud-integrated applications.
        </p>
      </div>

      <div className="container">
        <div className="row">

          {/* ================= EDUCATION ================= */}

          <div className="col-lg-12" data-aos="fade-up">

            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>BS in Computer Science</h4>
              <h5>Gold Medalist 🏅 – CGPA 3.95 / 4.00</h5>
              <h5>2020 – 2024</h5>
              <p><em>National University of Modern Languages (NUML), Islamabad</em></p>
              <p>
                Completed core CS courses in Data Structures, Algorithms, Software Engineering,
                and Artificial Intelligence. Developed multiple academic and industry-grade software projects.
              </p>
            </div>


          </div>

          {/* ================= EXPERIENCE ================= */}

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="150">

            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>Sep 2024 – Sep 2025</h5>
              <p><em>ASM Wiz LLC – Houstan Texas USA </em></p>

              <ul>
                <li>Developed enterprise-grade applications across energy, education, and service domains using .NET Core, SQL Server, and React/Redux.</li>
                <li>Led backend architecture design, API development, and CI/CD pipelines using Azure DevOps.</li>
                <li>Customized Microsoft Dynamics 365 Dataverse modules and integrated secure third-party services (Stripe, Backblaze).</li>
                <li>Implemented Power Apps Flows and automated background jobs for business workflows and process integrations.</li>
                <li>Applied performance optimization and data security standards across multiple projects.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full Stack Engineer</h4>
              <h5>Jun 2022 – Jun 2023</h5>
              <p><em>GrowUp Tech Solutions – NIC Islamabad</em></p>

              <ul>
                <li>Worked on full-stack development using React.js (frontend) and Python (backend) with Firebase integration.</li>
                <li>Built real-time web scraping tools and data dashboards using Tornado, Playwright, and Selenium.</li>
                <li>Delivered user-centric applications for retail and education clients under rapid development cycles.</li>
                <li>Collaborated closely with UI/UX teams to produce responsive, scalable products.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}



// export default function Resume() {
//   return (
//     <section id="resume" className="resume section" style={{/* backgroundImage: 'url("assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
//   backgroundColor: 'black'}}>
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2 style={{color: 'white'}}>Resume</h2>
//         <p style={{color: 'white'}}>
//           A dedicated Full Stack Developer with hands-on experience in building scalable web and mobile backend systems using .NET Core, Python, and React. I've contributed to AI-driven platforms, enterprise solutions, and cloud-integrated apps. Below is a summary of my professional journey, education, and technical skillset.
//         </p>
//       </div>{/* End Section Title */}
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12" data-aos="fade-up" data-aos-delay={100}>
//             <h3 className="resume-title" style={{color: 'white'}}>Sumary</h3>
//             {/* <div class="resume-item pb-0">
//         <h4>Brandon Johnson</h4>
//         <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
//         <ul>
//           <li>Portland par 127,Orlando, FL</li>
//           <li>(123) 456-7891</li>
//           <li>alice.barkley@example.com</li>
//         </ul>
//       </div> */}
//             {/* Edn Resume Item */}
//             <h3 className="resume-title" style={{color: 'white'}}>Education</h3>
//             <div className="resume-item" style={{color: 'white'}}>
//               <h4 style={{color: 'white'}}>BS in Computer Science</h4>
//               <h5 style={{color: 'white'}}>CGPA - 3.95</h5>
//               <h5 style={{color: 'white'}}>2020 - 2024</h5>
//               <p><em>National University of Modern Languages (NUML), Islamabad</em></p>
//               <p>Completed core CS courses in Data Structures, Algorithms, Software Engineering, and Artificial Intelligence. Developed multiple academic and industry-grade software projects.</p>
//             </div>
//             {/* Edn Resume Item */}
//             {/* <div class="resume-item">
//         <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
//         <h5>2010 - 2014</h5>
//         <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
//         <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
//       </div> */}
//             {/* Edn Resume Item */}
//           </div>
//           <div className="col-lg-12" data-aos="fade-up" data-aos-delay={200}>
//             <h3 className="resume-title" style={{color: 'white'}}>Professional Experience</h3>
//             <div className="resume-item">
//               <h4 style={{color: 'white'}}>Full Stack Developer</h4>
//               <h5 style={{color: 'white'}}>Sep 2024 – Sep 2025</h5>
//               <p style={{color: 'white'}}><em>ASM Wiz LLC</em></p>
//               <ul style={{color: 'white'}}>
//                 <li>Developed enterprise-grade applications across energy, education, and service domains using .NET Core, SQL Server, and React/Redux.</li>
//                 <li>Led backend architecture design, API development, and CI/CD pipelines using Azure DevOps.</li>
//                 <li>Customized Microsoft Dynamics 365 Dataverse modules and integrated secure third-party services (Stripe, Backblaze).</li>
//                 <li>Implemented Power Apps Flows and automated background jobs for business workflows and process integrations.</li>
//                 <li>Implemented performance optimizations and data security standards across multiple projects.</li>
//               </ul>
//             </div>{/* Edn Resume Item */}
//             <div className="resume-item">
//               <h4 style={{color: 'white'}}>Full Stack Engineer</h4>
//               <h5 style={{color: 'white'}}>Jun 2022 – Jun 2023</h5>
//               <p style={{color: 'white'}}><em>GrowUp Tech Solutions, NIC Islamabad</em></p>
//               <ul style={{color: 'white'}}>
//                 <li>Worked on full-stack development using React.js (frontend) and Python (backend) with Firebase integration.</li>
//                 <li>Built real-time web scraping tools and data dashboards using Tornado, Playwright, and Selenium.</li>
//                 <li>Developed user-centric applications for clients in retail and education sectors with fast delivery cycles.</li>
//                 <li>Collaborated with UI/UX designers to turn concepts into responsive, scalable applications.</li>
//               </ul>
//             </div>{/* End Resume Item */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
