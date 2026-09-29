function StatCard({ title, value, percentage, type }) {
  const styles = {
    blue: {
      border: "border-blue-400/20",
      icon: "bg-blue-500/10 text-blue-400",
      percentage: "text-blue-400",
      symbol: "◈",
    },

    green: {
      border: "border-emerald-400/20",
      icon: "bg-emerald-500/10 text-emerald-400",
      percentage: "text-emerald-400",
      symbol: "✓",
    },

    yellow: {
      border: "border-yellow-400/20",
      icon: "bg-yellow-500/10 text-yellow-400",
      percentage: "text-yellow-400",
      symbol: "!",
    },

    red: {
      border: "border-red-400/20",
      icon: "bg-red-500/10 text-red-400",
      percentage: "text-red-400",
      symbol: "▲",
    },
  };

  const style = styles[type] || styles.blue;

  return (
    <div
      className={`rounded-2xl border ${style.border}
      bg-slate-900/40 p-5 backdrop-blur-xl
      transition duration-200
      hover:-translate-y-1
      hover:bg-slate-900/60`}
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100">
            {value}
          </h2>

          <p className={`mt-2 text-xs ${style.percentage}`}>
            ↑ {percentage}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center
          rounded-xl text-sm ${style.icon}`}
        >
          {style.symbol}
        </div>

      </div>
    </div>
  );
}

export default StatCard;