# 🤖 PID Assistant API

Backend da aplicação **PID QUIZ · COP30**, responsável por fornecer um assistente virtual com Inteligência Artificial especializado em:

* 🌱 Descarbonização industrial
* ⚡ Transição energética
* 🏭 Sustentabilidade industrial
* 🌎 Infraestrutura verde no Brasil

A API utiliza o modelo `llama-3.3-70b-versatile` por meio da plataforma [Groq](https://groq.com?utm_source=chatgpt.com) para gerar respostas rápidas e contextualizadas em português do Brasil.

---

## 📌 Objetivo

Este backend foi desenvolvido para integrar um chatbot inteligente à Plataforma Interativa de Descarbonização (PID), permitindo que usuários façam perguntas sobre:

* Transição energética no Brasil
* Descarbonização industrial
* Energia renovável
* Emissões de carbono
* Sustentabilidade
* COP30
* Net Zero

---

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org?utm_source=chatgpt.com)
* [Express](https://expressjs.com?utm_source=chatgpt.com)
* [Groq SDK](https://console.groq.com/docs/libraries?utm_source=chatgpt.com#javascript)
* [dotenv](https://www.npmjs.com/package/dotenv?utm_source=chatgpt.com)
* [CORS](https://www.npmjs.com/package/cors?utm_source=chatgpt.com)
* [Nodemon](https://nodemon.io?utm_source=chatgpt.com)

---

## 📦 Dependências

### Produção

* `@google/generative-ai` (opcional para futuras integrações)
* `cors`
* `dotenv`
* `express`
* `groq-sdk`

### Desenvolvimento

* `nodemon`

---

## 📂 Estrutura do Projeto

```bash
backend/
│
├── src/
│   ├── app.js
│   ├── server.js
│   └── services/
│       └── ai.service.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
GROQ_API_KEY=sua_chave_api_aqui
```

Você pode gerar sua chave em:
[Groq Console](https://console.groq.com/keys?utm_source=chatgpt.com)

---

## ▶️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pid-assistant-api.git
```

### 2. Acesse a pasta

```bash
cd pid-assistant-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o arquivo `.env`

```env
PORT=3000
GROQ_API_KEY=sua_chave_api_aqui
```

### 5. Execute em modo desenvolvimento

```bash
npm run dev
```

### 6. Execute em produção

```bash
npm start
```

---

## 🚀 Servidor

Após iniciar, a API ficará disponível em:

```text
http://localhost:3000
```

---

## 🧠 Funcionamento da IA

O serviço utiliza um `SYSTEM_PROMPT` que define o comportamento do assistente.

### Regras da IA

* Responde sempre em português do Brasil
* Linguagem simples e acessível
* Respostas curtas e objetivas
* Foco em transição energética e sustentabilidade
* Redireciona perguntas fora do escopo para os temas da plataforma
* Não utiliza markdown nas respostas ao usuário

### Modelo Utilizado

* `llama-3.3-70b-versatile`

---

## 🔄 Tratamento de Erros

O serviço trata automaticamente:

* `429` — Rate limit (aguarda 60 segundos e tenta novamente)
* `400` — Mensagem inválida
* `401` — API Key inválida
* `500` — Erro interno do provedor

---

## 📡 Exemplo de Endpoint

### POST `/chat`

#### Requisição

```json
{
  "message": "O que é descarbonização industrial?"
}
```

#### Resposta

```json
{
  "response": "Descarbonização industrial é o processo de reduzir as emissões de gases de efeito estufa nas atividades industriais, usando energia limpa, eficiência energética e novas tecnologias."
}
```

---

## 🌎 Casos de Uso

* Chatbot educacional
* Assistente para a Plataforma PID
* Apoio a estudantes
* Consultoria básica sobre sustentabilidade
* Interface interativa para hackathons

---

## 🏆 Contexto do Projeto

Este backend foi desenvolvido para um hackathon com o desafio:

> Transformar dados em decisões para acelerar a transição energética no Brasil.

---

## 📈 Melhorias Futuras

* Integração com dados da Plataforma PID
* Histórico de conversas
* Suporte a múltiplos modelos
* Cache de respostas
* Streaming em tempo real
* Autenticação de usuários

---

## 👨‍💻 Autor

Desenvolvido por **Gil Maik de Jesus Reis Junior**.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

