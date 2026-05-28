import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function POST(req: Request) {
  const {
    symptoms,
    duration,
    severity,
  } = await req.json();

  const result = await generateText({
    model: groq("llama-3.3-70b-versatile"),

    system: `
You are CareSync AI,
a calm and intelligent healthcare assistant.

Rules:
- Never diagnose with certainty
- Be reassuring
- Mention urgency level
- Recommend professional help for serious symptoms
- Use simple language
- Keep response concise
`,

    prompt: `
Symptoms: ${symptoms}
Duration: ${duration}
Severity: ${severity}

Analyze these symptoms and provide:
1. Possible explanation
2. Urgency level
3. Recommended next steps
`,
  });

  return Response.json({
    result: result.text,
  });
}