export default function DashboardPage() {
  return (
    <section className="p-8">
      {/* Topbar */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Welcome back
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Health Dashboard
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Health Score",
          "Heart Rate",
          "AI Insights",
        ].map((card) => (
          <div
            key={card}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >
            <p className="text-slate-500">
              {card}
            </p>

            <h3 className="mt-6 text-4xl font-bold">
              84
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}