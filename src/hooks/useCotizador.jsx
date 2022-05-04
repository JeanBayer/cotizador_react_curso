import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProdvider";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
