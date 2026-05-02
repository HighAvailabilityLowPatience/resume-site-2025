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
    location: "Reston, VA",
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
    github: "github.com/HighAvailabilityLowPatience",
    linkedin: "www.linkedin.com/in/emmanuel-johnso/",
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
    ],
    scripting: [
      "Python",
      "Bash / Shell Scripting",
      "YAML / JSON",
      "HTML",
      "CSS",
      "Javascript (Node.js, Express, React)",
    ],
    systems: [
      "Windows Server & Active Directory (Domains, Group Policy)",
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
    name: "Self-Healing Infrastructure System",
    description: "Designed and implemented a self-healing infrastructure platform with automated monitoring, failure detection, and recovery mechanisms.",
    tools: ["Jenkins", "Bash", "Docker", "Linux", "ntfy", "HTTP health checks"],
    outcome: "Built an automated recovery system capable of detecting service failures via health endpoints and restoring infrastructure using scripted remediation. Demonstrated full failure lifecycle including failure injection, detection, alerting, and recovery with real-time notifications.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/devops-self-healing-infra.git",
  },
  {
    name: "CI/CD Pipeline Automation",
    description: "Built an end-to-end CI/CD pipeline using GitHub Actions to automate application build, containerization, and deployment workflows.",
    tools: ["GitHub Actions", "Docker", "DockerHub", "SSH", "Linux"],
    outcome: "Implemented automated workflow from code commit to deployment, including linting, container builds, image versioning, and remote server deployment. Enabled continuous deployment and eliminated manual deployment steps.",
    repoUrl: " https://github.com/HighAvailabilityLowPatience/devops-cicd-github-actions-docker.git",
  },
  {
    name: "Infrastructure as Code Cloud Deployment",
    description: "Provisioned and configured AWS infrastructure using Terraform and Ansible to support containerized application deployment.",
    tools: ["AWS EC2", "Terraform", "Ansible", "Docker"],
    outcome: "Deployed 3 containerized applications using automated infrastructure provisioning and configuration. Achieved full environment deployment through a single Terraform command with publicly accessible services.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/devops-cloud-infra-terraform-ansible.git",
  },
  {
    name: "HALP – Hybrid Home Lab Platform",
    description: "Engineered a full enterprise-style home lab with virtualized infrastructure, Windows AD domain services, segmented VLAN networking, hybrid-cloud backups, and automated monitoring.",
    tools: ["Proxmox VE", "Windows Server + Active Directory", "VLAN Networking", "Docker & Docker Compose", "Python", "AWS S3, EC2", "Prometheus", "Grafana", "WireGuard VPN"],
    outcome: "Built a production-style environment featuring AD authentication, VLAN isolation, automated backups, and full observability across systems. Demonstrates foundational infrastructure engineering and real-world operational capability.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/HALP.git",
  }
]

  // =====================================================
  // EDIT: Work Experience
  // Add new positions by copying the object structure below
  // =====================================================
  experience: [

     {
      title: "Software Engineering Intern",
      company: "Creating Coding Careers",
      location: "Reston, VA",
      startDate: "Feb 2026",
      endDate: "Present",
      current: true,
      bullets: [
        "Developed backend services using JavaScript (Node.js, Express) to build RESTful APIs, including proxy server implementations handling HTTP request routing and data flow",
        "Built and tested full-stack applications using React, HTML, and Node.js, integrating frontend components with backend APIs",
        "Designed and queried SQL databases, implementing CRUD operations and optimizing basic query performance",
        "Created multiple hands-on projects demonstrating API development, server architecture, and frontend integration (available on GitHub)",
        "Worked independently to design, develop, and debug applications, strengthening problem-solving and self-sufficiency in a simulated engineering environment",
        "Applied software development fundamentals including asynchronous programming, API design, and modular code structure",
        
      ],
    },
    {
      title: "Lead Systems Administrator (N6 COMMS DLPO)",
      company: "US Navy.",
      location: "Charleston, SC",
      startDate: "Nov 2022",
      endDate: "Feb 2026",
      current: false,
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
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      year: "Target 2026",
    },
  ],
};
