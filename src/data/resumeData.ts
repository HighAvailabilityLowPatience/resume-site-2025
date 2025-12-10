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
    title: "DevOps & Cloud Infrastructure Engineer | Technical Project Lead",
    intro: "Building automated, scalable systems — and leading the projects that deliver them. Passionate about cloud-native technologies, CI/CD pipelines, and helping teams ship faster with confidence.",
    location: "Charlotte, NC",
    yearsExperience: "8+",
    availability: "Open to Opportunities",
    clearance: "Active TS/SCI Clearance",
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
    website: "emmanueljohnson.xyz",
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
      name: "Distributed Telemetry + Inference Platform",
      description: "Built a distributed telemetry-collection system with ML inference: node-agents push resource-usage & textual payloads to a FastAPI backend, which runs a transformer-based sentiment + severity model locally, logs results, and surfaces aggregated network/mood health via a React UI.",
      tools: ["Python", "FastAPI", "Docker", "Docker Compose", "Hugging Face Transformers", "PyTorch", "SQLite (or local DB)", "React", "TypeScript", "Docker Agent"],
      outcome: "Enabled real-time telemetry ingestion + sentiment inference across multiple nodes; delivered a demo prototype with working /predict and /health endpoints, full containerization, and a UI for system health — demonstrating capability across infrastructure, ML, monitoring, and frontend stacks.",
      // EDIT: Add your project repo URL
      repoUrl: "https://github.com/HighAvailabilityLowPatience/inference-engine.git",
    },
    {
      name: "HALP – Hybrid Home Lab Platform",
      description: "Engineered a full enterprise-style home lab with virtualized infrastructure, Windows AD domain services, segmented VLAN networking, hybrid-cloud backups, and automated monitoring. Designed to mirror real-world DevOps, IT operations, and cloud integration workflows.",
      tools: ["Proxmox VE", "Windows Server + Active Directory", "TP-Link VLANs", "Docker & Docker Compose", "FastAPI", "Python", "Cron (Linux)", "Windows Task Scheduler", "AWS S3, EC2, CloudWatch, EventBridge", "Prometheus", "Grafana", "WireGuard VPN"],
      outcome: "Built a production-style environment including AD-backed authentication, VLAN-based isolation, automated backup pipelines, and observability across hypervisors, servers, and containers. The environment behaves like a trimmed-down corporate network, showcasing practical engineering depth and real operational skill.",
      repoUrl: "https://github.com/HighAvailabilityLowPatience/HALP.git",
    },
    {
      name: "Security Automation Framework",
      description: "Built an automated security scanning and compliance framework integrated into the CI/CD pipeline, catching vulnerabilities before production.",
      tools: ["Python", "Trivy", "SonarQube", "GitHub Actions"],
      outcome: "Reduced security vulnerabilities by 70% and achieved SOC 2 compliance.",
      repoUrl: "http://www.emmanueljohnson.xyz/",
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
      title: "Lead Systems Administrator (N6 COMMS DLPO)",
      company: "US Navy.",
      location: "Charleston, SC",
      startDate: "Nov 2022",
      endDate: "Present",
      current: true,
      bullets: [
        "Managed user accounts and permissions for 1,200+ personnel, enforcing proper access control and streamlining onboarding/offboarding to reduce setup time by 20%",
        "Implemented and maintained GPOs and system updates across all workstations and servers, ensuring compliance and network stability",
        "Oversaw classified and unclassified communication networks with 99.9% uptime, performing DHCP, DNS, VLAN configuration, and Layer 3 troubleshooting",
        "Trained and mentored junior personnel on system administration, troubleshooting, and security compliance, reducing incident resolution time by 30%",
      ],
    },
    {
      title: "Work Center Supervisor",
      company: "US Navy",
      location: "Honolulu, HI",
      startDate: "Jan 2021",
      endDate: "Nov 2022",
      current: false,
      bullets: [
        "Engineered and executed weekly preventative maintenance plans for critical navigation systems, increasing efficiency and ensuring equipment readiness",
        "Managed a 4,000-item maintenance program, coordinating corrective and periodic maintenance while optimizing workflow across the division",
        "Performed rigorous QA inspections on lockout/tagout procedures during weekly maintenance operations, strengthening safety and procedural accuracy",
        "Led the division’s QA SUBSAFE program, enforcing strict safety and compliance standards to protect mission-critical operations and personnel",
      ],
    },
    {
      title: "Electronics Technician",
      company: "US Navy",
      location: "Honolulu, HI",
      startDate: "Apr 2018",
      endDate: "Jan 2021",
      current: false,
      bullets: [
        "Performed 12,000+ hours of preventive and corrective maintenance on critical 688-class submarine systems, including CAMS, WRN-6 and ring-laser gyrocompasses, Interior Communications, tank level indicators, pressure switches, VMS, and BPS-15 radar",
        "Applied advanced troubleshooting methods to complex subsystem failures, improving component reliability and reducing repeat issues across multiple deployment cycles",
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
  ],
};
