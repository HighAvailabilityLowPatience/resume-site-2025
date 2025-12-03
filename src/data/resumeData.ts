/**
 * RESUME DATA FILE
 * ================
 * Edit this file to update all resume content.
 * Changes here will automatically reflect throughout the site.
 */

export const resumeData = {
  // =====================================================
  // EDIT: Personal Information
  // =====================================================
  personal: {
    name: "Emmanuel Johnson",
    title: "System Adminstrator/Junior Devops Engineer/Technical Project Manager",
    intro: "TS/TSCI Cleared Professional building resilient infrastructure and automating processes. Passionate about cloud-native technologies, CI/CD pipelines, and helping teams ship faster with confidence.",
    location: "Charlotte, NC",
    yearsExperience: "8+",
    availability: "Open to Opportunities",
    Clearance: "Active TS/SCI Clearance",
    // EDIT: Replace with your photo URL or leave empty for initials fallback
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },

  // =====================================================
  // EDIT: Contact Information
  // =====================================================
  contact: {
    email: "Emmanueljohnso1998@gmail.com",
    github: "https://github.com/HighAvailabilityLowPatience",
    linkedin: "https://www.linkedin.com/in/emmanuel-johnsonn-a45826240/",
    website: "emmanueljohnson.tech",
  },

  // =====================================================
  // EDIT: Skills / Tech Proficiencies
  // Add or remove items from each category as needed
  // =====================================================
  skills: {
    cloud: [
      "AWS (EC2, EKS, Lambda, S3, RDS)",
    ],
    devops: [
      "Docker & Containerization",
      "Terraform & Infrastructure as Code",
      "Ansible & Configuration Management",
      "Jenkins, GitLab CI, GitHub Actions (CI/CD)",
      "ArgoCD & GitOps",
    ],
    scripting: [
      "Python",
      "Bash / Shell Scripting",
      "YAML / JSON",
    ],
    systems: [
      "Linux Administration (Ubuntu, CentOS, RHEL)",
      "Networking (TCP/IP, DNS, Load Balancing)",
      "Security (IAM, Secrets Management, SSL/TLS)",
      "Monitoring (Prometheus, Grafana, Datadog)",
    ],
  },

  // =====================================================
  // EDIT: Projects
  // Add new projects by copying the object structure below
  // =====================================================
  projects: [
    {
      name: "Cloud Migration Platform",
      description: "Led the migration of 50+ microservices from on-premise data centers to AWS, implementing Infrastructure as Code and reducing deployment time by 80%.",
      tools: ["AWS", "Terraform", "Kubernetes", "Jenkins"],
      outcome: "Reduced infrastructure costs by 40% and improved deployment frequency from monthly to daily.",
      // EDIT: Add your project repo URL
      repoUrl: "https://github.com/alexmorgan/cloud-migration",
    },
    {
      name: "Zero-Downtime Deployment Pipeline",
      description: "Architected and implemented a blue-green deployment strategy with automated rollback capabilities for a high-traffic e-commerce platform.",
      tools: ["GitLab CI", "ArgoCD", "Kubernetes", "Helm"],
      outcome: "Achieved 99.99% uptime and eliminated deployment-related incidents.",
      repoUrl: "https://github.com/alexmorgan/zero-downtime-deploy",
    },
    {
      name: "Security Automation Framework",
      description: "Built an automated security scanning and compliance framework integrated into the CI/CD pipeline, catching vulnerabilities before production.",
      tools: ["Python", "Trivy", "SonarQube", "GitHub Actions"],
      outcome: "Reduced security vulnerabilities by 70% and achieved SOC 2 compliance.",
      repoUrl: "https://github.com/alexmorgan/security-automation",
    },
    {
      name: "Observability Stack Implementation",
      description: "Designed and deployed a comprehensive monitoring and alerting solution providing real-time insights across all production services.",
      tools: ["Prometheus", "Grafana", "Loki", "PagerDuty"],
      outcome: "Reduced mean time to detection (MTTD) from hours to minutes.",
      repoUrl: "https://github.com/alexmorgan/observability-stack",
    },
  ],

  // =====================================================
  // EDIT: Work Experience
  // Add new positions by copying the object structure below
  // =====================================================
  experience: [
    {
      title: "Lead Systems Administrator (N6 Communications DLPO)",
      company: "US Navy.",
      location: "Charleston, SC",
      startDate: "Nov 2022",
      endDate: "Present",
      current: true,
      bullets: [
        "Lead a team of 5 DevOps engineers managing infrastructure for 200+ microservices",
        "Architected multi-region Kubernetes clusters handling 10M+ daily requests",
        "Reduced cloud spending by 35% through optimization and reserved capacity planning",
        "Implemented GitOps workflows increasing deployment velocity by 300%",
      ],
    },
    {
      title: "Work Center Supervisor",
      company: "US Navy",
      location: "Charleston, SC",
      startDate: "Jan 2021",
      endDate: "Nov 2022",
      current: false,
      bullets: [
        "Designed and maintained CI/CD pipelines for 50+ development teams",
        "Led Docker and Kubernetes adoption across the engineering organization",
        "Automated infrastructure provisioning reducing setup time from days to hours",
        "Mentored junior engineers on DevOps best practices and cloud technologies",
      ],
    },
    {
      title: "Electronics Technician",
      company: "US Navy",
      location: "Charleston, SC",
      startDate: "Apr 2017",
      endDate: "Jan 2021",
      current: false,
      bullets: [
        "Managed Linux server infrastructure supporting 500+ internal users",
        "Implemented configuration management with Ansible and Puppet",
        "Designed backup and disaster recovery procedures achieving 99.9% data availability",
        "Automated routine tasks reducing manual intervention by 60%",
      ],
    },
  ],

  // =====================================================
  // EDIT: Education
  // =====================================================
  education: [
    {
      degree: "B.S. in Information Technology",
      school: "Western Governers University",
      location: "N/A",
      year: "Fall 2028",
    },
  ],

  // =====================================================
  // EDIT: Certifications
  // =====================================================
  certifications: [
    {
      name: "Security+",
      issuer: "Comp-Tia",
      year: "2024",
    },
    {
      name: "Technical Support Fundamentals",
      issuer: "Google",
      year: "2024",
    },
    {
      name: "Project Management Professional",
      issuer: "Project Managment Institute (PMI)",
      year: "Target 2026",
    },
    {
     // name: "Azure DevOps Engineer Expert",
     // issuer: "Microsoft",
    //  year: "2020",
    },
  ],
};
