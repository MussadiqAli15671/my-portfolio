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