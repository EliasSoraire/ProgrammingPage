import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/index.css'
import Productos from '/src/Componentes/Productos/Productos'
import Navbar from './Componentes/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('product')).render(
    <React.StrictMode>
        <Navbar />
        <Productos />
    </React.StrictMode>,
)