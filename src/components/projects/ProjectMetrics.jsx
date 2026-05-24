export default function ProjectMetrics({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <div className="border border-white/10 bg-white/[0.01] p-5 rounded-2xl text-left">
        <p className="text-gray-500 uppercase tracking-wider text-[10px]">Concrete Volume</p>
        <p className="text-xl sm:text-2xl font-mono font-medium text-white mt-1">
          {metrics.concrete || "N/A"}
        </p>
      </div>

      <div className="border border-white/10 bg-white/[0.01] p-5 rounded-2xl text-left">
        <p className="text-gray-500 uppercase tracking-wider text-[10px]">Steel Tonnage</p>
        <p className="text-xl sm:text-2xl font-mono font-medium text-white mt-1">
          {metrics.steel || "N/A"}
        </p>
      </div>

      <div className="border border-white/10 bg-white/[0.01] p-5 rounded-2xl text-left">
        <p className="text-gray-500 uppercase tracking-wider text-[10px]">Cost Variance</p>
        <p className="text-xl sm:text-2xl font-mono font-medium text-white mt-1">
          {metrics.costVariance || "N/A"}
        </p>
      </div>

      <div className="border border-white/10 bg-white/[0.01] p-5 rounded-2xl text-left">
        <p className="text-gray-500 uppercase tracking-wider text-[10px]">Timeline</p>
        <p className="text-xl sm:text-2xl font-mono font-medium text-white mt-1">
          {metrics.timeline || "N/A"}
        </p>
      </div>
    </div>
  );
}
