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
    name: "Alex Morgan",
    title: "Senior DevOps Engineer",
    intro: "Building resilient infrastructure and automating everything. Passionate about cloud-native technologies, CI/CD pipelines, and helping teams ship faster with confidence.",
    location: "San Francisco, CA",
    yearsExperience: "8+",
    availability: "Open to Opportunities",
  },

  // =====================================================
  // EDIT: Contact Information
  // =====================================================
  contact: {
    email: "alex.morgan@email.com",
    github: "github.com/alexmorgan",
    linkedin: "linkedin.com/in/alexmorgan",
    website: "alexmorgan.dev",
  },

  // =====================================================
  // EDIT: Skills / Tech Proficiencies
  // Add or remove items from each category as needed
  // =====================================================
  skills: {
    cloud: [
      "AWS (EC2, EKS, Lambda, S3, RDS)",
      "Azure (AKS, Functions, DevOps)",
      "Google Cloud Platform (GKE, Cloud Run)",
      "Multi-cloud Architecture",
    ],
    devops: [
      "Docker & Containerization",
      "Kubernetes & Helm",
      "Terraform & Infrastructure as Code",
      "Ansible & Configuration Management",
      "Jenkins, GitLab CI, GitHub Actions",
      "ArgoCD & GitOps",
    ],
    scripting: [
      "Python",
      "Bash / Shell Scripting",
      "YAML / JSON",
      "Go (Golang)",
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
    },
    {
      name: "Zero-Downtime Deployment Pipeline",
      description: "Architected and implemented a blue-green deployment strategy with automated rollback capabilities for a high-traffic e-commerce platform.",
      tools: ["GitLab CI", "ArgoCD", "Kubernetes", "Helm"],
      outcome: "Achieved 99.99% uptime and eliminated deployment-related incidents.",
    },
    {
      name: "Security Automation Framework",
      description: "Built an automated security scanning and compliance framework integrated into the CI/CD pipeline, catching vulnerabilities before production.",
      tools: ["Python", "Trivy", "SonarQube", "GitHub Actions"],
      outcome: "Reduced security vulnerabilities by 70% and achieved SOC 2 compliance.",
    },
    {
      name: "Observability Stack Implementation",
      description: "Designed and deployed a comprehensive monitoring and alerting solution providing real-time insights across all production services.",
      tools: ["Prometheus", "Grafana", "Loki", "PagerDuty"],
      outcome: "Reduced mean time to detection (MTTD) from hours to minutes.",
    },
  ],

  // =====================================================
  // EDIT: Work Experience
  // Add new positions by copying the object structure below
  // =====================================================
  experience: [
    {
      title: "Senior DevOps Engineer",
      company: "TechScale Inc.",
      location: "San Francisco, CA",
      startDate: "2021",
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
      title: "DevOps Engineer",
      company: "CloudFirst Solutions",
      location: "Seattle, WA",
      startDate: "2018",
      endDate: "2021",
      current: false,
      bullets: [
        "Designed and maintained CI/CD pipelines for 50+ development teams",
        "Led Docker and Kubernetes adoption across the engineering organization",
        "Automated infrastructure provisioning reducing setup time from days to hours",
        "Mentored junior engineers on DevOps best practices and cloud technologies",
      ],
    },
    {
      title: "Systems Administrator",
      company: "DataCore Systems",
      location: "Portland, OR",
      startDate: "2016",
      endDate: "2018",
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
      degree: "B.S. in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      year: "2016",
      honors: "Cum Laude",
      note: "Focus on Distributed Systems and Network Security",
    },
  ],

  // =====================================================
  // EDIT: Certifications
  // =====================================================
  certifications: [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
    },
    {
      name: "HashiCorp Certified Terraform Associate",
      issuer: "HashiCorp",
      year: "2021",
    },
    {
      name: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      year: "2020",
    },
  ],
};
