import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Radio, Shield, Zap, AlertOctagon, Loader2 } from "lucide-react";

/**
 * DEMO PAGE
 * =========
 * Mission-control dashboard organized into three clear sections:
 *  1. Live Applications  — embedded app windows
 *  2. System Control     — destructive break actions
 *  3. System Activity    — streaming log feed
 */

const BREAK_ENDPOINTS = {
  astro: "https://updatelistener.ngrok.app/breakenviroment",
  system: "https://updatelistener.ngrok.app/breakcontainer",
} as const;

const SEED_LOGS: { source: string; message: string }[] = [
  { source: "ORBITAL-7", message: "Telemetry sync complete — all nodes nominal" },
  { source: "GRID-A1", message: "Authentication handshake verified" },
  { source: "SENSOR-12", message: "Thermal flux above baseline (+3.2°)" },
  { source: "RELAY-04", message: "Packet stream established at 1.2 Gbps" },
  { source: "CORE", message: "Encryption rotation cycle complete" },
  { source: "SAT-LINK", message: "Uplink latency 42ms — optimal" },
  { source: "POWER-3", message: "Load draw approaching 78% capacity" },
  { source: "MESH-NET", message: "12 new endpoints registered" },
  { source: "FIREWALL", message: "Threat signatures updated to v2.481" },
  { source: "ORBITAL-7", message: "Heartbeat OK" },
];

interface LogEntry {
  id: number;
  time: string;
  source: string;
  message: string;
  kind: "info" | "warn" | "error" | "ok";
}

const now = () => new Date().toLocaleTimeString("en-US", { hour12: false });

const Demo = () => {
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    SEED_LOGS.map((l, i) => ({
      ...l,
      id: i,
      time: new Date(Date.now() - (SEED_LOGS.length - i) * 4000).toLocaleTimeString("en-US", { hour12: false }),
      kind: "info" as const,
    }))
  );
  const [pending, setPending] = useState<null | "astro" | "system">(null);
  const logRef = useRef<HTMLDivElement>(null);

  const pushLog = (entry: Omit<LogEntry, "id" | "time">) =>
    setLogs((prev) => [{ ...entry, id: Date.now() + Math.random(), time: now() }, ...prev].slice(0, 80));

  // Simulated streaming entries
  useEffect(() => {
    const tick = setInterval(() => {
      const seed = SEED_LOGS[Math.floor(Math.random() * SEED_LOGS.length)];
      pushLog({ ...seed, kind: "info" });
    }, 3500);
    return () => clearInterval(tick);
  }, []);

  const triggerBreak = async (target: "astro" | "system") => {
    setPending(target);
    const url = target === "astro" ? BREAK_ENDPOINTS.astro : BREAK_ENDPOINTS.system;
    const label = target === "astro" ? "Break Astro App" : "Break Entire System";
    pushLog({ source: "OPERATOR", message: `→ ${label} requested`, kind: "warn" });
    try {
      const res = await fetch(url, { method: "POST" });
      pushLog({
        source: "OPERATOR",
        message: `${label} responded ${res.status} ${res.statusText || ""}`.trim(),
        kind: res.ok ? "ok" : "error",
      });
    } catch (err) {
      pushLog({
        source: "OPERATOR",
        message: `${label} failed: ${(err as Error).message}`,
        kind: "error",
      });
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
      />

      <main className="relative max-w-content mx-auto px-6 md:px-8 py-10 md:py-14">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-10 animate-fade-in-up">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to resume
          </Link>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Live
          </div>
        </div>

        {/* Title */}
        <div className="mb-14 animate-fade-in-up">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-3">
            // Mission Control
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-foreground mb-3">
            Operations Dashboard
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Trigger failures and watch the system recover automatically.
          </p>
        </div>

        {/* SECTION 1 — Live Applications */}
        <SectionHeader index="01" title="Live Applications" caption="Embedded production windows" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <DisplayWindow title="Astro Calc" subtitle="NODE.MESH-A" icon={Radio} accent="primary">
            <IframeFrame src="https://astro-calc.ngrok.app" title="Astro Calc" />
          </DisplayWindow>
          <DisplayWindow title="Change Calc" subtitle="CORE.PRIMARY" icon={Shield} accent="accent">
            <IframeFrame src="https://change-calc.ngrok.app" title="Change Calc" />
          </DisplayWindow>
        </div>

        {/* SECTION 2 — System Control */}
        <SectionHeader index="02" title="System Control" caption="Destructive — triggers real failure" />
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-20 max-w-3xl mx-auto">
          <BreakButton
            label="Break Astro App"
            onClick={() => triggerBreak("astro")}
            loading={pending === "astro"}
            disabled={pending !== null}
          />
          <BreakButton
            label="Break Entire System"
            onClick={() => triggerBreak("system")}
            loading={pending === "system"}
            disabled={pending !== null}
          />
        </div>

        {/* SECTION 3 — System Activity */}
        <SectionHeader index="03" title="System Activity" caption="Live log stream" />
        <section className="relative rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/60">
            <h2 className="text-sm font-mono uppercase tracking-widest text-foreground">
              Live System Activity
            </h2>
            <span className="text-xs font-mono text-muted-foreground">
              {logs.length} entries · streaming
            </span>
          </div>

          <div ref={logRef} className="relative h-80 overflow-y-auto bg-background/40">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-card/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card/80 to-transparent z-10 pointer-events-none" />
            <ul className="font-mono text-xs leading-relaxed py-3 px-5">
              {logs.map((log) => (
                <li key={log.id} className="flex gap-3 py-0.5 animate-slide-in-left">
                  <span className="text-muted-foreground tabular-nums shrink-0">{log.time}</span>
                  <span className="text-muted-foreground/70 shrink-0 w-24 truncate">[{log.source}]</span>
                  <span className={kindClass(log.kind)}>{log.message}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="text-center text-xs font-mono text-muted-foreground mt-10 uppercase tracking-widest">
          <Zap className="w-3 h-3 inline mr-1 text-accent" />
          Demo environment · Live embedded windows
        </p>
      </main>
    </div>
  );
};

const kindClass = (kind: LogEntry["kind"]) => {
  switch (kind) {
    case "error":
      return "text-destructive";
    case "warn":
      return "text-highlight-foreground";
    case "ok":
      return "text-accent";
    default:
      return "text-foreground/80";
  }
};

const SectionHeader = ({ index, title, caption }: { index: string; title: string; caption: string }) => (
  <div className="flex items-end justify-between mb-5 animate-fade-in-up">
    <div className="flex items-baseline gap-3">
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">{index}</span>
      <h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-foreground">
        {title}
      </h2>
    </div>
    <span className="hidden sm:inline text-xs font-mono uppercase tracking-widest text-muted-foreground">
      {caption}
    </span>
  </div>
);

const BreakButton = ({
  label,
  onClick,
  loading,
  disabled,
}: {
  label: string;
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="group relative flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive font-mono uppercase tracking-widest text-sm transition-all duration-300 hover:bg-destructive/20 hover:border-destructive hover:shadow-xl hover:shadow-destructive/30 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="absolute inset-0 rounded-xl bg-destructive/0 group-hover:bg-destructive/5 transition-colors" />
    {loading ? (
      <Loader2 className="w-5 h-5 animate-spin" />
    ) : (
      <AlertOctagon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    )}
    <span className="relative">{label}</span>
  </button>
);

const IframeFrame = ({ src, title }: { src: string; title: string }) => (
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-background/40">
    <iframe
      src={src}
      title={title}
      loading="lazy"
      className="absolute inset-0 w-full h-full border-0"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  </div>
);

const DisplayWindow = ({
  title,
  subtitle,
  icon: Icon,
  accent,
  children,
}: {
  title: string;
  subtitle: string;
  icon: typeof Radio;
  accent: "primary" | "accent";
  children: React.ReactNode;
}) => {
  const bracketColor = accent === "primary" ? "border-primary/60" : "border-accent/60";
  const iconColor = accent === "primary" ? "text-primary" : "text-accent";
  const hoverGlow =
    accent === "primary"
      ? "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
      : "hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20";
  return (
    <div
      className={`group relative rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 animate-fade-in-up ${hoverGlow}`}
    >
      <span className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 ${bracketColor} z-10`} />
      <span className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 ${bracketColor} z-10`} />
      <span className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 ${bracketColor} z-10`} />
      <span className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 ${bracketColor} z-10`} />

      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/60">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${iconColor}`} />
          <h3 className="text-sm font-mono uppercase tracking-widest text-foreground">{title}</h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {subtitle}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Demo;
