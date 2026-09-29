import { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    autoRefresh: true,
    notifications: true,
    anomalyAlerts: true,
    darkMode: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">
      {/* HEADER */}

      <section>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400">
          System Configuration
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Settings</h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Configure TRACE-X system behaviour and monitoring preferences.
        </p>
      </section>

      {/* APPLICATION SETTINGS */}

      <section className="mt-7 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-200">
            Application Settings
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Control general application behaviour.
          </p>
        </div>

        <div className="space-y-4">
          <SettingRow
            title="Auto Refresh"
            description="Automatically refresh monitoring data."
            enabled={settings.autoRefresh}
            onClick={() => toggleSetting("autoRefresh")}
          />

          <SettingRow
            title="Notifications"
            description="Enable system notifications."
            enabled={settings.notifications}
            onClick={() => toggleSetting("notifications")}
          />

          <SettingRow
            title="Anomaly Alerts"
            description="Show alerts when suspicious behaviour is detected."
            enabled={settings.anomalyAlerts}
            onClick={() => toggleSetting("anomalyAlerts")}
          />

          <SettingRow
            title="Dark Mode"
            description="Use the dark interface theme."
            enabled={settings.darkMode}
            onClick={() => toggleSetting("darkMode")}
          />
        </div>
      </section>

      {/* SYSTEM INFORMATION */}

      <section className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-200">
            System Information
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Current TRACE-X application configuration.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard label="Application" value="TRACE-X AI" />

          <InfoCard label="Version" value="v1.0.0" />

          <InfoCard label="Environment" value="Development" />

          <InfoCard label="AI Engine" value="Development Model" />

          <InfoCard label="Data Source" value="Development Dataset" />

          <InfoCard label="API Status" value="Not Connected" />
        </div>
      </section>

      {/* SERVICE STATUS */}

      <section className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-200">
            Service Status
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Current status of TRACE-X system services.
          </p>
        </div>

        <div className="space-y-3">
          <StatusRow service="Frontend" status="Operational" />

          <StatusRow service="Development Dataset" status="Available" />

          <StatusRow service="Backend API" status="Not Connected" warning />

          <StatusRow
            service="ML Inference Engine"
            status="Development Mode"
            warning
          />
        </div>
      </section>

      {/* DEVELOPMENT NOTICE */}

      <section className="mt-6 rounded-2xl border border-blue-400/15 bg-blue-400/5 p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Development Mode
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-200">
          Backend integration pending
        </h2>

        <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-500">
          TRACE-X is currently running with development data. Backend,
          machine-learning inference and real screening data will be connected
          in the next integration phase.
        </p>
      </section>
    </div>
  );
}

/* ============================= */
/* SETTING ROW */
/* ============================= */

function SettingRow({ title, description, enabled, onClick }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl border border-slate-800/50 bg-slate-950/30 p-4">
      <div>
        <p className="text-sm font-medium text-slate-300">{title}</p>

        <p className="mt-1 text-xs text-slate-600">{description}</p>
      </div>

      <button
        onClick={onClick}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-blue-500" : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

/* ============================= */
/* INFO CARD */
/* ============================= */

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-800/50 bg-slate-950/30 p-4">
      <p className="text-[9px] uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-300">{value}</p>
    </div>
  );
}

/* ============================= */
/* STATUS ROW */
/* ============================= */

function StatusRow({ service, status, warning = false }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800/50 bg-slate-950/30 p-4">
      <span className="text-sm text-slate-400">{service}</span>

      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            warning ? "bg-yellow-400" : "bg-emerald-400"
          }`}
        />

        <span
          className={`text-xs ${
            warning ? "text-yellow-400" : "text-emerald-400"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default Settings;
