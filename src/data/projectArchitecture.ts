export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
  tone?: "blue" | "cyan" | "violet" | "amber" | "green";
};

export type ArchitectureFlow = {
  from: string;
  to: string;
  label: string;
};

export type ArchitectureProject = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  repoUrl: string;
  sourceEvidence: string[];
  nodes: ArchitectureNode[];
  flows: ArchitectureFlow[];
  explanation: {
    title: string;
    body: string;
  }[];
};

export const architectureProjects: ArchitectureProject[] = [
  {
    slug: "self-healing-infrastructure",
    title: "Self-Healing Infrastructure System",
    eyebrow: "Jenkins · Docker · Health Checks · ntfy",
    summary:
      "A monitoring and recovery loop where Jenkins validates application health, confirms failures, remediates the host over SSH, and notifies status through ntfy.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/devops-self-healing-infra.git",
    sourceEvidence: [
      "jenkins/jenkins-job.sh confirms two failed /health checks before recovery",
      "scripts/recover.sh restarts Docker, recreates missing containers, and validates localhost:9000/health",
      "scripts/health_status.sh checks Docker and required containers",
    ],
    nodes: [
      { id: "jenkins", label: "Jenkins Control Plane", detail: "Scheduled job checks the public /health endpoint.", tone: "blue" },
      { id: "health", label: "Health Endpoint", detail: "Returns healthy only when the service stack responds.", tone: "cyan" },
      { id: "ssh", label: "SSH Recovery Trigger", detail: "Jenkins connects to the host and runs recover.sh.", tone: "violet" },
      { id: "docker", label: "Docker Runtime", detail: "Docker service and app containers are restarted or recreated.", tone: "green" },
      { id: "notify", label: "ntfy Notifications", detail: "Mobile alerts report down, restored, or failed recovery states.", tone: "amber" },
    ],
    flows: [
      { from: "jenkins", to: "health", label: "polls /health" },
      { from: "health", to: "ssh", label: "two failures confirmed" },
      { from: "ssh", to: "docker", label: "runs recover.sh" },
      { from: "docker", to: "health", label: "post-recovery validation" },
      { from: "jenkins", to: "notify", label: "state alerts" },
    ],
    explanation: [
      {
        title: "Why this architecture matters",
        body:
          "The project separates the control plane from the workload. Jenkins does not simply run a job; it makes a health decision, triggers remediation, and verifies recovery after the repair attempt.",
      },
      {
        title: "Failure handling",
        body:
          "The Jenkins script avoids a single false alarm by checking twice. Confirmed failure triggers notification, SSH remediation, a retry loop, and a final restored/failed notification.",
      },
      {
        title: "Recovery boundary",
        body:
          "The recovery script starts Docker, recreates missing application containers, restarts webhook/ngrok ingress services, and waits for a healthy endpoint before calling the system restored.",
      },
    ],
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline Automation",
    eyebrow: "GitHub Actions · Docker Hub · Webhook Deployment",
    summary:
      "A push-to-main delivery flow that installs dependencies, builds a Docker image, pushes it to Docker Hub, and supports event-driven redeployment of the live service.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/devops-cicd-github-actions-docker.git",
    sourceEvidence: [
      "workflows/ci-cd.yml triggers on pushes to main",
      "CI job runs npm ci on Node 18",
      "CD job logs into Docker Hub, builds grout2026/web102-change-calculator:latest, and pushes it",
    ],
    nodes: [
      { id: "developer", label: "Code Push", detail: "A push to main starts the automation.", tone: "blue" },
      { id: "actions", label: "GitHub Actions", detail: "CI installs dependencies and gates the CD job.", tone: "violet" },
      { id: "image", label: "Docker Image", detail: "The app is built into a tagged container image.", tone: "cyan" },
      { id: "registry", label: "Docker Hub", detail: "Registry stores the latest deployable image.", tone: "green" },
      { id: "runtime", label: "Live Runtime", detail: "Webhook deployment pulls and recreates the service.", tone: "amber" },
    ],
    flows: [
      { from: "developer", to: "actions", label: "push to main" },
      { from: "actions", to: "image", label: "docker build" },
      { from: "image", to: "registry", label: "docker push" },
      { from: "registry", to: "runtime", label: "latest image pulled" },
      { from: "runtime", to: "developer", label: "public endpoint updates" },
    ],
    explanation: [
      {
        title: "Pipeline split",
        body:
          "The workflow separates CI and CD jobs. The deployment job depends on the CI job, so image build and push only happen after the install step succeeds.",
      },
      {
        title: "Registry as release boundary",
        body:
          "Docker Hub becomes the handoff point between build automation and the deployment host. The live runtime only needs to pull the latest validated image.",
      },
      {
        title: "Operational lesson",
        body:
          "The repo documents common pipeline failure points: credentials, build context, and assuming local success means CI success. The diagram makes those boundaries explicit.",
      },
    ],
  },
  {
    slug: "cloud-infra",
    title: "Infrastructure as Code Cloud Deployment",
    eyebrow: "Terraform · Ansible · AWS EC2 · Docker",
    summary:
      "Terraform provisions AWS networking and compute, generates inventory from the EC2 public IP, then Ansible installs Docker and launches three public containerized apps.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/devops-cloud-infra-terraform-ansible.git",
    sourceEvidence: [
      "terraform/lab_terraform/main.tf creates VPC, public subnet, internet gateway, route table, security group, and EC2",
      "Terraform renders an Ansible inventory from the EC2 public IP",
      "ansible/lab_ansible/deploy_container.yml loops through three Docker images on ports 54321-54323",
    ],
    nodes: [
      { id: "terraform", label: "Terraform", detail: "Defines and applies the AWS infrastructure layer.", tone: "violet" },
      { id: "aws", label: "AWS Network", detail: "VPC, subnet, route table, internet gateway, and security group.", tone: "blue" },
      { id: "ec2", label: "Ubuntu EC2", detail: "Public instance receives generated Ansible inventory.", tone: "cyan" },
      { id: "ansible", label: "Ansible", detail: "Installs Docker and configures the runtime environment.", tone: "amber" },
      { id: "apps", label: "Three Containers", detail: "Astro, Change Calculator, and San Diego Top Spots on 54321-54323.", tone: "green" },
    ],
    flows: [
      { from: "terraform", to: "aws", label: "provisions" },
      { from: "aws", to: "ec2", label: "hosts instance" },
      { from: "ec2", to: "ansible", label: "inventory target" },
      { from: "ansible", to: "apps", label: "pulls and runs" },
      { from: "apps", to: "aws", label: "ports exposed" },
    ],
    explanation: [
      {
        title: "Two automation layers",
        body:
          "Terraform owns infrastructure creation. Ansible owns host configuration and container deployment. Keeping those responsibilities separate makes the system easier to reason about.",
      },
      {
        title: "Dynamic handoff",
        body:
          "Terraform knows the EC2 public IP after creation and writes it into an Ansible inventory file. That connects provisioning to configuration without manual copy-paste.",
      },
      {
        title: "Scalable deployment pattern",
        body:
          "The Ansible playbook uses a container list and loop. Adding a fourth service can be a data change instead of rewriting deployment logic.",
      },
    ],
  },
  {
    slug: "halp",
    title: "HALP - Hybrid Home Lab Platform",
    eyebrow: "Proxmox · VLANs · Prometheus · Grafana · AWS Backup",
    summary:
      "An enterprise-style lab combining virtualization, segmented networking, Windows/Linux services, observability, and a Proxmox-to-AWS backup automation path.",
    repoUrl: "https://github.com/HighAvailabilityLowPatience/HALP.git",
    sourceEvidence: [
      "README.md documents Proxmox, Cisco/TP-Link networking, Windows Server DNS, Ubuntu, Prometheus, Grafana, and exporters",
      "monitoring/prometheusprod.yml defines Linux, Windows, bare-metal, and router scrape targets",
      "backups/README.md documents Proxmox backups through WireGuard, EC2 relay, Lambda/EventBridge, and S3",
    ],
    nodes: [
      { id: "network", label: "Segmented Network", detail: "Cisco/TP-Link network lanes, VLAN work, DNS, and VPN access.", tone: "blue" },
      { id: "proxmox", label: "Proxmox Cluster", detail: "Mini PCs host Windows, Linux, monitoring, and dev VMs.", tone: "violet" },
      { id: "services", label: "Lab Services", detail: "Windows Server, Ubuntu, SSH, DNS, and firewall-controlled access.", tone: "cyan" },
      { id: "monitoring", label: "Observability", detail: "Prometheus scrapes exporters; Grafana visualizes node health.", tone: "green" },
      { id: "backup", label: "Cloud Backup Path", detail: "Proxmox vzdump, WireGuard, EC2 relay, Lambda scheduling, and S3.", tone: "amber" },
    ],
    flows: [
      { from: "network", to: "proxmox", label: "routes lab traffic" },
      { from: "proxmox", to: "services", label: "runs VMs" },
      { from: "services", to: "monitoring", label: "exports metrics" },
      { from: "proxmox", to: "backup", label: "sends verified backups" },
      { from: "backup", to: "network", label: "VPN-secured path" },
    ],
    explanation: [
      {
        title: "Enterprise lab shape",
        body:
          "HALP is not one app; it is a platform for practicing infrastructure operations. The diagram groups the repo into network, compute, service, observability, and backup layers.",
      },
      {
        title: "Monitoring layer",
        body:
          "Prometheus and exporters provide operational visibility across Linux, Windows, Proxmox, and other network targets. Grafana turns the scraped metrics into dashboards.",
      },
      {
        title: "Backup automation",
        body:
          "The backup docs describe a cost-aware AWS path: scheduled Lambda starts EC2, backups move over WireGuard, rclone pushes to S3, and Lambda stops EC2 after the window.",
      },
    ],
  },
];

export const getArchitectureProject = (slug: string | undefined) =>
  architectureProjects.find((project) => project.slug === slug);
