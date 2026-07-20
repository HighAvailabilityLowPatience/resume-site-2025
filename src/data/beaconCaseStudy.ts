export type BeaconDiagram = {
  id: string;
  label: string;
  title: string;
  image: string;
  summary: string;
  points: string[];
};

export const beaconCaseStudy = {
  slug: "beacon",
  title: "Beacon Platform",
  eyebrow: "Autonomous AI Operating Platform",
  summary:
    "Beacon is a modular AI operating platform that enables autonomous agents to reason, execute tools, manage long-running memory, schedule recurring workloads, and integrate new capabilities through plug-in MCP servers.",
  demoUrl: "",
  repoUrl: "https://github.com/HighAvailabilityLowPatience/Beacon.git",
  stack: [
    "React",
    "Express",
    "PostgreSQL",
    "OpenRouter",
    "MCP Gateway",
    "Docker",
    "Scheduler",
    "Playwright",
    "NocoDB",
  ],
  capabilities: [
    "Autonomous multi-step AI execution engine",
    "Centralized job orchestration and scheduling",
    "Persistent execution memory with LLM-powered context compression",
    "Execution telemetry and runtime observability",
    "Extensible MCP tool ecosystem",
    "PostgreSQL-backed operational data layer",
    "Containerized deployment with Docker",
    "React operations dashboard for live system monitoring",
  ],
  workloads: [
    "Flight intelligence pipeline",
    "Flight deal ranking",
    "Browser automation",
    "Database operations",
    "Search workflows",
    "Future plug-in automations for GitHub, Kubernetes, Terraform, n8n, and other operational systems",
  ],
  sourceEvidence: [
    "server/jobs/manager.js implements the autonomous agent loop, tool-call execution, token/cost telemetry, and context appends.",
    "server/jobs/scheduler.js centralizes recurring jobs such as flightQuery, events_scanner, deal_ranker, and events_cleaner.",
    "server/jobs/context.js compresses oversized execution memory with an LLM-backed context compressor.",
    "server/mcp/mcpboot.js and server/mcp/gatewayclient.js bootstrap and call MCP tools through the gateway.",
    "docker-compose.yml runs PostgreSQL, MCP Gateway, server, NocoDB, and Cloudflare tunnel services on the Beacon Docker network.",
    "server/server.js exposes chat, jobs, flights, deals, events, and health endpoints backed by Express and PostgreSQL.",
  ],
  diagrams: [
    {
      id: "platform",
      label: "Platform",
      title: "Autonomous AI & Data Pipeline Architecture",
      image: "/assets/beacon/platform-architecture.png",
      summary:
        "The full Beacon system connects scheduled workloads, external APIs, PostgreSQL persistence, dashboard views, AI query handling, OpenRouter, and MCP-powered integrations.",
      points: [
        "Scheduler launches recurring workloads such as flight queries, event scans, deal ranking, and cleanup jobs.",
        "Express API coordinates dashboard requests, AI interactions, and memory/context handling.",
        "MCP Gateway gives the AI manager controlled access to database, search, browser, and external API tools.",
      ],
    },
    {
      id: "pipeline",
      label: "Pipeline",
      title: "Automated Flight Deal Pipeline",
      image: "/assets/beacon/flight-deal-pipeline.png",
      summary:
        "Flight intelligence is one workload running on top of the broader Beacon operating platform.",
      points: [
        "Flight query jobs pull deal candidates from external providers.",
        "Normalization converts raw provider responses into structured PostgreSQL records.",
        "Deal ranker scores opportunities and writes selected deals for the UI.",
      ],
    },
    {
      id: "chat",
      label: "AI Chat",
      title: "User Query to Tool-Backed AI Response",
      image: "/assets/beacon/chat-sequence.png",
      summary:
        "A dashboard prompt flows through Express, the AI manager, OpenRouter, MCP tool execution, database reads, and back to the user as a grounded response.",
      points: [
        "The dashboard sends chat requests through a controlled Express endpoint.",
        "The AI manager builds the prompt and routes tool requests through MCP.",
        "Tool results return into the LLM context before the final response is sent back.",
      ],
    },
    {
      id: "memory",
      label: "Memory",
      title: "AI Memory Lifecycle",
      image: "/assets/beacon/memory-lifecycle.png",
      summary:
        "Beacon preserves long-running reasoning by storing execution context and compressing memory before it becomes too large.",
      points: [
        "Prompt, tool results, and execution context accumulate into a context store.",
        "A threshold decision determines when raw context should keep appending or be compressed.",
        "Summarized context reduces token usage while preserving important reasoning.",
      ],
    },
    {
      id: "compression",
      label: "Compression",
      title: "Intelligent Context Compression",
      image: "/assets/beacon/context-compression.png",
      summary:
        "A maintenance agent monitors context size, invokes a secondary LLM when needed, and replaces oversized memory with compact execution context.",
      points: [
        "Main runtime continues consuming the summarized context immediately.",
        "Compression agent reads current context and writes compact memory back.",
        "This supports long-running jobs without runaway token growth.",
      ],
    },
    {
      id: "jobs",
      label: "Jobs",
      title: "Autonomous Job Execution Tracking",
      image: "/assets/beacon/job-execution.png",
      summary:
        "Beacon tracks autonomous job state, loop count, tool usage, token usage, cost, duration, errors, and final success for runtime observability.",
      points: [
        "Each job initializes metrics before calling the AI runtime.",
        "Tool calls increment usage counters and append execution context.",
        "Final metrics are persisted for auditability and dashboard visibility.",
      ],
    },
    {
      id: "mcp",
      label: "MCP",
      title: "MCP Gateway Tool Access",
      image: "/assets/beacon/mcp-gateway.png",
      summary:
        "MCP acts as a controlled protocol layer between the AI manager and tools such as PostgreSQL, Playwright, local filesystem, search APIs, and flight APIs.",
      points: [
        "OpenRouter handles reasoning while Beacon Manager coordinates tool intent.",
        "MCP Gateway turns tool requests into protocol messages and returns results.",
        "Tool surfaces stay separated from the LLM provider.",
      ],
    },
    {
      id: "server",
      label: "Server",
      title: "Express API Boundary",
      image: "/assets/beacon/express-server.png",
      summary:
        "Express exposes chat, flights, deals, events, health, and jobs endpoints while delegating AI, scheduler, database, and context responsibilities to internal services.",
      points: [
        "Incoming HTTP requests terminate at a clear API boundary.",
        "Database work uses a PostgreSQL connection pool.",
        "AI calls, context management, and scheduled jobs remain behind the server layer.",
      ],
    },
    {
      id: "deployment",
      label: "Deployment",
      title: "Docker Network Deployment",
      image: "/assets/beacon/docker-network.png",
      summary:
        "Beacon runs as a composed platform with a React dashboard, Express server, PostgreSQL, NocoDB, DeepSeek/OpenRouter access, and MCP containers.",
      points: [
        "Dashboard, API, database, AI manager, scheduler, and MCP gateway share a controlled Docker network.",
        "MCP tool containers isolate database, Playwright, and search/API capabilities.",
        "The deployment diagram provides a concrete operating model for the live demo.",
      ],
    },
  ] satisfies BeaconDiagram[],
};
