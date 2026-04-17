import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Activity, Cpu, Radio, Shield, Zap, AlertTriangle, CheckCircle2, Info } from "lucide-react";

/**
 * DEMO PAGE
 * =========
 * Futuristic dashboard demo with two display windows and a scrolling alert center.
 * Styled to match the resume aesthetic with added cyber/dashboard accents.
 */

type AlertLevel = "info" | "success" | "warning" | "critical";

interface Alert {
  id: number;
  time: string;
  level: AlertLevel;
  source: string;
  message: string;
}

const SEED_ALERTS: Omit<Alert, "id" | "time">[] = [
  { level: "info", source: "ORBITAL-7", message: "Telemetry sync complete — all nodes nominal" },
  { level: "success", source: "GRID-A1", message: "Authentication handshake verified" },
  { level: "warning", source: "SENSOR-12", message: "Thermal flux above baseline (+3.2°)" },
  { level: "info", source: "RELAY-04", message: "Packet stream established at 1.2 Gbps" },
  { level: "critical", source: "PERIMETER", message: "Unscheduled access attempt — sector 9" },
  { level: "success", source: "CORE", message: "Encryption rotation cycle complete" },
  { level: "info", source: "SAT-LINK", message: "Uplink latency 42ms — optimal" },
  { level: "warning", source: "POWER-3", message: "Load draw approaching 78% capacity" },
  { level: "info", source: "MESH-NET", message: "12 new endpoints registered" },
  { level: "success", source: "FIREWALL", message: "Threat signatures updated to v2.481" },
];

const levelStyles: Record<AlertLevel, { bg: string; text: string; icon: typeof Info }> = {
  info: { bg: "bg-primary/10", text: "text-primary", icon: Info },
  success: { bg: "bg-accent/10", text: "text-accent", icon: CheckCircle2 },
  warning: { bg: "bg-highlight/20", text: "text-highlight-foreground", icon: AlertTriangle },
  critical: { bg: "bg-destructive/10", text: "text-destructive", icon: AlertTriangle },
};

const Demo = () => {
  const [alerts, setAlerts] = useState<Alert[]>(() =>
    SEED_ALERTS.map((a, i) => ({
      ...a,
      id: i,
      time: new Date(Date.now() - (SEED_ALERTS.length - i) * 4000).toLocaleTimeString("en-US", { hour12: false }),
    }))
  );
  const [pulse, setPulse] = useState(0);
  const [throughput, setThroughput] = useState(847);
  const [uptime, setUptime] = useState(99.982);

  // Simulate live telemetry
  useEffect(() => {
    const tick = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
      setThroughput((t) => Math.max(600, Math.min(1200, t + (Math.random() - 0.5) * 40)));
      setUptime((u) => +(u + (Math.random() - 0.5) * 0.002).toFixed(3));
    }, 800);
    return () => clearInterval(tick);
  }, []);

  // Simulate streaming alerts
  useEffect(() => {
    const tick = setInterval(() => {
      const seed = SEED_ALERTS[Math.floor(Math.random() * SEED_ALERTS.length)];
      setAlerts((prev) => [
        {
          ...seed,
          id: Date.now(),
          time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
        ...prev,
      ].slice(0, 30));
    }, 3500);
    return () => clearInterval(tick);
  }, []);

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
        <div className="mb-10 animate-fade-in-up">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-3">
            // Mission Control
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-foreground mb-3">
            Operations Dashboard
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Real-time telemetry, system diagnostics, and incident stream — a glimpse of what we build.
          </p>
        </div>

        {/* Two display windows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Window 1 — Network Throughput */}
          <DisplayWindow
            title="Network Throughput"
            subtitle="NODE.MESH-A"
            icon={Radio}
            accent="primary"
          >
            <div className="space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-serif font-medium text-foreground tabular-nums">
                  {throughput.toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground font-mono">Mbps</span>
              </div>

              {/* Animated waveform bars */}
              <div className="flex items-end gap-1 h-24">
                {Array.from({ length: 32 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin((pulse + i) * 0.3)) * 80;
                  return (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-sm transition-all duration-300"
                      style={{ height: `${h}%` }}
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <Stat label="Packets" value="2.4M" />
                <Stat label="Latency" value="42ms" />
                <Stat label="Loss" value="0.01%" />
              </div>
            </div>
          </DisplayWindow>

          {/* Window 2 — System Integrity */}
          <DisplayWindow
            title="System Integrity"
            subtitle="CORE.PRIMARY"
            icon={Shield}
            accent="accent"
          >
            <div className="space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-serif font-medium text-foreground tabular-nums">
                  {uptime.toFixed(3)}
                </span>
                <span className="text-sm text-muted-foreground font-mono">% uptime</span>
              </div>

              {/* Radial-style indicator */}
              <div className="relative h-24 flex items-center justify-center">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <path
                    d="M 20 90 A 80 80 0 0 1 180 90"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 20 90 A 80 80 0 0 1 180 90"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (251 * uptime) / 100}
                    className="transition-all duration-700"
                  />
                  <text
                    x="100"
                    y="80"
                    textAnchor="middle"
                    className="fill-foreground font-mono text-xs"
                  >
                    OPTIMAL
                  </text>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <Stat label="Nodes" value="148/148" />
                <Stat label="CPU" value="34%" />
                <Stat label="Threats" value="0" />
              </div>
            </div>
          </DisplayWindow>
        </div>

        {/* Scrolling Alert Center */}
        <section className="relative rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/60">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-foreground">
                Alert Center
              </h2>
              <span className="text-xs font-mono text-muted-foreground">
                · {alerts.length} active
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Cpu className="w-3 h-3" />
              STREAMING
            </div>
          </div>

          <div className="relative h-72 overflow-hidden">
            {/* Fade gradients top/bottom */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card/80 to-transparent z-10 pointer-events-none" />

            <ul className="divide-y divide-border/60 animate-fade-in">
              {alerts.map((alert) => {
                const styles = levelStyles[alert.level];
                const Icon = styles.icon;
                return (
                  <li
                    key={alert.id}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-primary/5 transition-colors animate-slide-in-left"
                  >
                    <span className="text-xs font-mono text-muted-foreground tabular-nums w-20 shrink-0">
                      {alert.time}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider shrink-0 ${styles.bg} ${styles.text}`}
                    >
                      <Icon className="w-3 h-3" />
                      {alert.level}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground w-28 shrink-0 truncate">
                      {alert.source}
                    </span>
                    <span className="text-sm text-foreground/90 truncate">
                      {alert.message}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <p className="text-center text-xs font-mono text-muted-foreground mt-8 uppercase tracking-widest">
          <Zap className="w-3 h-3 inline mr-1 text-accent" />
          Demo environment · Synthetic data
        </p>
      </main>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
      {label}
    </p>
    <p className="text-sm font-mono text-foreground tabular-nums">{value}</p>
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
}) => (
  <div className="group relative rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up">
    {/* Corner brackets */}
    <span className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-${accent}/60`} />
    <span className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-${accent}/60`} />
    <span className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-${accent}/60`} />
    <span className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-${accent}/60`} />

    <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card/60">
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 text-${accent}`} />
        <h3 className="text-sm font-mono uppercase tracking-widest text-foreground">{title}</h3>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {subtitle}
      </span>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default Demo;
