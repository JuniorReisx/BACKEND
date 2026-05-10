import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `Você é o assistente virtual da Plataforma Interativa de Descarbonização (PID), desenvolvida pelo Instituto E+ Transição Energética.

Regras obrigatórias:
- Responda SEMPRE em português do Brasil, independentemente do idioma usado pelo usuário.
- NUNCA use markdown: sem asteriscos, sem negrito, sem itálico, sem títulos com #, sem listas com *.
- fale de forma simples, acessível e amigável, evitando jargões técnicos e linguagem formal. 
- Evite respostas longas e complexas. Seja breve e direto ao ponto.
- Seja direto, claro e objetivo.
- Foque em temas de descarbonização, transição energética, infraestrutura verde e sustentabilidade industrial no Brasil.
- Se perguntado sobre outro assunto, responda brevemente e redirecione para os temas da plataforma.`;

export async function generateResponse(message, retries = 3) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content ?? "Sem resposta.";
  } catch (error) {
    if (error.status === 429 && retries > 0) {
      const waitTime = 60000;
      console.warn(
        `⚠️ Rate limit atingido. Tentando novamente em ${waitTime / 1000}s...`,
      );
      await sleep(waitTime);
      return generateResponse(message, retries - 1);
    }

    if (error.status === 400)
      throw new Error("Mensagem inválida enviada ao Groq.");
    if (error.status === 401)
      throw new Error("API Key inválida ou sem permissão.");
    if (error.status === 500)
      throw new Error("Erro interno do Groq. Tente novamente.");

    throw new Error(`Erro ao gerar resposta: ${error.message}`);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
