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
    <section id="contact" className="portfolio-section contact-section">
      <div className="portfolio-container">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something reliable.</h2>
        <p className="section-lede">
          {personal.availability}. Reach out for DevOps, cloud infrastructure, automation, or technical leadership conversations.
        </p>
      <div className="contact-grid">
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            className="contact-link"
          >
            <link.icon size={20} />
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
