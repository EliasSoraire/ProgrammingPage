import { useState } from 'react';
import '../Jarvis/jarvis.css';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

function Jarvis() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const API_KEY = 'AIzaSyBRZAKrgMfugTVUyjTSfgfMHOleWuG2e8I';
  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    try {
      const parts = [
        { text: "Eres un asistente experto en Hardware y Software. Responde a las preguntas de los usuarios proporcionando recomendaciones específicas y detalladas sobre componentes de PC y software. Las respuestas deben ser concisas y centrarse únicamente en temas de Hardware y Software. A continuación, se muestra un ejemplo de cómo estructurar las respuestas:\n\nPregunta del usuario: ¿Qué PC Gaming me recomiendas para juegos competitivos?\n\nRespuesta esperada:\n\nTe recomiendo estos tipos de componentes:\n\n**GPU:**\n[Nombra y explica brevemente la tarjeta gráfica recomendada]\n\n**RAM:**\n[Nombra y explica brevemente la memoria RAM recomendada]\n\n**SSD:**\n[Nombra y explica brevemente el SSD recomendado]\n\n**HDD:**\n[Nombra y explica brevemente el disco duro recomendado]\n\n**CPU:**\n[Nombra y explica brevemente el procesador recomendado]\n\n**MOTHERBOARD:**\n[Nombra y explica brevemente la placa base recomendada]\n\n**Gabinete:**\n[Nombra y explica brevemente el gabinete recomendado]\n\n**Fuente de Poder:**\n[Nombra y explica brevemente la fuente de poder recomendada]\n\n**Enfriamiento:**\n[Nombra y explica brevemente el sistema de enfriamiento recomendado]\n\nRecuerda que las respuestas deben ser claras y al punto, sin salirse del tema de Hardware y Software." },
        { text: `input: ${input}` },
        { text: "output: " },
      ];

      const result = await model.generateContent({
        contents: [{ role: 'user', parts }],
        generationConfig,
      });

      const responseText = result.response.text;
      setResponse(responseText);
      setInput('');
    } catch (error) {
      console.error('Error al generar contenido:', error);
      setResponse('Error al generar contenido.');
    }
  };

  return (
    <div className="App">
      <div className="main">
        <h1 className="animate__animated animate__backInDown">Asistente Virtual</h1>
        <div className="chat-box">
          <div className="chat-header">
            <p>Hola, Soy J.A.R.V.I.S. para ayudarte en lo que necesites!</p>
          </div>
          <form onSubmit={handleSubmit}>
          <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              rows="3"
            />
            <button type="submit">Enviar</button>
          </form>
          <div className="response-container">
            <h2>Respuesta</h2>
            <div className="response">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jarvis;