import { useContext, useState } from 'react';
import { CarritoContext } from '/src/contexts/CarritoContext';
import './Navbar.css';

const Navbar = () => {
  const { carrito, totalPrecio, eliminarDelCarrito } = useContext(CarritoContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">LOGO</a>
      </div>
      <nav className="navbar">
        <a href="index.html">Home</a>
        <a href="producto.html">Products</a>
        <a href="IA.html">J.A.R.V.I.S.</a>
        <div className="container-cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="icon-cart"
            onClick={toggleCarrito}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{carrito.length}</span>
          </div>
        </div>
        {mostrarCarrito && (
          <div className="carrito-desplegable">
            <div className="carrito-items">
              {carrito.map((producto) => (
                <div key={producto.id} className="carrito-item">
                  <p>{producto.nombre}</p>
                  <button
                    className="eliminar-producto"
                    onClick={() => eliminarDelCarrito(producto.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <div className="carrito-total">
              <p>Total: ${totalPrecio.toLocaleString()}</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;