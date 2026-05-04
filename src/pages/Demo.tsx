import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Radio, Shield, Zap, AlertOctagon, Loader2 } from "lucide-react";

/**
 * =========================================================
 * DEMO PAGE — SYSTEMS VIEW
 * =========================================================
 * Layers now include:
 * 1. Control Plane (break triggers)
 * 2. Data Plane (iframes)
 * 3. Observability Layer (NEW → health polling + banner)
 * =========================================================
 */

const BREAK_ENDPOINTS = {
  astro: "https://updatelistener.ngrok.app/breakcontainer",
  system: "https://updatelistener.ngrok.app/breakenvironment",
} as const;

/**
 * =========================================================
 * HEALTH ENDPOINT (NEW)
 * =========================================================
 */
const HEALTH_ENDPOINT = "https://updatelistener.ngrok.app/health";

/**
 * =========================================================
 * SEED LOG DATA
 * =========================================================
 */
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
  /**
   * =========================================================
   * STATE LAYER
   * =========================================================
   */
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    SEED_LOGS.map((l, i) => ({
      ...l,
      id: i,
      time: new Date(Date.now() - (SEED_LOGS.length - i) * 4000).toLocaleTimeString("en-US", { hour12: false }),
      kind: "info" as const,
    }))
  );

  const [pending, setPending] = useState<null | "astro" | "system">(null);

  /**
   * NEW → SYSTEM HEALTH STATE
   */
  const [systemHealthy, setSystemHealthy] = useState(true);

  const [astroNonce, setAstroNonce] = useState(0);
  const [changeNonce, setChangeNonce] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);

  /**
   * =========================================================
   * LOGGING LAYER
   * =========================================================
   */
  const pushLog = (entry: Omit<LogEntry, "id" | "time">) =>
    setLogs((prev) => [{ ...entry, id: Date.now() + Math.random(), time: now() }, ...prev].slice(0, 80));

  /**
   * =========================================================
   * OBSERVABILITY LAYER (NEW)
   * =========================================================
   * Polls backend health endpoint every 2s
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(HEALTH_ENDPOINT);
        const healthy = res.ok;

        setSystemHealthy(healthy);

        // Log transitions only (avoid spam)
        if (!healthy) {
          pushLog({
            source: "SYSTEM",
            message: "Failure detected — recovery in progress",
            kind: "error",
          });
        }
      } catch {
        setSystemHealthy(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /**
   * =========================================================
   * SIMULATED LOG STREAM
   * =========================================================
   */
  useEffect(() => {
    const tick = setInterval(() => {
      const seed = SEED_LOGS[Math.floor(Math.random() * SEED_LOGS.length)];
      pushLog({ ...seed, kind: "info" });
    }, 3500);
    return () => clearInterval(tick);
  }, []);

  /**
   * =========================================================
   * IFRAME REFRESH LOOP
   * =========================================================
   */
  useEffect(() => {
    const reload = setInterval(() => {
      setAstroNonce((n) => n + 1);
      setChangeNonce((n) => n + 1);
    }, 15000);
    return () => clearInterval(reload);
  }, []);

  /**
   * =========================================================
   * CONTROL PLANE — BREAK TRIGGERS
   * =========================================================
   */
  const triggerBreak = async (target: "astro" | "system") => {
    setPending(target);
    const url = target === "astro" ? BREAK_ENDPOINTS.astro : BREAK_ENDPOINTS.system;
    const label = target === "astro" ? "Break Astro Calc" : "Break Entire System";

    pushLog({ source: "OPERATOR", message: `→ ${label} requested`, kind: "warn" });

    try {
      const res = await fetch(url, { method: "POST" });

      pushLog({
        source: "OPERATOR",
        message: `${label} responded ${res.status}`,
        kind: res.ok ? "ok" : "error",
      });
    } catch (err) {
      pushLog({
        source: "OPERATOR",
        message: `${label} failed`,
        kind: "error",
      });
    } finally {
      setPending(null);

      setTimeout(() => {
        setAstroNonce((n) => n + 1);
        setChangeNonce((n) => n + 1);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      {/* =========================================================
          GLOBAL SYSTEM HEALTH BANNER (NEW)
      ========================================================= */}
      {!systemHealthy && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 font-mono text-sm tracking-widest">
          ⚠ FAILURE DETECTED — RECOVERY IN PROGRESS
        </div>
      )}

      <main className="relative max-w-content mx-auto px-6 md:px-8 py-10 md:py-14">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to resume
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl mb-10">Operations Dashboard</h1>

        {/* APPLICATIONS */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <iframe key={astroNonce} src="https://astro-calc.ngrok.app" className="w-full h-64" />
          <iframe key={changeNonce} src="https://change-calc.ngrok.app" className="w-full h-64" />
        </div>

        {/* CONTROL */}
        <div className="flex gap-4 mb-10">
          <button onClick={() => triggerBreak("astro")}>Break Astro</button>
          <button onClick={() => triggerBreak("system")}>Break System</button>
        </div>

        {/* LOGS */}
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
