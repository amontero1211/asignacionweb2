/* eslint-disable react/prop-types */
const Card = ({ img }) => {
  return (
    <div className=" flex flex-col hover:scale-105  transition-all">
      <img src={img} className=" object-cover" />
      <p className=" uppercase bg-green-600 py-4 text-white text-2xl font-bold">
        Lorem Ipsum
      </p>
    </div>
  );
};

export default Card;
