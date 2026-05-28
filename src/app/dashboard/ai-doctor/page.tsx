"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function AIDoctorPage() {
  const [messages, setMessages] = useState<
    {
      role: "user" | "assistant";
      content: string;
    }[]
  >([]);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleSendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: input,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    setInput("");

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      setMessages([
        ...updatedMessages,

        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="hidden w-80 border-r border-white/10 bg-white/[0.02] p-6 lg:flex lg:flex-col">
          <h2 className="font-heading text-2xl font-bold">
            AI Doctor
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "Headache and fatigue",
              "Chest pain analysis",
              "Sleep quality",
              "Nutrition guidance",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const userMessage = {
                    role: "user" as const,
                    content: item,
                  };

                  const updatedMessages = [...messages, userMessage];

                  setMessages(updatedMessages);

                  setIsLoading(true);

                  fetch("/api/chat", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      messages: updatedMessages,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      setMessages([
                        ...updatedMessages,
                        {
                          role: "assistant",
                          content: data.message,
                        },
                      ]);
                    })
                    .catch((error) => {
                      console.error(error);
                    })
                    .finally(() => {
                      setIsLoading(false);
                    });
                }}
                className="
                  smooth-transition
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-4
                  text-left
                  text-sm
                  text-slate-400
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Chat */}
        <section className="flex flex-1 flex-col">
          {/* Header */}
          <div className="border-b border-white/10 px-6 py-5">
            <h1 className="font-heading text-3xl font-bold">
              CareSync AI Doctor
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Describe your symptoms and receive AI-powered guidance.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="mx-auto flex max-w-4xl flex-col gap-6">
              {messages.length === 0 && (
                <div className="mt-20 text-center">
                  <h2 className="font-heading text-4xl font-bold">
                    How are you feeling today?
                  </h2>

                  <p className="mt-4 text-slate-500">
                    Describe symptoms, upload reports, or ask health-related questions.
                  </p>

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {[
                      "I have a headache",
                      "Analyze my symptoms",
                      "Explain blood test results",
                      "Sleep improvement tips",
                    ].map((chip) => (
                      <button
                        key={chip}
                        onClick={() => {
                          const userMessage = {
                            role: "user" as const,
                            content: chip,
                          };

                          const updatedMessages = [...messages, userMessage];

                          setMessages(updatedMessages);

                          setIsLoading(true);

                          fetch("/api/chat", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              messages: updatedMessages,
                            }),
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              setMessages([
                                ...updatedMessages,
                                {
                                  role: "assistant",
                                  content: data.message,
                                },
                              ]);
                            })
                            .catch((error) => {
                              console.error(error);
                            })
                            .finally(() => {
                              setIsLoading(false);
                            });
                        }}
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-4
                          py-3
                          text-sm
                          text-slate-400
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-2xl rounded-3xl px-5 py-4 ${
                      message.role === "user"
                        ? "bg-primary text-white"
                        : "glass border border-white/10 text-slate-200"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-3 text-slate-400">
                  <Loader2 className="h-5 w-5 animate-spin" />

                  <p>CareSync AI is thinking...</p>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="mx-auto flex max-w-4xl items-end gap-4"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your symptoms..."
                rows={1}
                className="
                  min-h-[60px]
                  flex-1
                  resize-none
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

              <button
                type="submit"
                disabled={isLoading}
                onClick={handleSendMessage}
                className="
                  hover-lift
                  smooth-transition
                  rounded-2xl
                  bg-primary
                  px-6
                  py-4
                  font-semibold
                  text-white
                  disabled:opacity-50
                "
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}