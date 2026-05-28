import Link from "next/link";

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "AI Doctor", href: "/dashboard/ai-doctor" },
    { label: "Analytics", href: "/dashboard/analytics" },
    { label: "Records", href: "/dashboard/records" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#050b1a]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent" style={{fontFamily:"'Syne',sans-serif"}}>
          CareSync 24/7
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all">Sign In</Link>
          <Link href="/dashboard" className="bg-[#1d6ef5] hover:bg-[#2979ff] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(29,110,245,.4)] hover:shadow-[0_6px_28px_rgba(29,110,245,.6)] transition-all hover:-translate-y-px">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden text-center">
      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-[#1d6ef5]/[0.15] blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#00d4aa]/[0.1] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#1d6ef5]/[0.06] blur-[80px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",backgroundSize:"60px 60px"}} />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#00d4aa]/25 bg-[#00d4aa]/10 px-4 py-1.5 mb-8">
        <span className="h-1.5 w-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
        <span className="text-[#00d4aa] text-sm font-medium">AI-Powered Healthcare Intelligence · Beta</span>
      </div>

      {/* Headline */}
      <h1 className="font-extrabold text-[clamp(48px,9vw,88px)] leading-[1.04] tracking-[-3px] max-w-4xl" style={{fontFamily:"'Syne',sans-serif"}}>
        Your AI Doctor{" "}
        <span className="bg-gradient-to-r from-[#1d6ef5] to-[#00d4aa] bg-clip-text text-transparent">
          Available 24/7
        </span>
      </h1>

      <p className="mt-6 text-lg text-slate-400 max-w-[520px] leading-relaxed">
        Analyze symptoms, decode medical reports, track vitals, and get expert-level healthcare guidance — powered by AI.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
        <Link href="/dashboard" className="bg-[#1d6ef5] hover:bg-[#2979ff] text-white font-semibold text-base px-7 py-3.5 rounded-2xl shadow-[0_8px_32px_rgba(29,110,245,.45)] hover:shadow-[0_12px_40px_rgba(29,110,245,.6)] transition-all hover:-translate-y-0.5">
          Start for Free →
        </Link>
        <Link href="/dashboard/ai-doctor" className="text-white font-medium text-base px-7 py-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm transition-all">
          Watch Demo ▷
        </Link>
      </div>

      {/* Demo Card */}
      <div className="mt-16 w-full max-w-3xl">
        <div className="rounded-3xl border border-white/[0.08] bg-[#0a1628]/80 p-6 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,.5),0_0_0_1px_rgba(255,255,255,.04)]">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-slate-500 ml-auto">CareSync AI Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Chat column */}
            <div className="bg-[#050b1a] rounded-2xl border border-white/[0.06] p-4 flex flex-col gap-3">
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1d6ef5] to-[#00d4aa] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">AI</div>
                <div className="bg-white/[0.05] rounded-xl p-2.5 text-xs leading-relaxed text-slate-300">Hello! I'm your AI health assistant. How are you feeling today?</div>
              </div>
              <div className="flex gap-2.5 items-start flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[9px]">You</div>
                <div className="bg-[#1d6ef5]/25 rounded-xl p-2.5 text-xs leading-relaxed">I have a headache and feel tired since morning.</div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1d6ef5] to-[#00d4aa] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">AI</div>
                <div className="bg-white/[0.05] rounded-xl p-2.5 text-xs leading-relaxed text-slate-300">
                  Likely mild dehydration or tension headache. Rest + 2–3 glasses of water.{" "}
                  <span className="text-[#00d4aa]">Urgency: Low ↓</span>
                </div>
              </div>
              {/* Typing dots — FIXED with inline animation styles */}
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1d6ef5] to-[#00d4aa] flex-shrink-0 opacity-40" />
                <div className="bg-white/[0.05] rounded-xl px-3 py-3 flex gap-1 items-center">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block"
                      style={{
                        animation: `bounce 0.8s ease-in-out ${delay}ms infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Metrics column */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#050b1a] rounded-2xl border border-white/[0.06] p-4">
                <div className="text-xs text-slate-500 mb-2">❤ Heart Rate</div>
                <div className="font-bold text-2xl" style={{fontFamily:"'Syne',sans-serif"}}>72 <span className="text-sm text-slate-500 font-normal">BPM</span></div>
                <div className="text-xs text-[#00d4aa] mt-1">↑ Normal range</div>
                {/* ECG SVG — FIXED with scroll animation */}
                <svg viewBox="0 0 180 36" className="w-full mt-2 overflow-hidden">
                  <defs>
                    <linearGradient id="ecg" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1d6ef5" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00d4aa" />
                    </linearGradient>
                  </defs>
                  {/* Double the points so the scroll loop is seamless */}
                  <g style={{ animation: "ecgScroll 3s linear infinite" }}>
                    <polyline
                      fill="none"
                      stroke="url(#ecg)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      points="
                        0,18 14,18 18,4 20,32 22,18 38,18 52,18 56,7 58,30 60,18 76,18
                        90,18 94,4 96,32 98,18 114,18 128,18 132,7 134,30 136,18 152,18
                        166,18 170,4 172,32 174,18 180,15
                        180,18 194,18 198,4 200,32 202,18 218,18 232,18 236,7 238,30 240,18 256,18
                        270,18 274,4 276,32 278,18 294,18 308,18 312,7 314,30 316,18 332,18
                        346,18 350,4 352,32 354,18 360,15
                      "
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gradient-to-br from-[#1d6ef5]/[0.12] to-[#00d4aa]/[0.08] rounded-2xl border border-[#1d6ef5]/20 p-4">
                <div className="text-xs text-slate-500 mb-3">🧠 Health Score</div>
                <div className="flex items-center gap-3 mb-3">
                  <svg width="52" height="52" viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="5"/>
                    <circle cx="26" cy="26" r="21" fill="none" stroke="url(#ring)" strokeWidth="5"
                      strokeDasharray="131.9" strokeDashoffset="26" strokeLinecap="round" transform="rotate(-90 26 26)"/>
                    <defs>
                      <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1d6ef5"/><stop offset="100%" stopColor="#00d4aa"/>
                      </linearGradient>
                    </defs>
                    <text x="26" y="30" textAnchor="middle" fill="#00d4aa" fontSize="11" fontWeight="bold">80</text>
                  </svg>
                  <div>
                    <div className="font-bold text-xl text-[#00d4aa]" style={{fontFamily:"'Syne',sans-serif"}}>80<span className="text-slate-500 text-sm font-normal">/100</span></div>
                    <div className="text-xs text-slate-400">Good health</div>
                  </div>
                </div>
                {[["Sleep","82%","#00d4aa"],["Activity","65%","#1d6ef5"],["Nutrition","74%","#f5c842"]].map(([label,pct,color])=>(
                  <div key={label} className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5">
                    <span className="w-12 shrink-0">{label}</span>
                    <div className="flex-1 h-1 bg-white/[0.08] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{width:pct,background:color}} />
                    </div>
                    <span className="w-8 text-right">{pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-10 w-full max-w-3xl grid grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
        {[["50K+","Active Patients"],["98.2%","AI Accuracy"],["24/7","Always Available"],["120+","Specialties"]].map(([num,label],i)=>(
          <div key={i} className={`flex flex-col items-center py-5 ${i<3?"border-r border-white/[0.07]":""}`}>
            <span className="font-extrabold text-2xl bg-gradient-to-b from-white to-[#00d4aa] bg-clip-text text-transparent" style={{fontFamily:"'Syne',sans-serif"}}>{num}</span>
            <span className="text-slate-500 text-xs mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
const features = [
  { icon:"🧠", color:"rgba(29,110,245,.15)", stroke:"#1d6ef5", name:"AI Doctor Assistant", desc:"Instant, empathetic medical guidance powered by LLaMA 3. Like a knowledgeable doctor in your pocket, always.", tag:"Live" },
  { icon:"🔬", color:"rgba(0,212,170,.12)", stroke:"#00d4aa", name:"Symptom Analyzer", desc:"AI triage engine ranks possible conditions by probability and urgency — Emergency, High, Medium, or Low.", tag:"AI-Powered" },
  { icon:"📊", color:"rgba(245,200,66,.1)", stroke:"#f5c842", name:"Health Analytics", desc:"Real-time vitals tracking with beautiful charts. Heart rate, blood sugar, sleep, and steps — all visualized.", tag:"Charts" },
  { icon:"📄", color:"rgba(255,107,107,.1)", stroke:"#ff6b6b", name:"OCR Document Reader", desc:"Upload any prescription or lab report. AI reads, summarizes, and flags abnormal values instantly.", tag:"Vision AI" },
  { icon:"🎙", color:"rgba(186,121,255,.1)", stroke:"#ba79ff", name:"Voice AI Assistant", desc:"Speak naturally. Whisper transcribes symptoms, the AI responds, and reads the answer back to you.", tag:"Whisper" },
  { icon:"👨‍👩‍👧", color:"rgba(29,110,245,.12)", stroke:"#1d6ef5", name:"Family Health Hub", desc:"Manage your entire family's health in one account. Separate profiles, records, and reminders for each member.", tag:"Multi-Profile" },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[2px] uppercase text-[#00d4aa] mb-4">Core Features</p>
        <h2 className="font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-1.5px] leading-[1.1] max-w-xl" style={{fontFamily:"'Syne',sans-serif"}}>
          Healthcare intelligence,{" "}
          <span className="text-[#00d4aa]">reimagined.</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-[500px] leading-relaxed">
          Everything your patients need in one platform, powered by the most advanced medical AI models.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.name}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 overflow-hidden
                transition-all duration-300 hover:border-[#1d6ef5]/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,.3)] cursor-default">
              {/* hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(29,110,245,.07),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{background:f.color}}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-[17px] mb-2" style={{fontFamily:"'Syne',sans-serif"}}>{f.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                <span className="inline-block mt-5 text-[11px] font-semibold tracking-widest uppercase text-[#1d6ef5]">{f.tag} →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const steps = [
  { num:"01", title:"Create Your Profile", desc:"Sign up and enter your medical history, allergies, and current medications. Takes under 2 minutes." },
  { num:"02", title:"Talk to Your AI Doctor", desc:"Describe symptoms in plain language or upload reports. Get instant, personalized guidance." },
  { num:"03", title:"Track & Improve", desc:"Monitor your health score over time with AI-generated weekly summaries and recommendations." },
];

function HowItWorksSection() {
  return (
    <section id="ai-doctor" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[2px] uppercase text-[#00d4aa] mb-4">How It Works</p>
        <h2 className="font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-1.5px] leading-[1.1]" style={{fontFamily:"'Syne',sans-serif"}}>
          Three steps to smarter healthcare
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center px-8 group">
              <div className="w-20 h-20 rounded-full border border-white/10 bg-[#0a1628] flex items-center justify-center
                font-extrabold text-2xl relative z-10 mb-6 transition-all duration-300
                group-hover:border-[#1d6ef5]/40 group-hover:bg-[#1d6ef5]/10 group-hover:text-[#1d6ef5]"
                style={{fontFamily:"'Syne',sans-serif"}}>
                {s.num}
              </div>
              <h3 className="font-bold text-[18px] mb-3" style={{fontFamily:"'Syne',sans-serif"}}>{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  { text:"CareSync caught that my fatigue was linked to low iron before my doctor did. The symptom analysis explains its reasoning in a way that actually makes sense.", name:"Priya M.", role:"Software Engineer, Bengaluru", initials:"PM", color:"rgba(29,110,245,.2)", textColor:"#1d6ef5" },
  { text:"I uploaded my father's prescription and within seconds it explained every medicine and warned about a potential interaction. This is genuinely life-saving technology.", name:"Rahul K.", role:"Finance Manager, Mumbai", initials:"RK", color:"rgba(0,212,170,.15)", textColor:"#00d4aa" },
  { text:"The voice assistant is perfect — I just describe how I feel and it gives a complete breakdown. The medicine reminders have made me so much more consistent.", name:"Ananya S.", role:"College Student, Delhi", initials:"AS", color:"rgba(186,121,255,.15)", textColor:"#ba79ff" },
];

function TestimonialsSection() {
  return (
    <section id="analytics" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[2px] uppercase text-[#00d4aa] mb-4">Testimonials</p>
        <h2 className="font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-1.5px] leading-[1.1] max-w-xl" style={{fontFamily:"'Syne',sans-serif"}}>
          Trusted by thousands of patients
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7
                hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#f5c842] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[15px] text-slate-300 leading-[1.75] mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{background:t.color,color:t.textColor,fontFamily:"'Syne',sans-serif"}}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="pricing" className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1d6ef5]/[0.12] to-[#00d4aa]/[0.07] border border-[#1d6ef5]/20 rounded-[32px] px-10 py-20 relative overflow-hidden">
        {/* Inner glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#1d6ef5]/20 blur-[60px] rounded-full" />
        </div>
        <p className="text-xs font-semibold tracking-[2px] uppercase text-[#00d4aa] mb-4">Get Started</p>
        <h2 className="font-extrabold text-[clamp(32px,5vw,56px)] tracking-[-1.5px] leading-[1.1] mb-5" style={{fontFamily:"'Syne',sans-serif"}}>
          Your health deserves<br />AI-level attention
        </h2>
        <p className="text-slate-400 text-lg max-w-[480px] mx-auto leading-relaxed mb-10">
          Join 50,000+ users who trust CareSync 24/7 for smarter, faster, always-available healthcare guidance.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/dashboard"
            className="bg-[#1d6ef5] hover:bg-[#2979ff] text-white font-semibold text-base px-8 py-3.5 rounded-2xl
              shadow-[0_8px_32px_rgba(29,110,245,.45)] hover:shadow-[0_12px_40px_rgba(29,110,245,.6)]
              transition-all hover:-translate-y-0.5">
            Start Free — No Credit Card
          </Link>
          <Link href="/dashboard/ai-doctor" className="text-white font-medium text-base px-8 py-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] px-8 py-10 flex flex-wrap items-center justify-between gap-6">
      <span className="font-extrabold text-base bg-gradient-to-r from-white to-[#00d4aa] bg-clip-text text-transparent" style={{fontFamily:"'Syne',sans-serif"}}>
        CareSync 24/7
      </span>
      <div className="flex gap-6 flex-wrap">
        {["Privacy","Terms","Docs","GitHub","Contact"].map(l=>(
          <Link key={l} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l}</Link>
        ))}
      </div>
      <span className="text-slate-600 text-sm">© 2025 CareSync 24/7. All rights reserved.</span>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b1a] text-white overflow-x-hidden">
      {/* Global ambient orbs — visible across all sections */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-[700px] w-[700px] rounded-full bg-[#1d6ef5]/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 -right-20 h-[600px] w-[600px] rounded-full bg-[#00d4aa]/[0.06] blur-[120px]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}} />
      </div>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}