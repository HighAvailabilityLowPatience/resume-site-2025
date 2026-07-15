import Header from "@/components/resume/Header";
import Skills from "@/components/resume/Skills";
import Projects from "@/components/resume/Projects";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Contact from "@/components/resume/Contact";
import HelixChatbot from "@/components/HelixChatbot";
import { resumeData } from "@/data/resumeData";
import type { MouseEvent } from "react";
/**
 * RESUME PAGE
 * ===========
 * Single-page resume website with premium design
 * 
 * SECTION ORDER:
 * 1. Header (Name, Title, Intro, Download Button)
 * 2. Skills / Tech Proficiencies
 * 3. Projects (High Priority)
 * 4. Experience
 * 5. Education & Certifications
 * 6. Contact
 * 
 * TO UPDATE CONTENT: Edit src/data/resumeData.ts
 */
const Index = () => {
  const { personal, contact } = resumeData;
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const x = `${event.clientX}px`;
    const y = `${event.clientY}px`;
    event.currentTarget.style.setProperty("--mouse-x", x);
    event.currentTarget.style.setProperty("--mouse-y", y);
  };

  return (
    <div className="min-h-screen bg-background text-foreground interactive-stage" onMouseMove={handleMouseMove}>
      <div className="portfolio-backdrop" aria-hidden="true" />
      <div className="mouse-orbit" aria-hidden="true">
        <span />
        <span />
      </div>
      <header className="site-nav print:hidden">
        <div className="portfolio-container nav-inner">
          <a href="#top" className="wordmark">{personal.name}</a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>
      <main id="top">
        {/* <!-- SECTION: Header --> */}
        <Header />

        {/* <!-- SECTION: Experience --> */}
        <Experience />

        {/* <!-- SECTION: Projects --> */}
        <Projects />

        {/* <!-- SECTION: Skills --> */}
        <Skills />

        {/* <!-- SECTION: Education --> */}
        <Education />

        {/* <!-- SECTION: Contact --> */}
        <Contact />
      </main>
      <footer className="portfolio-footer">
        <div className="portfolio-container footer-inner">
          <p>© {new Date().getFullYear()} {personal.name}</p>
          <a href={`mailto:${contact.email}`}>Let's connect</a>
        </div>
      </footer>
      {/* Helix AI Assistant */}
      <HelixChatbot />
    </div>
  );
};

export default Index;
