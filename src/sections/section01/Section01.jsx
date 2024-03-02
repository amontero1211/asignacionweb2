import { bgSection01, grabIcon } from "../../assets";
import Header from "./components/Header";

const Section01 = () => {
  return (
    <>
      {/* header */}
      <div className=" relative z-10">
        <Header />
      </div>
      {/* HERO */}
      <main className="relative -mt-[70px] h-[800px] customContainer paddingY paddingX">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgSection01})` }}
        ></div>
        {/* Capa de opacidad */}
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        {/* Contenido del componente */}
        <div className="relative text-3xl font-bold h-full">
          {/* nav */}
          <div className=" flex justify-between items-center ">
            <img src={grabIcon} width={200} />
            <nav className=" text-white text-base">
              <ul className=" flex gap-6">
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
                <li>
                  <a href="/">LOREM IPSUM</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* title and button*/}
          <div className=" grid grid-cols-6 h-full pb-20">
            <div className=" col-start-3 col-end-7 flex flex-col justify-evenly ">
              <h1 className=" text-7xl text-white flex flex-col gap-1 ">
                <span className=" block  ">LOREM IPSUM</span>
                <span className=" block bg-white text-black w-min text-nowrap pr-10 ">
                  LOREM IPSUM DOLOR
                </span>
                <span className=" block text-slate-500">LOREM IPSUM</span>
              </h1>
              <button className=" hover:bg-green-700 text-white uppercase text-2xl font-bold px-10 py-4 rounded-md  bg-green-500 w-min text-nowrap transition-all">
                WHAT IS NEXT
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer className="customContainer paddingX flex justify-evenly py-8 items-center bg-green-800 ">
        <h2 className=" text-4xl font-bold text-white px-20 w-[550px] ">
          Lorem ipsum dolor sit amet, consetetur
        </h2>
        <p className=" flex flex-col items-center gap-1 border-r-[2px] boder-solid border-green-600 px-8">
          <span className=" text-6xl font-bold text-white">170</span>
          <span className=" text-green-600">days</span>
        </p>
        <p className=" flex flex-col items-center gap-1 border-r-[2px] boder-solid border-green-600 px-8">
          <span className=" text-6xl font-bold text-white">13</span>
          <span className=" text-green-600">hours</span>
        </p>
        <p className=" flex flex-col items-center gap-1 border-r-[2px] boder-solid border-green-600 px-8">
          <span className=" text-6xl font-bold text-white">39</span>
          <span className=" text-green-600">minutees</span>
        </p>
        <p className=" flex flex-col items-center gap-1 px-8">
          <span className=" text-6xl font-bold text-white">29</span>
          <span className=" text-green-600">seconds</span>
        </p>
      </footer>
    </>
  );
};

export default Section01;
