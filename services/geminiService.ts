
import { GoogleGenAI } from "@google/genai";
import { RAFA_BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithAssistant = async (message: string) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are an AI representative for Rafa Rodrigues, a Senior Software Engineer.
    Keep your tone professional yet conversational and tech-savvy.
    Rafa's Bio: ${RAFA_BIO.en.tagline}
    Location: ${RAFA_BIO.en.location}
    Tech Stack: ${RAFA_BIO.en.techStack.join(', ')}
    Specialties: Full-stack development, Performance optimization, and Cloud architecture.
    Answer questions about Rafa's work, tech stack, or career briefly.
    If asked for contact, suggest the 'Book a Call' link or LinkedIn.
    Do not make up personal facts not provided here.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting to my matrix right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently offline. Please try again later or contact Rafa directly.";
  }
};
