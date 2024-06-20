import { useState } from 'react';
import { destacados as productosDestacados } from '/src/data.js';
import './SliderProduct.css';

const SliderProduct = () => {
    const [actualProducto, setActualProducto] = useState(0);
    const itemsVisibles = 3;

    const derecha = () => {
        setActualProducto((prevIndex) => {
            if (prevIndex + itemsVisibles >= productosDestacados.length) {
                return 0;
            }
            else {
                return prevIndex + itemsVisibles;
            }
        })
    }
    const izquierda = () => {
        setActualProducto((prevIndex) => {
            if (prevIndex === 0) {
                return Math.max(productosDestacados.length - itemsVisibles, 0);
            } else {
                return Math.max(prevIndex - itemsVisibles, 0);
            }
        })
    }

    if (!productosDestacados || productosDestacados.length === 0) {
        return <p>No hay productos disponibles</p>;
    }

    return (
        <div className="slider">
            <button onClick={izquierda} className="flecha flecha-izquierda">←</button>
            <div className="slider-content">
                {productosDestacados.slice(actualProducto, actualProducto + itemsVisibles).map((producto, index) => (
                    <div className="slider-item" key={index}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <p>{producto.precio}</p>
                    </div>
                ))}
            </div>
            <button onClick={derecha} className="flecha flecha-derecha">→</button>
        </div>
    )
}

export default SliderProduct;
