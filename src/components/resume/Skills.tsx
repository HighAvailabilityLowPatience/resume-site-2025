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
    { title: "Intelligent Systems", items: skills.intelligentSystems },
    { title: "Scripting & Configuration", items: skills.scripting },
    { title: "Systems & Infrastructure", items: skills.systems },
  ];

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="portfolio-container">
        <div className="section-head">
          <p className="eyebrow">The Stack</p>
          <h2>Tools I use to build and operate systems.</h2>
        </div>
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="skill-card">
            <h3><span></span>{category.title}</h3>
            <div className="tag-row">
              {category.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
