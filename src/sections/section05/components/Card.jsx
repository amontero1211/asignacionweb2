/* eslint-disable react/prop-types */
import { FaRegPlayCircle } from "react-icons/fa";

const Card = ({ img }) => {
  return (
    <div className=" flex flex-col">
      <div className=" group  relative h-[220px] overflow-hidden ">
        {/* Capa de opacidad */}
        <div className="absolute group-hover:relative inset-0 bg-black opacity-30 transition-all"></div>

        {/*play-icon*/}
        <FaRegPlayCircle
          size={100}
          className=" z-20 absolute text-white //group-hover:text-slate-300 top-[25%] left-[37.5%] //transition-all cursor-pointer //hover:scale-105"
        />

        {/* bg-black play-icon */}
        <div className="absolute  z-10 inset-0 bg-black opacity-30 scale-90 h-[100px] w-[100px] rounded-[50%] top-[25%] left-[37.5%] "></div>

        {/* imagen */}
        <img
          src={img}
          className=" object-cover h-[220px] w-full group-hover:scale-105 transition-all "
        />
      </div>
      <p className=" py-4"> Lorem ipsum dolor sit amet, consetetur</p>
    </div>
  );
};

export default Card;
