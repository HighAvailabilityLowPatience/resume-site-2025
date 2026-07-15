import { resumeData } from "@/data/resumeData";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
/**
 * <!-- SECTION: Header -->
 * Contains name, title, intro, and Demo CTA button
 * EDIT: Update personal info in src/data/resumeData.ts
 */
const Header = () => {
  const { personal, contact } = resumeData;

  return (
    <header className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="portfolio-container hero-inner">
        <p className="hero-kicker">{personal.location} · {personal.clearance}</p>
        <h1>I automate failure <span className="gradient-text">before it becomes downtime</span>.</h1>
        <p className="hero-title">{personal.title}</p>
        <p className="hero-subtitle">{personal.intro}</p>
        <div className="hero-actions">
          <ResumeDownloadButton />
          <a href="/demo" className="btn btn-ghost"><Sparkles className="h-4 w-4" />View Demo</a>
          <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github className="h-4 w-4" />GitHub<ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="portfolio-container stat-strip">
        <div className="stat"><span className="stat-num">{personal.yearsExperience}</span><span className="stat-label">Years experience</span></div>
        <div className="stat"><span className="stat-num">TS/SCI</span><span className="stat-label">Active clearance</span></div>
        <div className="stat"><span className="stat-num">AWS</span><span className="stat-label">Cloud focus</span></div>
        <div className="stat"><span className="stat-num">Open</span><span className="stat-label">{personal.availability}</span></div>
      </div>
    </header>
  );
};

export default Header;
