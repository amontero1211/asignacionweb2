import { BsBroadcast } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" customContainer paddingX bg-green-600 text-white text-2xl text-center">
      <span className=" bg-red-600 px-2 font-bold uppercase tracking-widest">
        Live <BsBroadcast className="  inline  " />
      </span>
      <span className=" px-2"> Lorem ipsu dolor sit amet </span>
      <span className="  bg-green-700 hover:bg-green-800 px-4 cursor-pointer transition-all font-bold">
        Join Now <FaRegPlayCircle className=" inline" />
      </span>
    </header>
  );
};

export default Header;
