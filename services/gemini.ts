
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are RoyalKeys Assistant, a helpful expert in digital software keys, games, and subscriptions. Keep answers concise and helpful. Don't mention you are an AI. You recommend software based on user needs.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the royal servers right now. How else can I help?";
  }
};
