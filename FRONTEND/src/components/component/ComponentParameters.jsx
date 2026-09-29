function ComponentParameters({ parameters }) {
  const items = [
    {
      label: "Iddq / Leakage",
      value: parameters.iddq,
      unit: "µA",
      type: "blue",
    },
    {
      label: "Propagation Delay",
      value: parameters.delay,
      unit: "ns",
      type: "purple",
    },
    {
      label: "Supply Voltage",
      value: parameters.voltage,
      unit: "V",
      type: "green",
    },
    {
      label: "Temperature",
      value: parameters.temperature,
      unit: "°C",
      type: "yellow",
    },
  ];

  const styles = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-emerald-400",
    yellow: "text-yellow-400",
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {items.map((item) => (

        <div
          key={item.label}
          className="rounded-2xl border border-slate-800/60
          bg-slate-900/40 p-5"
        >

          <p className="text-xs text-slate-500">
            {item.label}
          </p>

          <div className="mt-4 flex items-end gap-2">

            <span
              className={`text-2xl font-semibold ${styles[item.type]}`}
            >
              {item.value}
            </span>

            <span className="mb-1 text-xs text-slate-600">
              {item.unit}
            </span>

          </div>

          <p className="mt-3 text-[10px] text-emerald-400">
            Within expected range
          </p>

        </div>

      ))}

    </div>
  );
}

export default ComponentParameters;