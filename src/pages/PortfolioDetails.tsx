import { useParams, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { projectsData } from "../data/projects";

export default function PortfolioDetails() {
  const { id } = useParams<{ id: string }>();
//   const { t } = useTranslation();

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <main className="main">
        <section className="section">
          <div className="container">
            <div className="text-center">
              <h2>Project Not Found</h2>
              <p>The project you're looking for doesn't exist.</p>
              <Link to="/" className="btn btn-primary">
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Mussadiq Ali</title>
        <meta
          name="description"
          content={project.description}
        />
        <meta
          name="keywords"
          content={`${project.title}, ${project.technologies}, Portfolio Project`}
        />
        <link
          rel="canonical"
          href={`https://mussadiq-ali-portfolio.vercel.app/projects/${project.id}`}
        />
      </Helmet>

      <main className="main">
        <section className="section mt-5">
          <div className="container">
            {/* Back Button */}
            <div className="mb-4">
              <Link to="/projects" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Projects
              </Link>
            </div>

            {/* Project Header */}
            <div className="row mb-5">
              <div className="col-lg-8">
                <h1 className="mb-3">{project.title}</h1>
                <p className="lead mb-4">{project.description}</p>

                <div className="mb-4">
                  <h5>Technologies Used:</h5>
                  <p className="text-muted">{project.technologies}</p>
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    <i className="bi bi-eye me-2"></i>
                    View Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    <i className="bi bi-github me-2"></i>
                    View Code
                  </a>
                )}
              </div>

              <div className="col-lg-4">
                {!project.noImage && (
                  <img
                    src={`/assets/img/${project.image}`}
                    alt={project.title}
                    className="img-fluid rounded shadow"
                  />
                )}
              </div>
            </div>

            {/* Project Features */}
            {/* <div className="row mb-5">
              <div className="col-12">
                <h3 className="mb-4">Key Features</h3>
                <div className="row">
                  {project.features.map((feature, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-3"></i>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Challenges and Results */}
            {/* {(project.challenges || project.results) && (
              <div className="row">
                {project.challenges && (
                  <div className="col-lg-6 mb-4">
                    <h4 className="mb-3">Challenges</h4>
                    <p className="text-muted">{project.challenges}</p>
                  </div>
                )}

                {project.results && (
                  <div className="col-lg-6 mb-4">
                    <h4 className="mb-3">Results</h4>
                    <p className="text-muted">{project.results}</p>
                  </div>
                )}
              </div>
            )} */}
          </div>
        </section>
      </main>
    </>
  );
}