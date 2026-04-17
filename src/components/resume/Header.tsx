import { resumeData } from "@/data/resumeData";
import { Sparkles } from "lucide-react";

/**
 * <!-- SECTION: Header -->
 * Contains name, title, intro, and Demo CTA button
 * EDIT: Update personal info in src/data/resumeData.ts
 */
const Header = () => {
  const { personal } = resumeData;

  return (
    <header className="relative pb-section-sm border-b border-border">
      {/* Demo Button - Top Right with attention-grabbing animation */}
      <a
        href="#projects"
        className="group absolute top-0 right-0 print:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 animate-pulse-glow"
      >
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping-slow opacity-75" aria-hidden="true" />
        <Sparkles className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
        <span className="relative z-10">View Demo</span>
      </a>

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
