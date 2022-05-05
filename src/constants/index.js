export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (val, index) => YEARMAX - index);

export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },
];

export const planBasico = [
  { texto: "Cubre accidentes de transito" },
  { texto: "40% de descuento en accesorios" },
  { texto: "Carwash gratuito" },
  { texto: "Telemecanico gratis" },
  { texto: "Es mas barato" },
];

export const planCompleto = [
  { texto: "Cubre accidentes de transito y fallas" },
  { texto: "70% de descuento en accesorios" },
  { texto: "Carwash gratuito" },
  { texto: "Telemecanico gratis" },
  { texto: "Es el mas completo" },
];
