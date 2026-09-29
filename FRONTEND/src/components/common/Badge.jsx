const badgeStyles = {
  normal:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

  low:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

  medium:
    "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

  high:
    "border-red-400/20 bg-red-400/10 text-red-400",

  critical:
    "border-red-500/30 bg-red-500/15 text-red-300",

  review:
    "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

  pass:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

  fail:
    "border-red-400/20 bg-red-400/10 text-red-400",
};

function Badge({ label, type = "normal" }) {
  const style =
    badgeStyles[type.toLowerCase()] ||
    badgeStyles.normal;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${style}`}
    >
      {label}
    </span>
  );
}

export default Badge;