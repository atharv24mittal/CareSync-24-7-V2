"use client";

import {
  FileText,
  Upload,
  Shield,
  Brain,
} from "lucide-react";

const records = [
  {
    title: "Blood Test Report.pdf",
    date: "May 26, 2026",
    summary:
      "Hemoglobin slightly low. Vitamin D deficiency detected.",
    status: "Analyzed",
  },

  {
    title: "MRI Scan Results.pdf",
    date: "May 19, 2026",
    summary:
      "No critical abnormalities detected. Mild sinus inflammation.",
    status: "Reviewed",
  },

  {
    title: "Prescription.pdf",
    date: "May 11, 2026",
    summary:
      "AI identified 2 medications and dosage schedule.",
    status: "Processed",
  },
];

export default function RecordsPage() {
  return (
    <main className="min-h-screen bg-background p-8 text-white">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Secure Medical Records
          </p>

          <h1 className="mt-2 font-heading text-5xl font-bold">
            Health Records
          </h1>
        </div>

        <button
          className="
            hover-lift
            smooth-transition
            flex
            items-center
            gap-3
            rounded-2xl
            bg-primary
            px-6
            py-4
            font-semibold
            text-white
          "
        >
          <Upload className="h-5 w-5" />

          Upload Record
        </button>
      </div>

      {/* Upload Zone */}
      <div
        className="
          glass
          rounded-[32px]
          border
          border-dashed
          border-white/10
          p-12
          text-center
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-primary/10
          "
        >
          <Upload className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mt-6 text-3xl font-bold">
          Upload Medical Reports
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          Upload prescriptions, blood reports, MRI scans,
          or health documents. CareSync AI will summarize
          and organize them intelligently.
        </p>

        <button
          className="
            hover-lift
            smooth-transition
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-6
            py-4
            font-medium
            text-white
            hover:bg-white/[0.06]
          "
        >
          Choose Files
        </button>
      </div>

      {/* AI Features */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Brain,
            title: "AI Summaries",
            desc: "Instant simplified explanations of medical reports.",
          },

          {
            icon: Shield,
            title: "Encrypted Storage",
            desc: "Your records remain private and secure.",
          },

          {
            icon: FileText,
            title: "Smart Organization",
            desc: "Automatically categorized and searchable.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="
              glass
              rounded-3xl
              border
              border-white/10
              p-6
            "
          >
            <feature.icon className="h-8 w-8 text-primary" />

            <h3 className="mt-5 text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 leading-relaxed text-slate-500">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Records List */}
      <div className="mt-12">
        <div className="mb-6">
          <p className="text-sm text-slate-500">
            Uploaded Documents
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Recent Records
          </h2>
        </div>

        <div className="grid gap-5">
          {records.map((record) => (
            <div
              key={record.title}
              className="
                glass
                smooth-transition
                rounded-3xl
                border
                border-white/10
                p-6
                hover:border-primary/20
              "
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                    "
                  >
                    <FileText className="h-7 w-7 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {record.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Uploaded on {record.date}
                    </p>

                    <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                      {record.summary}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-emerald-400
                  "
                >
                  {record.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}