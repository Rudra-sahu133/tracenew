import { AlertTriangle } from "lucide-react";

function ErrorState({
  title = "Unable to load data",
  description = "Something went wrong while loading this section.",
}) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center text-center">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10">
        <AlertTriangle className="h-5 w-5 text-red-400" />
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

export default ErrorState;