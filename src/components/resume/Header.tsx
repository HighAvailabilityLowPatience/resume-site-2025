import { resumeData } from "@/data/resumeData";
import { Download } from "lucide-react";

/**
 * <!-- SECTION: Header -->
 * Contains name, title, intro, and Download PDF button
 * EDIT: Update personal info in src/data/resumeData.ts
 */
const Header = () => {
  const { personal } = resumeData;

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="relative pb-section-sm border-b border-border">
      {/* Download PDF Button - Top Right */}
      <button
        onClick={handleDownloadPDF}
        className="no-print absolute right-0 top-0 flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-md transition-all duration-300 hover:text-foreground hover:border-foreground hover:bg-secondary/50"
        aria-label="Download PDF"
      >
        <Download size={16} />
        <span>Download PDF</span>
      </button>

      {/* Main Header Content */}
      <div className="animate-fade-in-up">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-foreground mb-4">
          {personal.name}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light mb-6">
          {personal.title}
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6 animate-fade-in delay-200">
          <span>{personal.location}</span>
          <span className="hidden sm:inline">•</span>
          <span>{personal.yearsExperience} Years Experience</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-foreground font-medium">{personal.availability}</span>
        </div>

        {/* Intro */}
        <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed animate-fade-in delay-300">
          {personal.intro}
        </p>
      </div>
    </header>
  );
};

export default Header;
