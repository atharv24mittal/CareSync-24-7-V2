<div align="center">

<img src="https://care-sync-24-7-v2.vercel.app/favicon.ico" width="64" height="64" alt="CareSync Logo" />

# CareSync 24/7

### AI-Powered Healthcare Copilot

**Analyze symptoms · Decode medical reports · Track vitals · Get expert AI guidance**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-care--sync--24--7--v2.vercel.app-0070f3?style=for-the-badge&logo=vercel&logoColor=white)](https://care-sync-24-7-v2.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06b6d4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## ✦ What is CareSync 24/7?

CareSync 24/7 is a **production-grade AI healthcare platform** that gives everyone access to intelligent, always-available medical guidance. Built like a funded health-tech startup — not a college project.

Think of it as your personal AI doctor: it listens to your symptoms, reads your prescriptions, tracks your vitals, and gives you clear, empathetic guidance — 24 hours a day, 7 days a week.

---

## ✦ Live Demo

🌐 **[care-sync-24-7-v2.vercel.app](https://care-sync-24-7-v2.vercel.app/)**

---

## ✦ Core Features

| Feature | Description | Status |
|---|---|---|
| 🧠 **AI Doctor Assistant** | LLaMA 3-powered medical chat with streaming responses | ✅ Live |
| 🔬 **Symptom Analyzer** | AI triage engine with urgency classification (Emergency → Low) | ✅ Live |
| 📊 **Health Analytics** | Real-time vitals dashboard with interactive charts | ✅ Live |
| 📄 **OCR Document Reader** | Upload prescriptions & lab reports for instant AI summarization | ✅ Live |
| 🎙 **Voice AI Assistant** | Whisper-powered voice input + Web Speech API text-to-speech | 🔨 Building |
| 👨‍👩‍👧 **Family Health Hub** | Multi-profile health management under one account | 🔨 Building |
| 💊 **Medicine Reminders** | Smart reminders with PWA push notifications | 🔨 Building |
| 🚨 **Emergency Alerts** | AI-driven urgency detection with emergency escalation | 🔨 Building |
| 🏥 **Doctor Dashboard** | Role-based portal for doctors with patient queue management | 🔨 Building |
| 📅 **Appointment Booking** | Calendar-based booking with specialty selection | 🔨 Building |

---

## ✦ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components, Server Actions
- **[TypeScript](https://www.typescriptlang.org/)** — Strict typing throughout
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)** — Premium typography pair
- **[Framer Motion](https://www.framer.com/motion/)** — Animations & transitions *(planned)*
- **[Recharts](https://recharts.org/)** — Health analytics charts
- **[shadcn/ui](https://ui.shadcn.com/)** — Component system

### Backend & Database
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** — Edge-ready API layer
- **[Prisma ORM](https://www.prisma.io/)** — Type-safe database access
- **[Neon PostgreSQL](https://neon.tech/)** — Serverless Postgres (free tier)
- **[Upstash Redis](https://upstash.com/)** — Rate limiting & caching (free tier)

### AI & Intelligence
- **[Groq API](https://groq.com/)** — LLaMA 3.1 70B for ultra-fast AI responses
- **[Gemini API](https://ai.google.dev/)** — Vision AI for OCR & document analysis
- **[Whisper](https://openai.com/research/whisper)** — Voice transcription
- **[LangChain](https://www.langchain.com/)** — AI orchestration & RAG pipeline *(planned)*
- **[Pinecone](https://www.pinecone.io/)** — Vector DB for medical knowledge RAG *(planned)*

### Auth & Storage
- **[Clerk](https://clerk.com/)** — Authentication with role-based access (Patient · Doctor · Admin)
- **[Cloudinary](https://cloudinary.com/)** — Secure medical file uploads

### DevOps
- **[Vercel](https://vercel.com/)** — Deployment & edge functions
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD pipeline

---

## ✦ Project Structure

```
caresync-24-7/
├── app/
│   ├── (marketing)/          # Public landing pages
│   │   └── page.tsx          # Homepage
│   ├── (auth)/               # Clerk auth pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (dashboard)/          # Protected app shell
│   │   ├── layout.tsx        # Sidebar + header
│   │   ├── page.tsx          # Patient overview
│   │   ├── ai-doctor/        # AI chat interface
│   │   ├── symptoms/         # Symptom analyzer
│   │   ├── records/          # Health records + upload
│   │   ├── analytics/        # Health charts dashboard
│   │   ├── reminders/        # Medicine reminders
│   │   ├── appointments/     # Appointment booking
│   │   └── doctor/           # Doctor dashboard (role-gated)
│   ├── api/
│   │   ├── ai/
│   │   │   ├── chat/         # Streaming AI chat endpoint
│   │   │   ├── symptom-analysis/
│   │   │   └── voice/        # Whisper transcription
│   │   ├── records/          # Upload + fetch health records
│   │   ├── reminders/        # CRUD reminders
│   │   ├── appointments/     # Booking management
│   │   └── health-metrics/   # Vitals logging
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/               # Navbar, Sidebar, Header
│   ├── home/                 # Landing page sections
│   ├── ai/                   # Chat UI, Voice button
│   ├── symptoms/             # Symptom picker, analysis result
│   ├── records/              # Upload zone, record cards
│   ├── analytics/            # Chart components, health score ring
│   ├── reminders/            # Reminder cards, add form
│   └── ui/                   # shadcn/ui base components
├── lib/
│   ├── ai/
│   │   ├── medical-prompts.ts
│   │   └── document-analysis.ts
│   ├── db/                   # Prisma client
│   ├── cloudinary.ts
│   ├── redis.ts
│   └── notifications.ts
├── hooks/
│   ├── useChat.ts
│   ├── useVoiceRecording.ts
│   └── useTextToSpeech.ts
├── prisma/
│   └── schema.prisma
├── public/
│   └── manifest.json         # PWA manifest
├── middleware.ts              # Clerk auth + route protection
└── next.config.ts
```

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm i -g pnpm`)
- Accounts on: [Neon](https://neon.tech), [Clerk](https://clerk.com), [Groq](https://groq.com), [Cloudinary](https://cloudinary.com)

### 1. Clone the repo

```bash
git clone https://github.com/atharv24mittal/CareSync-24-7-V2.git
cd CareSync-24-7-V2
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your `.env.local`:

```env
# Database (Neon)
DATABASE_URL="postgresql://..."

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# AI (Groq — free at groq.com)
GROQ_API_KEY="gsk_..."

# AI Vision (Gemini — free at ai.google.dev)
GEMINI_API_KEY="..."

# File Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Cache (Upstash Redis — free at upstash.com)
UPSTASH_REDIS_REST_URL="..."
UPSTASH_REDIS_REST_TOKEN="..."

# Vector DB (Pinecone — free tier)
PINECONE_API_KEY="..."
PINECONE_INDEX="caresync-medical"
```

### 3. Set up the database

```bash
pnpm prisma generate
pnpm prisma db push
```

### 4. Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✦ Deployment

This project is deployed on **Vercel** with zero configuration.

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel --prod
```

Add all environment variables from `.env.local` to your Vercel project dashboard under **Settings → Environment Variables**.

Make sure your `package.json` build script runs Prisma before building:

```json
{
  "scripts": {
    "build": "prisma generate && next build"
  }
}
```

---

## ✦ Roadmap

### ✅ Phase 0 — Foundation
- [x] Next.js 15 App Router setup
- [x] Premium landing page with animated UI demo
- [x] Syne + DM Sans typography system
- [x] Ambient orb + noise texture design system
- [x] Vercel deployment

### 🔨 Phase 1 — MVP (In Progress)
- [ ] Clerk authentication (Patient / Doctor / Admin roles)
- [ ] Patient dashboard with health overview
- [ ] AI Doctor chat with Groq streaming
- [ ] Symptom analyzer with urgency triage

### 📋 Phase 2 — Core Product
- [ ] Health records with Cloudinary upload
- [ ] OCR prescription reader (Gemini Vision)
- [ ] Medicine reminders with PWA notifications
- [ ] Health analytics dashboard (Recharts)

### 🚀 Phase 3 — Advanced AI
- [ ] Voice AI (Whisper + Web Speech API)
- [ ] RAG medical knowledge system (Pinecone + LangChain)
- [ ] AI-generated weekly health reports
- [ ] Medical image analysis architecture

### 🌍 Phase 4 — Scale
- [ ] Doctor dashboard + telemedicine architecture
- [ ] Appointment booking system
- [ ] Family health management
- [ ] Multi-language support
- [ ] Wearable device integration

---

## ✦ AI Architecture

```
User Input (text / voice / image)
        │
        ▼
┌──────────────────┐
│  Input Layer     │  Whisper (voice) · Gemini Vision (image) · Text
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Context Builder │  Patient history + allergies + medications + RAG
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Groq / LLaMA 3  │  Medical reasoning with engineered system prompt
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Response Layer  │  Structured JSON (urgency, conditions, actions)
└────────┬─────────┘
         │
         ▼
    User + DB Save
```

---

## ✦ Contributing

Contributions are welcome. Please open an issue before submitting a PR.

```bash
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

---

## ✦ License

MIT © 2025 [Atharv Mittal](https://github.com/atharv24mittal)

---

<div align="center">

Built with ❤️ and a lot of AI by **Atharv Mittal**

⭐ **Star this repo if you find it useful**

[![GitHub stars](https://img.shields.io/github/stars/atharv24mittal/CareSync-24-7-V2?style=social)](https://github.com/atharv24mittal/CareSync-24-7-V2)

</div>
