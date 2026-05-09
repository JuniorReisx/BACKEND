import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateResponse(message, retries = 3) {
  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile', // ou 'mixtral-8x7b-32768', 'gemma2-9b-it'
      messages: [
        { role: 'user', content: message }
      ],
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content ?? 'Sem resposta.';

  } catch (error) {
    // Cota excedida — tenta novamente
    if (error.status === 429 && retries > 0) {
      const waitTime = 60000;
      console.warn(`⚠️ Rate limit atingido. Tentando novamente em ${waitTime / 1000}s...`);
      await sleep(waitTime);
      return generateResponse(message, retries - 1);
    }

    if (error.status === 400) throw new Error('Mensagem inválida enviada ao Groq.');
    if (error.status === 401) throw new Error('API Key inválida ou sem permissão.');
    if (error.status === 500) throw new Error('Erro interno do Groq. Tente novamente.');

    throw new Error(`Erro ao gerar resposta: ${error.message}`);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}