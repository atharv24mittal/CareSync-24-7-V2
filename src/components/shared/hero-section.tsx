"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-32">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute top-[-120px] left-[-100px] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />

        <div
          className="aurora absolute bottom-[-200px] right-[-120px] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
          style={{ animationDelay: "6s" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="container-width">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />

              <span className="text-sm font-medium text-accent">
                AI-Powered Healthcare Intelligence
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-[-3px] text-white md:text-7xl">
              Your AI Health
              <br />

              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                Copilot,
              </span>

              <br />

              Available 24/7
            </h1>

            {/* Subheading */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Analyze symptoms, understand medical reports,
              track vitals, and receive intelligent healthcare
              guidance — all through one calm and intelligent
              AI platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="
                  hover-lift
                  smooth-transition
                  rounded-2xl
                  bg-primary
                  px-7
                  py-4
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_10px_40px_rgba(37,99,235,0.45)]
                  hover:bg-blue-500
                "
              >
                Start Free →
              </Link>

              <button
                className="
                  smooth-transition
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-7
                  py-4
                  text-base
                  font-medium
                  text-white
                  backdrop-blur-xl
                  hover:bg-white/[0.06]
                "
              >
                Watch Demo
              </button>
            </div>

            {/* Trust Line */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div>HIPAA-ready infrastructure</div>

              <div className="h-1 w-1 rounded-full bg-slate-700" />

              <div>AI-powered insights</div>

              <div className="h-1 w-1 rounded-full bg-slate-700" />

              <div>24/7 intelligent monitoring</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mt-20">
      {/* Floating Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />

      {/* Main Card */}
      <div
        className="
          glass
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          p-6
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* Window Top */}
        <div className="mb-6 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="ml-auto text-xs text-slate-500">
            CareSync Intelligence
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-5">
          {/* AI Chat */}
          <div className="rounded-3xl border border-white/5 bg-black/20 p-5">
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-primary
                  to-accent
                  text-sm
                  font-bold
                  text-white
                "
              >
                AI
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-500">
                  CareSync Assistant
                </p>

                <div className="mt-3 rounded-2xl bg-white/[0.04] p-4 text-sm leading-relaxed text-slate-300">
                  Your symptoms may indicate mild dehydration.
                  Increase fluid intake and monitor your
                  temperature for the next few hours.
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-5">
            {/* Heart Rate */}
            <div className="rounded-3xl border border-white/5 bg-primary/[0.08] p-5">
              <p className="text-sm text-slate-500">
                Heart Rate
              </p>

              <div className="mt-3 flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white">
                  72
                </h3>

                <span className="pb-1 text-sm text-slate-500">
                  BPM
                </span>
              </div>

              <div className="mt-2 text-sm text-emerald-400">
                Stable condition
              </div>
            </div>

            {/* Sleep */}
            <div className="rounded-3xl border border-white/5 bg-accent/[0.08] p-5">
              <p className="text-sm text-slate-500">
                Sleep Quality
              </p>

              <div className="mt-3 flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white">
                  8.2
                </h3>

                <span className="pb-1 text-sm text-slate-500">
                  hrs
                </span>
              </div>

              <div className="mt-2 text-sm text-accent">
                Healthy recovery
              </div>
            </div>
          </div>

          {/* Bottom Analytics */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Weekly Health Score
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-white">
                    84
                  </h3>

                  <span className="pb-1 text-sm text-slate-500">
                    /100
                  </span>
                </div>
              </div>

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-accent/30
                  bg-accent/10
                  text-xl
                  font-bold
                  text-accent
                "
              >
                ↑
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div
        className="
          glass
          absolute
          -left-10
          top-10
          hidden
          rounded-2xl
          border
          border-white/10
          px-4
          py-3
          lg:block
        "
      >
        <p className="text-xs text-slate-500">
          AI Accuracy
        </p>

        <h4 className="mt-1 text-2xl font-bold text-white">
          98.2%
        </h4>
      </div>

      <div
        className="
          glass
          absolute
          -bottom-8
          right-[-20px]
          hidden
          rounded-2xl
          border
          border-white/10
          px-4
          py-3
          lg:block
        "
      >
        <p className="text-xs text-slate-500">
          Active Monitoring
        </p>

        <h4 className="mt-1 text-lg font-semibold text-accent">
          Enabled
        </h4>
      </div>
    </div>
  );
}