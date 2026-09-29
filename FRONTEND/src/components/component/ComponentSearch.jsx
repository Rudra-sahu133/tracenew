import { useState } from "react";

function ComponentSearch({ onSearch }) {
  const [componentId, setComponentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = componentId.trim();

    if (!value) return;

    onSearch(value);
  };

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Component Lookup
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-200">
          Search Component
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Enter a component identifier to inspect its screening data.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >

        <input
          value={componentId}
          onChange={(e) => setComponentId(e.target.value)}
          placeholder="Enter component ID e.g. CMP-1042"
          className="flex-1 rounded-xl border border-slate-700/60
          bg-slate-950/50 px-4 py-3 text-sm text-slate-200
          outline-none placeholder:text-slate-700
          focus:border-blue-400/40"
        />

        <button
          type="submit"
          className="rounded-xl border border-blue-400/20
          bg-blue-500/10 px-6 py-3 text-xs font-medium
          text-blue-400 transition hover:bg-blue-500/20"
        >
          Analyze Component
        </button>

      </form>
    </div>
  );
}

export default ComponentSearch;