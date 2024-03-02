/* eslint-disable react/prop-types */
const Card = ({ img }) => {
  return (
    <div className=" flex flex-col">
      <img src={img} className=" object-cover" />
    </div>
  );
};

export default Card;
