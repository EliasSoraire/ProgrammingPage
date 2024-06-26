import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import '../Jarvis/jarvis.css';

function Jarvis() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const API_KEY = 'AIzaSyAf1wBm9adTlPieyfXWBgCqJmiRfy5TyXI';
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const parts = [
        { text: `input: ${input}` },
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