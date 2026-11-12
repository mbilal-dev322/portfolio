"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What AI projects has Bilal built?",
  "Which LLM tools does he use?",
  "Summarize his experience",
];

export default function AskAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;
    setInput("");
    setError("");
    setMessages((m) => [...m, { role: "user", content: message }]);
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask AI about my resume"
        className="fixed bottom-5 right-5 z-50 flex h-13 items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:scale-105"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83A4 4 0 0 1 20 12.5c0 1.33-.65 2.5-1.64 3.23.4.63.64 1.37.64 2.27a4 4 0 0 1-7 2.65A4 4 0 0 1 5 18c0-.9.24-1.64.64-2.27A3.99 3.99 0 0 1 4 12.5a4 4 0 0 1 5.17-3.67A4 4 0 0 1 12 2Z" />
        </svg>
        {open ? "Close" : "Ask my AI"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[480px] w-[min(360px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-2xl">
          <div className="border-b border-border-subtle p-4">
            <p className="font-semibold">Resume Assistant</p>
            <p className="text-xs text-muted">
              AI-powered · answers from Bilal&apos;s CV
            </p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted">
                  Hi! Ask me anything about Bilal&apos;s experience, skills or projects.
                </p>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-lg border border-border-subtle px-3 py-2 text-left text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-accent text-white"
                    : "bg-background text-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex gap-1 px-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-bounce rounded-full bg-accent/60"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-border-subtle p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects…"
              className="min-w-0 flex-1 rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
