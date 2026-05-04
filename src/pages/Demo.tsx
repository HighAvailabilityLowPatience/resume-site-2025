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
  astro: "https://updatelistener.ngrok.app/breakcontainer",
  system: "https://updatelistener.ngrok.app/breakenvironment",
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
  const [astroNonce, setAstroNonce] = useState(0);
  const [changeNonce, setChangeNonce] = useState(0);
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

  // Periodic iframe reload — every 15s — so live windows reflect real backend state (crashes included)
  useEffect(() => {
    const reload = setInterval(() => {
      setAstroNonce((n) => n + 1);
      setChangeNonce((n) => n + 1);
    }, 15000);
    return () => clearInterval(reload);
  }, []);

  const triggerBreak = async (target: "astro" | "system") => {
    setPending(target);
    const url = target === "astro" ? BREAK_ENDPOINTS.astro : BREAK_ENDPOINTS.system;
    const label = target === "astro" ? "Break Astro Calc" : "Break Entire System";
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
      setTimeout(() => {
        if (target === "astro") {
          setAstroNonce((n) => n + 1);
        } else {
          setAstroNonce((n) => n + 1);
          setChangeNonce((n) => n + 1);
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <main className="relative max-w-content mx-auto px-6 md:px-8 py-10 md:py-14">

        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to resume
          </Link>
        </div>

        <h1 className="text-4xl mb-10">Operations Dashboard</h1>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <iframe key={astroNonce} src="https://astro-calc.ngrok.app" className="w-full h-64" />
          <iframe key={changeNonce} src="https://change-calc.ngrok.app" className="w-full h-64" />
        </div>

        <div className="flex gap-4 mb-10">
          <button onClick={() => triggerBreak("astro")}>Break Astro</button>
          <button onClick={() => triggerBreak("system")}>Break System</button>
        </div>

        <div>
          {logs.map((l) => (
            <div key={l.id}>{l.message}</div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Demo;
