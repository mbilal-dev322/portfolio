import { NextResponse } from "next/server";
import { profile, skills, experience, projects, education } from "@/lib/cv";

const resumeContext = `
Name: ${profile.name}
Role: ${profile.role}
Summary: ${profile.summary}
Location: ${profile.location}
Email: ${profile.email}

Skills:
${skills.map((g) => `- ${g.category}: ${g.skills.join(", ")}`).join("\n")}

Experience:
${experience
  .map(
    (e) =>
      `- ${e.role} @ ${e.company} (${e.location}, ${e.period}):\n${e.points
        .map((p) => `  • ${p}`)
        .join("\n")}`
  )
  .join("\n")}

Projects:
${projects
  .map(
    (p) =>
      `- ${p.name} — ${p.subtitle} (${p.period}). Stack: ${p.stack}.\n${p.points
        .map((pt) => `  • ${pt}`)
        .join("\n")}`
  )
  .join("\n")}

Education:
${education.map((e) => `- ${e.degree}, ${e.school} (${e.period})`).join("\n")}
`.trim();

const systemPrompt = `You are the AI assistant on ${profile.name}'s portfolio website. Answer questions about ${profile.name}'s experience, skills, projects, and education based ONLY on the resume below. If a question is outside the resume, say you can only answer questions about ${profile.name}'s professional background. Keep answers concise (under 120 words), professional, and friendly. Write in first person as ${profile.name}'s assistant, e.g. "Bilal has..." — never invent experience.

RESUME:
${resumeContext}`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The AI demo needs an OPENAI_API_KEY to run." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const message =
    typeof (body as { message?: unknown })?.message === "string"
      ? (body as { message: string }).message.trim().slice(0, 1000)
      : "";
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.4,
      }),
    });
    if (!res.ok) {
      throw new Error(`OpenAI API returned ${res.status}`);
    }
    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error("Empty response");
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Ask API error", err);
    return NextResponse.json(
      { error: "The AI assistant is unavailable right now. Please try again later." },
      { status: 502 }
    );
  }
}
