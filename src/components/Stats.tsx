
const stats = [
  { value: "99.7%", label: "Safety Score", sublabel: "Across all deployments" },
  { value: "3.2s", label: "Avg Response Time", sublabel: "For escalations" },
  { value: "85%", label: "Automation Rate", sublabel: "Tasks handled autonomously" },
  { value: "24/7", label: "Monitoring", sublabel: "Continuous oversight" }
];

const Stats = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
