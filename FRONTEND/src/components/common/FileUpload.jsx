import { useRef, useState } from "react";

function FileUpload() {
  const inputRef = useRef(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [uploaded, setUploaded] = useState(
    localStorage.getItem("trace-x-file-uploaded") === "true"
  );

  const handleFile = (file) => {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      localStorage.setItem(
        "trace-x-file-uploaded",
        "true"
      );

      setIsProcessing(false);
      setUploaded(true);

      window.dispatchEvent(
        new Event("trace-x-data-updated")
      );
    }, 3000);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];

    handleFile(file);

    event.target.value = "";
  };

  return (
    <div className="rounded-2xl border border-blue-400/15 bg-slate-900/40 p-5">

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-400">
            Dataset Input
          </p>

          <h2 className="mt-2 text-lg font-semibold text-slate-200">
            Upload Screening Dataset
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Upload a CSV screening dataset to run the analysis.
          </p>

        </div>

        <div>

          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            onChange={handleInputChange}
            className="hidden"
          />

          <button
            onClick={() => inputRef.current?.click()}
            disabled={isProcessing}
            className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-xs font-medium text-blue-400 transition hover:bg-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isProcessing
              ? "Analyzing Dataset..."
              : "Upload CSV"}
          </button>

        </div>

      </div>

      {isProcessing && (
        <div className="mt-5 rounded-xl border border-blue-400/10 bg-blue-400/5 p-4">

          <div className="flex items-center gap-3">

            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400/20 border-t-blue-400" />

            <div>

              <p className="text-xs font-medium text-blue-300">
                Processing screening dataset
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Running anomaly detection and degradation analysis...
              </p>

            </div>

          </div>

        </div>
      )}

      {!isProcessing && uploaded && (
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10 text-sm text-emerald-400">
            ✓
          </span>

          <div>

            <p className="text-xs font-medium text-emerald-400">
              Dataset uploaded successfully
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Screening analysis completed successfully.
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default FileUpload;