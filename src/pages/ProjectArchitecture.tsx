import { architectureProjects, getArchitectureProject } from "@/data/projectArchitecture";
import { beaconCaseStudy } from "@/data/beaconCaseStudy";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const ProjectArchitecture = () => {
  const { slug } = useParams();
  const [activeDiagramId, setActiveDiagramId] = useState(beaconCaseStudy.diagrams[0].id);
  const activeDiagram = beaconCaseStudy.diagrams.find((diagram) => diagram.id === activeDiagramId) ?? beaconCaseStudy.diagrams[0];

  if (slug === beaconCaseStudy.slug) {
    return (
      <div className="min-h-screen bg-background text-foreground architecture-page beacon-page">
        <div className="portfolio-backdrop" aria-hidden="true" />
        <header className="site-nav print:hidden">
          <div className="portfolio-container nav-inner">
            <Link to="/" className="wordmark">Emmanuel Johnson</Link>
            <nav className="nav-links" aria-label="Beacon navigation">
              <Link to="/#projects">Projects</Link>
              {beaconCaseStudy.demoUrl && <a href={beaconCaseStudy.demoUrl}>Demo</a>}
            </nav>
          </div>
        </header>

        <main className="architecture-main">
          <section className="portfolio-container architecture-hero beacon-hero">
            <Link to="/#projects" className="back-link">
              <ArrowLeft size={16} />
              Back to selected work
            </Link>
            <p className="eyebrow">{beaconCaseStudy.eyebrow}</p>
            <h1>{beaconCaseStudy.title}</h1>
            <p>{beaconCaseStudy.summary}</p>
            <div className="tag-row beacon-stack">
              {beaconCaseStudy.stack.map((tool) => (
                <span key={tool} className="tag">{tool}</span>
              ))}
            </div>
            <div className="project-actions beacon-hero-actions">
              {beaconCaseStudy.demoUrl ? (
                <a className="btn btn-primary" href={beaconCaseStudy.demoUrl}>
                  <Play size={16} />
                  Live Demo
                </a>
              ) : (
                <span className="btn btn-ghost demo-chip-muted">
                  <Play size={16} />
                  Demo link pending
                </span>
              )}
              {beaconCaseStudy.repoUrl && (
                <a className="btn btn-ghost" href={beaconCaseStudy.repoUrl} target="_blank" rel="noopener noreferrer">
                  Source Repo
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </section>

          <section className="portfolio-container beacon-capability-grid">
            <article className="architecture-notes beacon-notes">
              <p className="eyebrow">Platform Capabilities</p>
              <h2>What Beacon can operate.</h2>
              <div className="beacon-point-list">
                {beaconCaseStudy.capabilities.map((capability) => (
                  <div key={capability}>{capability}</div>
                ))}
              </div>
            </article>
            <article className="architecture-notes beacon-notes">
              <p className="eyebrow">Example Workloads</p>
              <h2>What can run on top of it.</h2>
              <div className="beacon-point-list">
                {beaconCaseStudy.workloads.map((workload) => (
                  <div key={workload}>{workload}</div>
                ))}
              </div>
            </article>
          </section>

          <section className="portfolio-container beacon-diagram-shell">
            <div className="beacon-tabs" role="tablist" aria-label="Beacon architecture diagrams">
              {beaconCaseStudy.diagrams.map((diagram) => (
                <button
                  key={diagram.id}
                  type="button"
                  className={diagram.id === activeDiagram.id ? "active" : ""}
                  onClick={() => setActiveDiagramId(diagram.id)}
                >
                  {diagram.label}
                </button>
              ))}
            </div>

            <div className="beacon-diagram-layout">
              <figure className="beacon-image-panel">
                <img src={activeDiagram.image} alt={activeDiagram.title} />
              </figure>
              <aside className="architecture-notes beacon-notes">
                <p className="eyebrow">Diagram</p>
                <h2>{activeDiagram.title}</h2>
                <p>{activeDiagram.summary}</p>
                <div className="beacon-point-list">
                  {activeDiagram.points.map((point) => (
                    <div key={point}>{point}</div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="portfolio-container evidence-section beacon-evidence">
            <div className="section-head section-head-left">
              <p className="eyebrow">Source Evidence</p>
              <h2>What this page is grounded in.</h2>
            </div>
            <div className="evidence-grid">
              {beaconCaseStudy.sourceEvidence.map((item) => (
                <div className="evidence-card" key={item}>{item}</div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

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
