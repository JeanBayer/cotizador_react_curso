export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  const porcentajeMarca = {
    1: 1.3,
    2: 1.15,
    3: 1.05,
  };
  return porcentajeMarca[marca];
}

export function calcularPlan(plan) {
  const porcentajePlan = {
    1: 1.2,
    2: 1.5,
  };
  return porcentajePlan[plan];
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
