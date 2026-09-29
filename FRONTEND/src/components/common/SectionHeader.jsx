function SectionHeader({
  title,
  description,
  action,
}) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">

      <div>
        <h2 className="text-base font-semibold text-slate-100">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}

export default SectionHeader;