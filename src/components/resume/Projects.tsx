import { resumeData } from "@/data/resumeData";
import { ExternalLink } from "lucide-react";

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

  return (
    <section className="py-section border-b border-border">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10 animate-fade-in-up">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-card border border-border rounded-xl animate-fade-in-up print-break-avoid
              transition-all duration-300 ease-out
              hover:border-primary/40 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              <ExternalLink 
                size={18} 
                className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" 
              />
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground/70 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Outcome */}
            <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
              <p className="text-sm text-foreground/80">
                <span className="font-medium text-accent">Impact: </span>
                {project.outcome}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* EDIT: Add new project cards above this comment */}
    </section>
  );
};

export default Projects;
