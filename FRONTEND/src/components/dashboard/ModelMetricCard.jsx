function ModelMetricCard({
  label,
  value,
  description,
  color = "text-blue-400",
}) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className={`mt-3 text-2xl font-semibold ${color}`}>
        {value}
      </p>

      <p className="mt-2 text-[10px] leading-4 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default ModelMetricCard;