import { resumeData } from "@/data/resumeData";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

/**
 * <!-- SECTION: Contact -->
 * Contact information and links
 * EDIT: Update contact info in src/data/resumeData.ts
 */
const Contact = () => {
  const { contact, personal } = resumeData;

  const contactLinks = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: contact.github,
      href: `https://${contact.github}`,
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: contact.linkedin,
      href: `https://${contact.linkedin}`,
      icon: Linkedin,
    },
    {
      label: "Website",
      value: contact.website,
      href: `https://${contact.website}`,
      icon: Globe,
    },
  ];

  return (
    <section className="py-section">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-10 animate-fade-in-up">
        Get in Touch
      </h2>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            className="group flex flex-col gap-2 p-4 border border-border rounded-lg transition-all duration-300 hover:border-foreground hover:bg-secondary/30 animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <link.icon
              size={20}
              className="text-muted-foreground group-hover:text-foreground transition-colors duration-200"
            />
            <span className="text-xs font-sans uppercase tracking-wider text-muted-foreground">
              {link.label}
            </span>
            <span className="text-sm text-foreground group-hover:text-foreground/80 transition-colors duration-200 break-all">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-center text-sm text-muted-foreground animate-fade-in delay-500">
        Looking forward to connecting with you.
      </p>
    </section>
  );
};

export default Contact;
