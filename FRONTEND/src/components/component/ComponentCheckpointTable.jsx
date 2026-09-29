function ComponentCheckpointTable({ checkpoints }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-200">
          Screening Checkpoints
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Recorded component behaviour throughout the screening cycle.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[650px] text-left">

          <thead>

            <tr className="border-b border-slate-800/60">

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Checkpoint
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Iddq
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Delay
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Voltage
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Temperature
              </th>

              <th className="pb-3 text-right text-[10px] uppercase tracking-wider text-slate-600">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {checkpoints.map((item) => (

              <tr
                key={item.time}
                className="border-b border-slate-800/40"
              >

                <td className="py-4 text-xs font-medium text-slate-300">
                  {item.time}
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.iddq} µA
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.delay} ns
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.voltage} V
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.temperature} °C
                </td>

                <td className="py-4 text-right">

                  <span
                    className={`rounded-md border px-2 py-1 text-[9px] ${
                      item.status === "PASS"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                        : "border-yellow-400/20 bg-yellow-400/10 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ComponentCheckpointTable;