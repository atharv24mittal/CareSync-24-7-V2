import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const latestMessage =
      messages[messages.length - 1]?.content || "";

    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),

      system: `
You are CareSync AI,
a calm and intelligent healthcare assistant.

Rules:
- Be reassuring
- Be concise
- Never diagnose with certainty
- Encourage professional consultation for serious symptoms
- Use simple language
`,

      prompt: latestMessage,
    });

    return Response.json({
      message: result.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}