import { resumeData } from "@/data/resumeData";

/**
 * <!-- SECTION: Experience -->
 * Work experience timeline
 * EDIT: Modify job experience in src/data/resumeData.ts
 * 
 * To add a new position, copy this structure to resumeData.ts:
 * {
 *   title: "Job Title",
 *   company: "Company Name",
 *   location: "City, State",
 *   startDate: "2020",
 *   endDate: "Present",
 *   current: true,
 *   bullets: [
 *     "Achievement or responsibility 1",
 *     "Achievement or responsibility 2",
 *   ],
 * }
 */
const Experience = () => {
  const { experience } = resumeData;

  return (
    <section className="py-section border-b border-border">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10 animate-fade-in-up">
        Experience
      </h2>

      {/* Experience Timeline */}
      <div className="space-y-10">
        {experience.map((job, index) => (
          <article
            key={`${job.company}-${job.startDate}`}
            className="relative pl-0 md:pl-8 animate-fade-in-up print-break-avoid"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            {/* Timeline dot (hidden on mobile) */}
            <div className="hidden md:block absolute left-0 top-2 w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20" />

            {/* Job Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-xl font-serif font-medium text-foreground">
                  {job.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {job.company} · {job.location}
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-sans whitespace-nowrap">
                {job.startDate} — {job.endDate}
                {job.current && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded-full font-medium">
                    Current
                  </span>
                )}
              </span>
            </div>

            {/* Job Bullets */}
            <ul className="space-y-2 text-foreground/80">
              {job.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="relative pl-4 text-sm leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-muted-foreground/40 before:rounded-full"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* EDIT: Add new experience entries above this comment */}
    </section>
  );
};

export default Experience;
