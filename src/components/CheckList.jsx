const CheckList = ({ texto }) => {
  return (
    <li className="text-black">
      <img
        src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"
        className="w-6 inline"
      />
      {texto}
    </li>
  );
};

export default CheckList;
