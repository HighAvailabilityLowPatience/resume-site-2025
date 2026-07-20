import { resumeData } from "@/data/resumeData";
import { ExternalLink, Network, Play } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * <!-- SECTION: Projects -->
 * Project showcase with animated cards and repo links
 * EDIT: Add new projects in src/data/resumeData.ts
 * 
 * To add a new project, copy this structure to resumeData.ts:
 * {
 *   name: "Project Name",
 *   description: "Short description of the project",
 *   tools: ["Tool1", "Tool2", "Tool3"],
 *   outcome: "Key outcome or impact",
 *   repoUrl: "https://github.com/username/repo",
 * }
 */
const Projects = () => {
  const { projects } = resumeData;
  const accents = ["blue", "violet", "cyan", "amber"];

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="portfolio-container">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Platforms, automation, and infrastructure with working outcomes.</h2>
          <p className="section-lede">A mix of AI systems, DevOps automation, cloud infrastructure, and home-lab operations.</p>
        </div>
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`project-showcase ${index % 2 ? "project-reverse" : ""} ${"featured" in project && project.featured ? "project-featured" : ""} accent-${accents[index % accents.length]}`}
          >
            <div className="project-visual">
              {"imageUrl" in project && project.imageUrl ? (
                <img src={project.imageUrl} alt={`${project.name} architecture preview`} className="project-preview-image" />
              ) : (
                <div className="terminal-preview" aria-hidden="true">
                  <div className="terminal-preview-bar"><span /><span /><span /></div>
                  <div className="terminal-preview-body">
                    <p>$ deploy {project.name.toLowerCase().replace(/\s+/g, "-")}</p>
                    <p className="muted">checking health endpoints...</p>
                    <p className="success">status: operational</p>
                    <p className="muted">tooling: {project.tools.slice(0, 3).join(" · ")}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="project-copy">
              <p className="eyebrow">{"featured" in project && project.featured ? "Featured Build" : "DevOps · Case Study"}</p>
              <h3>{project.name}</h3>
              <p className="project-lede">{project.description}</p>
              <div className="project-impact"><strong>Impact</strong><p>{project.outcome}</p></div>
              <div className="tag-row">{project.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}</div>
              <div className="project-actions">
                {project.repoUrl && (
                  <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">View repository <ExternalLink size={15} /></a>
                )}
                {"demoUrl" in project && project.demoUrl && (
                  <a className="demo-chip" href={project.demoUrl}>
                    <Play size={13} />
                    Demo
                  </a>
                )}
                {"architectureUrl" in project && project.architectureUrl && (
                  <Link className="demo-chip architecture-chip" to={project.architectureUrl}>
                    <Network size={13} />
                    Architecture
                  </Link>
                )}
                {"featured" in project && project.featured && !project.demoUrl && (
                  <span className="demo-chip demo-chip-muted">
                    <Play size={13} />
                    Demo link pending
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
