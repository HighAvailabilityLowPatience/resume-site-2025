import { resumeData } from "@/data/resumeData";

/**
 * <!-- SECTION: Projects -->
 * Project showcase with animated cards
 * EDIT: Add new projects in src/data/resumeData.ts
 * 
 * To add a new project, copy this structure to resumeData.ts:
 * {
 *   name: "Project Name",
 *   description: "Short description of the project",
 *   tools: ["Tool1", "Tool2", "Tool3"],
 *   outcome: "Key outcome or impact",
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
          <article
            key={project.name}
            className="group p-6 bg-card border border-border rounded-lg hover-lift animate-fade-in-up print-break-avoid"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            {/* Project Name */}
            <h3 className="text-xl font-serif font-medium text-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-200">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Outcome */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-foreground/80">
                <span className="font-medium text-foreground">Impact: </span>
                {project.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* EDIT: Add new project cards above this comment */}
    </section>
  );
};

export default Projects;
