// src/contexts/CarritoContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  const [totalPrecio, setTotalPrecio] = useState(() => {
    const totalGuardado = localStorage.getItem('totalPrecio');
    return totalGuardado ? JSON.parse(totalGuardado) : 0;
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('totalPrecio', JSON.stringify(totalPrecio));
  }, [carrito, totalPrecio]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
    setTotalPrecio((prevTotal) => prevTotal + producto.precio);
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter(producto => producto.id !== productoId));
    const productoEliminado = carrito.find(producto => producto.id === productoId);
    if (productoEliminado) {
      setTotalPrecio((prevTotal) => prevTotal - productoEliminado.precio);
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, totalPrecio, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};