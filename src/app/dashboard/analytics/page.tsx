"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const healthData = [
  { day: "Mon", score: 72 },
  { day: "Tue", score: 75 },
  { day: "Wed", score: 74 },
  { day: "Thu", score: 78 },
  { day: "Fri", score: 82 },
  { day: "Sat", score: 84 },
  { day: "Sun", score: 86 },
];

const sleepData = [
  { day: "Mon", hours: 6.2 },
  { day: "Tue", hours: 7.1 },
  { day: "Wed", hours: 6.8 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 8.1 },
  { day: "Sat", hours: 8.4 },
  { day: "Sun", hours: 7.9 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-background p-8 text-white">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-slate-500">
          AI Health Analytics
        </p>

        <h1 className="mt-2 font-heading text-5xl font-bold">
          Health Insights
        </h1>
      </div>

      {/* Top Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            label: "Health Score",
            value: "84",
            sub: "+12% this week",
          },
          {
            label: "Sleep Quality",
            value: "8.2h",
            sub: "Healthy recovery",
          },
          {
            label: "Heart Rate",
            value: "72 BPM",
            sub: "Stable condition",
          },
          {
            label: "Activity",
            value: "7,420",
            sub: "Daily steps",
          },
        ].map((card) => (
          <div
            key={card.label}
            className="
              glass
              rounded-3xl
              border
              border-white/10
              p-6
            "
          >
            <p className="text-sm text-slate-500">
              {card.label}
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              {card.value}
            </h2>

            <p className="mt-2 text-sm text-emerald-400">
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Health Score */}
        <div
          className="
            glass
            rounded-3xl
            border
            border-white/10
            p-6
          "
        >
          <div className="mb-6">
            <p className="text-sm text-slate-500">
              Weekly Health Score
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              AI Wellness Trend
            </h3>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={healthData}>
                <defs>
                  <linearGradient
                    id="healthGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2563EB"
                      stopOpacity={0.5}
                    />

                    <stop
                      offset="100%"
                      stopColor="#2563EB"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="rgba(255,255,255,0.05)"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#64748B",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#2563EB"
                  fill="url(#healthGradient)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sleep Chart */}
        <div
          className="
            glass
            rounded-3xl
            border
            border-white/10
            p-6
          "
        >
          <div className="mb-6">
            <p className="text-sm text-slate-500">
              Sleep Analytics
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Weekly Sleep Pattern
            </h3>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sleepData}>
                <defs>
                  <linearGradient
                    id="sleepGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#14B8A6"
                      stopOpacity={0.5}
                    />

                    <stop
                      offset="100%"
                      stopColor="#14B8A6"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="rgba(255,255,255,0.05)"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#64748B",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#14B8A6"
                  fill="url(#sleepGradient)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div
        className="
          glass
          mt-10
          rounded-3xl
          border
          border-white/10
          p-8
        "
      >
        <p className="text-sm text-slate-500">
          AI Insights
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Weekly Summary
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Your sleep quality improved by 14% this week.",
            "Heart rate stability indicates healthy recovery.",
            "AI recommends increasing hydration and activity.",
          ].map((insight) => (
            <div
              key={insight}
              className="
                rounded-2xl
                border
                border-white/5
                bg-white/[0.03]
                p-5
              "
            >
              <p className="text-slate-300 leading-relaxed">
                {insight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}