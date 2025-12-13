import Header from "@/components/resume/Header";
import Skills from "@/components/resume/Skills";
import Projects from "@/components/resume/Projects";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Contact from "@/components/resume/Contact";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Main Container */}
      <main className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20">
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
    </div>
  );
};

export default Index;
