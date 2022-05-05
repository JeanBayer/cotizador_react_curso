import { useState } from "react";
import useCotizador from "../hooks/useCotizador";

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
      <div className="grid grid-cols-2 gap-2 mt-4 justify-items-center ">
        <div className="bg-white w-5/6 rounded-lg shadow-md p-3 h-80 flex flex-col justify-between">
          <h3 className="font-bold text-center">Plan Basico</h3>
          <ul>
            <li className="text-black">Es mas barato</li>
            <li className="text-black">Es mas barato</li>
            <li className="text-black">Es mas barato</li>
            <li className="text-black">Es mas barato</li>
            <li className="text-black">Es mas barato</li>
          </ul>
        </div>
        <div className="bg-white w-3/4 rounded-lg shadow-md p-3 h-80 flex flex-col justify-between">
          <h3 className="font-bold text-center">Plan Completo</h3>
          <ul>
            <li className="text-black">Es mas caro</li>
            <li className="text-black">Es mas caro</li>
            <li className="text-black">Es mas caro</li>
            <li className="text-black">Es mas caro</li>
            <li className="text-black">Es mas caro</li>
          </ul>
          <button className="w-full bg-indigo-500  hover:bg-indigo-600  transition-colors text-white cursor-pointer p-2 uppercase font-bold">
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
