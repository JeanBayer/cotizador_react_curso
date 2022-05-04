import { useState, createContext } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);

  const handleChangeDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const cotizarSeguro = () => {
    let resultado = 2000;

    const diferencia = obtenerDiferenciaYear(datos.year);

    resultado -= diferencia * 0.03 * resultado;

    resultado *= calcularMarca(datos.marca);

    resultado *= calcularPlan(datos.plan);

    resultado = formatearDinero(resultado);

    setResultado(resultado);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
