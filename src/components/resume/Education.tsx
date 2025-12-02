import { resumeData } from "@/data/resumeData";

/**
 * <!-- SECTION: Education -->
 * Education and Certifications
 * EDIT: Update in src/data/resumeData.ts
 */
const Education = () => {
  const { education, certifications } = resumeData;

  return (
    <section className="py-section border-b border-border">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10 animate-fade-in-up">
        Education & Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div className="animate-fade-in-up delay-100">
          <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="print-break-avoid">
                <h4 className="text-lg font-serif font-medium text-foreground">
                  {edu.degree}
                </h4>
                <p className="text-base text-muted-foreground mb-1">
                  {edu.school} · {edu.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.year}
                  {edu.honors && ` · ${edu.honors}`}
                </p>
                {edu.note && (
                  <p className="text-sm text-foreground/70 mt-2">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up delay-200">
          <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-4 print-break-avoid"
              >
                <div>
                  <h4 className="text-base font-sans font-medium text-foreground">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDIT: Add education or certifications in resumeData.ts */}
    </section>
  );
};

export default Education;
