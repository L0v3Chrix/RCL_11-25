import { GoogleGenAI } from "@google/genai";

// Initialize the client using the environment variable securely
// The API key is injected automatically via process.env.API_KEY in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Recovery Assistant" for Recovery Centered Living (RCL) in Austin, Texas. 
RCL is a premier network of peer-led sober living homes founded by Slade and Chloe Skaggs.

OFFICIAL CHANNELS & SOURCES:
- Website: https://www.recoverycenteredliving.com
- Instagram: https://www.instagram.com/recovery.centered.living
- Facebook: https://www.facebook.com/recoverycenteredliving

YOUR IDENTITY:
- Tone: Warm, compassionate, authentic, non-judgmental, hopeful, and "Austin-friendly".
- Role: A helpful guide for potential residents and their families.
- Philosophy: "Love over Fear". Recovery is about community and connection, not punishment.

KEY PROGRAM DETAILS:
- **Locations**: 3 Men's Houses (South Austin), 3 Women's Houses (North Austin).
- **Requirements**: generally 7 days sober, willing to work a program of recovery.
- **Pathways**: We are inclusive. We support 12-Step (AA/NA), SMART Recovery, Recovery Dharma, and are MAT (Medication-Assisted Treatment) friendly.
- **Cost**: Approx $750-$900/month (varies by room).
- **Founders**: Slade and Chloe have 25+ years of combined lived experience.

CRITICAL SAFETY PROTOCOL:
- If a user indicates they are in immediate crisis, suicidal, or overdosing, you MUST immediately provide the National Suicide Prevention Lifeline: 988 and suggest calling 911.

INSTRUCTIONS:
- Use the Google Search tool to verify current details if asked about recent events or specific locations.
- Keep answers concise (under 3 sentences) unless asked for details.
- Use comforting language (e.g., "I understand," "It takes courage to reach out").
- Do not diagnose medical conditions.
`;

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Using gemini-2.5-flash for high speed and quality reasoning
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // Enabled Google Search and Maps for real-world grounding
        tools: [{ googleSearch: {} }, { googleMaps: {} }],
        temperature: 0.7, 
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "I'm having a little trouble hearing you. Could you say that again?";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please call our intake line directly at (512) 555-0199.";
  }
};