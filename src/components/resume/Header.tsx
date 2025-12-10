import { resumeData } from "@/data/resumeData";
import { Download } from "lucide-react";

/**
 * <!-- SECTION: Header -->
 * Contains name, title, intro, headshot, and Download PDF button
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
        className="no-print absolute right-0 top-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
        aria-label="Download PDF"
      >
        <Download size={16} />
        <span>Download PDF</span>
      </button>

      {/* Main Header Content */}
      <div className="animate-fade-in-up pr-0 md:pr-40">
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
          <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">
            {personal.availability}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium text-foreground">
            {personal.clearance}
          </span>
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
