import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Jarvis from './Componentes/Jarvis/Jarvis.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('IA')).render(
  <React.StrictMode>
    <Navbar />
    <Jarvis />
  </React.StrictMode>,
)