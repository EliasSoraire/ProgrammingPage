// src/data.js
export const productos = {
  procesadores: [
    { id: 1, nombre: 'Procesador Intel i9', descripcion: 'Descripción del procesador Intel i9', precio: 500, imagen: '/src/assets/Intel_Core_i9_2020_logo.svg.png' },
    { id: 2, nombre: 'Procesador AMD Ryzen 9', descripcion: 'Descripción del procesador AMD Ryzen 9', precio: 450, imagen: '/src/assets/amd_ryzen_9_7950x3d1.jpg' },
    { id: 3, nombre: 'Procesador Intel i7', descripcion: 'Descripción del procesador Intel i7', precio: 400 },
  ],
  placasVideo: [
    { id: 4, nombre: 'Placa de Video XFX Radeon RX 6650', descripcion: '8GB GDDR6', precio: 324950, imagen: '/src/assets/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg' },
    { id: 5, nombre: 'Placa de Video XFX Radeon RX 6750', descripcion: '12GB GDDR6', precio: 476900 },
    { id: 6, nombre: 'Placa de Video Nvidia RTX 3080', descripcion: '10GB GDDR6X', precio: 699900 },
  ],
  motherboards: [
    { id: 7, nombre: 'Motherboard ASUS ROG', descripcion: 'Descripción de la motherboard ASUS ROG', precio: 200 },
    { id: 8, nombre: 'Motherboard MSI MPG', descripcion: 'Descripción de la motherboard MSI MPG', precio: 180 },
    { id: 9, nombre: 'Motherboard Gigabyte AORUS', descripcion: 'Descripción de la motherboard Gigabyte AORUS', precio: 220 },
  ],
  memoriaRam: [
    { id: 10, nombre: 'Memoria RAM Corsair 16GB', descripcion: 'Descripción de la memoria RAM Corsair 16GB', precio: 150 },
    { id: 11, nombre: 'Memoria RAM Kingston 32GB', descripcion: 'Descripción de la memoria RAM Kingston 32GB', precio: 250 },
    { id: 12, nombre: 'Memoria RAM G.Skill 8GB', descripcion: 'Descripción de la memoria RAM G.Skill 8GB', precio: 80 },
  ],
  fuentes: [
    { id: 13, nombre: 'Fuente de Poder EVGA 750W', descripcion: 'Descripción de la fuente EVGA 750W', precio: 120 },
    { id: 14, nombre: 'Fuente de Poder Corsair 650W', descripcion: 'Descripción de la fuente Corsair 650W', precio: 100 },
    { id: 15, nombre: 'Fuente de Poder Seasonic 850W', descripcion: 'Descripción de la fuente Seasonic 850W', precio: 150 },
  ],
  gabinetes: [
    { id: 16, nombre: 'Gabinete NZXT', descripcion: 'Descripción del gabinete NZXT', precio: 100 },
    { id: 17, nombre: 'Gabinete Cooler Master', descripcion: 'Descripción del gabinete Cooler Master', precio: 110 },
    { id: 18, nombre: 'Gabinete Corsair', descripcion: 'Descripción del gabinete Corsair', precio: 120 },
  ],
  refrigeracion: [
    { id: 19, nombre: 'Refrigeración líquida Cooler Master', descripcion: 'Descripción de la refrigeración Cooler Master', precio: 80 },
    { id: 20, nombre: 'Refrigeración líquida NZXT', descripcion: 'Descripción de la refrigeración NZXT', precio: 90 },
    { id: 21, nombre: 'Refrigeración por aire Noctua', descripcion: 'Descripción de la refrigeración Noctua', precio: 70 },
  ],
  almacenamiento: [
    { id: 22, nombre: 'SSD Samsung 1TB', descripcion: 'Descripción del SSD Samsung 1TB', precio: 130 },
    { id: 23, nombre: 'HDD Seagate 2TB', descripcion: 'Descripción del HDD Seagate 2TB', precio: 80 },
    { id: 24, nombre: 'SSD Kingston 500GB', descripcion: 'Descripción del SSD Kingston 500GB', precio: 70 },
  ],
};

export const destacados = [
  { id: 4, nombre: 'Placa de Video XFX Radeon RX 6650', descripcion: '8GB GDDR6', precio: 324950, imagen: '/src/assets/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg' },
  { id: 2, nombre: 'Procesador AMD Ryzen 9', descripcion: 'Descripción del procesador AMD Ryzen 9', precio: 450, imagen: '/src/assets/amd_ryzen_9_7950x3d1.jpg' },
  { id: 10, nombre: 'Memoria RAM Corsair 16GB', descripcion: 'Descripción de la memoria RAM Corsair 16GB', precio: 150 },
  { id: 13, nombre: 'Fuente de Poder EVGA 750W', descripcion: 'Descripción de la fuente EVGA 750W', precio: 120 },
  { id: 17, nombre: 'Gabinete Cooler Master', descripcion: 'Descripción del gabinete Cooler Master', precio: 110 },
  { id: 23, nombre: 'HDD Seagate 2TB', descripcion: 'Descripción del HDD Seagate 2TB', precio: 80 },
];