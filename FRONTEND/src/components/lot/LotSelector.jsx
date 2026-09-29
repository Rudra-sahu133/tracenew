import { useState } from "react";

function LotSelector({ onSelect }) {
  const [lotId, setLotId] = useState("LOT-A17");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lotId.trim()) return;

    onSelect(lotId.trim());
  };

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Lot Intelligence
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-200">
          Select Production Lot
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Inspect screening performance and risk distribution for a lot.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >

        <input
          value={lotId}
          onChange={(e) => setLotId(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700/60
          bg-slate-950/50 px-4 py-3 text-sm text-slate-200
          outline-none placeholder:text-slate-700
          focus:border-blue-400/40"
          placeholder="Enter lot ID"
        />

        <button
          type="submit"
          className="rounded-xl border border-blue-400/20
          bg-blue-500/10 px-6 py-3 text-xs font-medium
          text-blue-400 transition hover:bg-blue-500/20"
        >
          Analyze Lot
        </button>

      </form>
    </div>
  );
}

export default LotSelector;