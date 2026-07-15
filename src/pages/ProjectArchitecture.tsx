import { architectureProjects, getArchitectureProject } from "@/data/projectArchitecture";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const ProjectArchitecture = () => {
  const { slug } = useParams();
  const project = getArchitectureProject(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground architecture-page">
      <div className="portfolio-backdrop" aria-hidden="true" />
      <header className="site-nav print:hidden">
        <div className="portfolio-container nav-inner">
          <Link to="/" className="wordmark">Emmanuel Johnson</Link>
          <nav className="nav-links" aria-label="Architecture navigation">
            <Link to="/#projects">Projects</Link>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo</a>
          </nav>
        </div>
      </header>

      <main className="architecture-main">
        <section className="portfolio-container architecture-hero">
          <Link to="/#projects" className="back-link">
            <ArrowLeft size={16} />
            Back to selected work
          </Link>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </section>

        <section className="portfolio-container architecture-layout">
          <div className="architecture-diagram" aria-label={`${project.title} architecture diagram`}>
            <div className="diagram-nodes">
              {project.nodes.map((node) => (
                <article key={node.id} className={`diagram-node tone-${node.tone ?? "blue"}`}>
                  <span>{node.label}</span>
                  <p>{node.detail}</p>
                </article>
              ))}
            </div>
            <div className="diagram-flows">
              {project.flows.map((flow) => (
                <div key={`${flow.from}-${flow.to}`} className="diagram-flow">
                  <strong>{project.nodes.find((node) => node.id === flow.from)?.label}</strong>
                  <span>{flow.label}</span>
                  <strong>{project.nodes.find((node) => node.id === flow.to)?.label}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="architecture-notes">
            <h2>How to read it</h2>
            {project.explanation.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
            <a className="btn btn-primary architecture-repo-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View source repo
              <ExternalLink size={16} />
            </a>
          </aside>
        </section>

        <section className="portfolio-container evidence-section">
          <div className="section-head section-head-left">
            <p className="eyebrow">Source Evidence</p>
            <h2>What this page was built from.</h2>
          </div>
          <div className="evidence-grid">
            {project.sourceEvidence.map((item) => (
              <div className="evidence-card" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="portfolio-container related-projects">
          <p className="eyebrow">More Diagrams</p>
          <div className="related-grid">
            {architectureProjects
              .filter((item) => item.slug !== project.slug)
              .map((item) => (
                <Link key={item.slug} to={`/projects/${item.slug}`} className="related-card">
                  <span>{item.title}</span>
                  <p>{item.eyebrow}</p>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectArchitecture;
