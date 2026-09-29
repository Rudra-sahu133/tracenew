import { Database } from "lucide-react";

function EmptyState({
  title = "No data available",
  description = "There is no data available for this section.",
}) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center text-center">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/30 bg-slate-900/40">
        <Database className="h-5 w-5 text-slate-500" />
      </div>

      <h3 className="text-sm font-medium text-slate-300">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-xs text-slate-500">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;