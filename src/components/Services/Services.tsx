import "./services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          I offer end-to-end development solutions for businesses and startups—from scalable APIs to intelligent automation systems.
          With expertise in .NET Core, React, Python, Flutter, and AI, I bring ideas to life through modern technology stacks.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-code-slash" /></div>
              <div>
                <h4>Full Stack Development</h4>
                <p>End-to-end applications using .NET Core, Django, Flask, React, TypeScript and SQL/NoSQL databases.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-lightning-charge-fill" /></div>
              <div>
                <h4>Real-Time Systems</h4>
                <p>SignalR and WebSockets based dashboards, live communication apps and collaborative platforms.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-diagram-3-fill" /></div>
              <div>
                <h4>API Design & Integration</h4>
                <p>Secure REST & GraphQL APIs with third-party integrations using C#, Python and Node.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-cpu-fill" /></div>
              <div>
                <h4>AI & Automation</h4>
                <p>OpenAI powered systems, LangChain workflows and Python automation tools.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-hdd-network-fill" /></div>
              <div>
                <h4>Backend Development</h4>
                <p>Scalable mobile & web backends with authentication, real-time updates and secure APIs.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-palette-fill" /></div>
              <div>
                <h4>UI/UX & Dashboards</h4>
                <p>Modern admin panels and responsive frontend using React, Bootstrap & Tailwind.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-window-desktop" /></div>
              <div>
                <h4>Portfolio Websites</h4>
                <p>Professional portfolio websites with clean UI, contact forms and image galleries.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="service-item d-flex">
              <div className="icon"><i className="bi bi-database-fill" /></div>
              <div>
                <h4>Database Development</h4>
                <p>SQL & NoSQL schema design, query optimization and scalable database systems.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


// export default function Services() {
//   return (
//     <section id="services" className="services section" style={{/* backgroundImage: 'url("assets/img/bg5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', */
//      backgroundColor: 'black', color: 'white'}}>
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2 style={{color: 'white'}}>Services</h2>
//         <p>I offer end-to-end development solutions for businesses and startups—from scalable APIs to intelligent automation systems. With expertise in .NET Core, React, Python, Flutter, and AI, I bring ideas to life through modern technology stacks.</p>
//       </div>{/* End Section Title */}
//       <div className="container">
//         <div className="row gy-4">
//           {/* Full-Stack Web Development */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
//             <div className="icon flex-shrink-0"><i className="bi bi-code-slash" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-webdev.html" className="stretched-link">Full-Stack Development</a></h4>
//               <p className="description">End-to-end web application development using .NET Core, Python, DJango, Flask, React, TypeScript, and SQL/NoSQL databases. I build scalable, secure, and maintainable solutions tailored to your business needs.</p>
//             </div>
//           </div>
//           {/* Real-Time System Integration */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
//             <div className="icon flex-shrink-0"><i className="bi bi-lightning-charge-fill" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-realtime.html" className="stretched-link">Real-Time Systems</a></h4>
//               <p className="description">Leverage SignalR, WebSockets, and background services to build real-time dashboards, collaborative apps, and live communication features across devices.</p>
//             </div>
//           </div>
//           {/* API Design & Integration */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={300}>
//             <div className="icon flex-shrink-0"><i className="bi bi-diagram-3-fill" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-api.html" className="stretched-link">API Design &amp; Integration</a></h4>
//               <p className="description">I specialize in building secure RESTful and GraphQL APIs, third-party service integrations, and scalable backend architectures using C#, Python, and Node.js.</p>
//             </div>
//           </div>
//           {/* AI & Automation Solutions */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={400}>
//             <div className="icon flex-shrink-0"><i className="bi bi-cpu-fill" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-ai.html" className="stretched-link">AI &amp; Automation</a></h4>
//               <p className="description">Custom AI solutions using OpenAI, LangChain, and Python for tasks like resume parsing, location recommendation, and chat automation. I build intelligent tools that save time and boost efficiency.</p>
//             </div>
//           </div>
//           {/* Mobile App Backend Development */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={500}>
//             <div className="icon flex-shrink-0"><i className="bi bi-hdd-network-fill" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-backend-mobile.html" className="stretched-link">Backend Development</a></h4>
//               <p className="description">I specialize in building robust, secure, and scalable backend systems for mobile apps using .NET Core, Python, DJango, Flask. My services include API development, user authentication, real-time updates (SignalR/WebSockets), and database integration.</p>
//             </div>
//           </div>
//           {/* UI/UX and Dashboard Design */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
//             <div className="icon flex-shrink-0"><i className="bi bi-palette-fill" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-uiux.html" className="stretched-link">UI/UX &amp; Admin Dashboards</a></h4>
//               <p className="description">Modern, responsive interfaces with React, Bootstrap, and Tailwind CSS. I design intuitive dashboards for managing complex systems with ease.</p>
//             </div>
//           </div>
//           {/* Portfolio Website Development */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
//             <div className="icon flex-shrink-0"><i className="bi bi-window-desktop" /></div>
//             <div>
//               <h4 className="title"><a href="service-details-portfolio.html" className="stretched-link">Portfolio Website</a></h4>
//               <p className="description">Custom-designed, responsive portfolio websites to showcase personal or business profiles. Built with clean UI, contact forms, image galleries, and modern frontend technologies.</p>
//             </div>
//           </div>
//           {/* Database Development (SQL & NoSQL) */}
//           <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
//             <div className="icon flex-shrink-0"><i className="bi bi-database-fill" /></div>
//             <div>
//               <h4 className="title">
//                 <a href="service-details-database.html" className="stretched-link">Database Development</a>
//               </h4>
//               <p className="description">
//                 Expert in designing and managing SQL &amp; NoSQL databases. I build optimized schemas, write efficient queries, and implement scalable solutions for high-performance applications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
