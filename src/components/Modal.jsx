import { useState } from "react";
import useCotizador from "../hooks/useCotizador";
import CardInformacion from "./CardInformacion";
import { planBasico, planCompleto } from "../constants/index";

const Modal = () => {
  const [show, setShow] = useState(false);
  const { setMostrarModal } = useCotizador();

  const handleClose = () => {
    setShow(true);
    setTimeout(() => {
      setMostrarModal(false);
    }, 1000);
  };

  return (
    <div
      className={`w-full h-full absolute left-0 top-0 bg-opacity-25 shadow-md backdrop-blur-sm rounded-lg border-white z-10 p-10 animate-fade-in-down ${
        show ? "opacity-0" : null
      } transition-opacity duration-500`}
    >
      <h2 className="text-center font-bold">Planes</h2>
      <img
        src="https://img.icons8.com/nolan/64/delete-sign.png"
        className="absolute top-4 right-4 cursor-pointer w-6 h-6"
        onClick={handleClose}
      />
      <div className="grid md:grid-cols-2 gap-2 mt-4 justify-items-center ">
        <CardInformacion lista={planBasico} titulo="Plan Basico" cantidad={3} />
        <CardInformacion
          lista={planCompleto}
          titulo="Plan Completo"
          cantidad={5}
        />
      </div>
    </div>
  );
};

export default Modal;
