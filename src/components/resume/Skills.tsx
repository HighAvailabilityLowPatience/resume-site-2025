import { resumeData } from "@/data/resumeData";

/**
 * <!-- SECTION: Skills -->
 * Tech Proficiencies organized by category
 * EDIT: Update skills in src/data/resumeData.ts
 */
const Skills = () => {
  const { skills } = resumeData;

  const skillCategories = [
    { title: "Cloud Platforms", items: skills.cloud },
    { title: "Tools", items: skills.devops },
    { title: "Scripting & Configuration", items: skills.scripting },
    { title: "Systems & Infrastructure", items: skills.systems },
  ];

  return (
    <section className="py-section border-b border-border">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10 animate-fade-in-up">
        Proficiencies
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className={`animate-fade-in-up delay-${(categoryIndex + 1) * 100}`}
            style={{ animationDelay: `${(categoryIndex + 1) * 0.1}s` }}
          >
            {/* Category Title */}
            <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              {category.title}
            </h3>

            {/* Skills List */}
            <ul className="space-y-2">
              {category.items.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-foreground/90 text-base transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
