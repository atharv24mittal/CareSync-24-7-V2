"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function SymptomsPage() {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("Medium");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function analyzeSymptoms() {
    if (!symptoms) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/symptoms", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          symptoms,
          duration,
          severity,
        }),
      });

      const data = await response.json();

      setResult(data.result);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-background p-8 text-white">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-slate-500">
          AI Symptom Intelligence
        </p>

        <h1 className="mt-2 font-heading text-5xl font-bold">
          Symptom Analyzer
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Side */}
        <div
          className="
            glass
            rounded-[32px]
            border
            border-white/10
            p-8
          "
        >
          <h2 className="text-3xl font-bold">
            Describe Your Symptoms
          </h2>

          <p className="mt-3 text-slate-500">
            Enter your symptoms and receive AI-powered
            medical guidance.
          </p>

          {/* Symptoms */}
          <div className="mt-8">
            <label className="mb-3 block text-sm text-slate-400">
              Symptoms
            </label>

            <textarea
              value={symptoms}
              onChange={(e) =>
                setSymptoms(e.target.value)
              }
              placeholder="Example: headache, fever, nausea..."
              rows={6}
              className="
                w-full
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-white
                outline-none
                placeholder:text-slate-500
                focus:border-primary
              "
            />
          </div>

          {/* Duration */}
          <div className="mt-6">
            <label className="mb-3 block text-sm text-slate-400">
              Duration
            </label>

            <input
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
              placeholder="Example: 2 days"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-white
                outline-none
                placeholder:text-slate-500
                focus:border-primary
              "
            />
          </div>

          {/* Severity */}
          <div className="mt-6">
            <label className="mb-3 block text-sm text-slate-400">
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) =>
                setSeverity(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-white
                outline-none
                focus:border-primary
              "
            >
              <option className="bg-black">
                Low
              </option>

              <option className="bg-black">
                Medium
              </option>

              <option className="bg-black">
                High
              </option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={analyzeSymptoms}
            disabled={loading}
            className="
              hover-lift
              smooth-transition
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-primary
              px-6
              py-4
              font-semibold
              text-white
              disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>Analyze Symptoms</>
            )}
          </button>
        </div>

        {/* Output Side */}
        <div
          className="
            glass
            rounded-[32px]
            border
            border-white/10
            p-8
          "
        >
          <h2 className="text-3xl font-bold">
            AI Analysis
          </h2>

          <p className="mt-3 text-slate-500">
            Personalized healthcare insights generated by AI.
          </p>

          {!result && !loading && (
            <div className="mt-16 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-4xl
                "
              >
                🧠
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Waiting for analysis
              </h3>

              <p className="mt-4 text-slate-500">
                Enter symptoms to receive AI-generated insights.
              </p>
            </div>
          )}

          {result && (
            <div
              className="
                mt-8
                rounded-3xl
                border
                border-white/5
                bg-white/[0.03]
                p-6
              "
            >
              <p className="leading-relaxed whitespace-pre-wrap text-slate-200">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}