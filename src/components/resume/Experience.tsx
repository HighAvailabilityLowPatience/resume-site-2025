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
    <section id="experience" className="portfolio-section experience-section">
      <div className="portfolio-container">
        <div className="section-head section-head-left">
          <p className="eyebrow">Experience</p>
          <h2>Operations, systems, and software delivery.</h2>
          <p className="section-lede">A career path built around dependable systems, accountable ownership, and practical automation.</p>
        </div>
      <div className="timeline">
        {experience.map((job, index) => (
          <article
            key={`${job.company}-${job.startDate}`}
            className="timeline-item print-break-avoid"
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="job-heading">
              <div>
                <h3>{job.title}</h3>
                <p>{job.company} · {job.location}</p>
              </div>
              <span className="job-dates">
                {job.startDate} — {job.endDate}
                {job.current && <span className="current-pill">Current</span>}
              </span>
            </div>

            <ul className="job-bullets">
              {job.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;
