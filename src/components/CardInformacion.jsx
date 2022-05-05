import CheckList from "./CheckList";
import Star from "./Star";

const CardInformacion = ({ lista, titulo, cantidad }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 h-80 flex flex-col justify-around">
      <h3 className="font-bold text-center">{titulo}</h3>
      <ul className="text-sm">
        {lista.map((item, index) => (
          <CheckList key={index} texto={item.texto} />
        ))}
      </ul>
      <Star cantidad={cantidad} />
    </div>
  );
};

export default CardInformacion;
