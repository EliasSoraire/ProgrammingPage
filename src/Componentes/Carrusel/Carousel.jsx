import { useState, useEffect } from 'react';
import './Carousel.css';

const imagenes = [
  '/src/assets/imagen01.jpg', 
  '/src/assets/imagen02.jpg', 
  '/src/assets/imagen03.jpg',
  '/src/assets/imagen04.jpg',
  '/src/assets/imagen05.jpg'
];

const Carrusel = () => {
  const [actualIndice, setActualIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActualIndice((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carousel">
      {imagenes.map((imagenes, index) => (
        <div
          key={index}
          className={`carousel-item ${index === actualIndice ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imagenes})` }}
        />
      ))}
    </div>
  );
}

export default Carrusel;