import { Fragment } from "react";

const Star = ({ cantidad }) => {
  return (
    <div className="flex justify-center">
      {Array.from(Array(cantidad), (e, i) => (
        <img
          key={i}
          className="w-4 sm:w-7"
          src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
        />
      ))}
    </div>
  );
};

export default Star;
