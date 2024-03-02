import { bgSection07 } from "../../assets";

const Section07 = () => {
  return (
    <div className="relative h-[800px] customContainer paddingY paddingX">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSection07})` }}
      ></div>

      {/* Contenido del componente */}
      <div className="relative h-full">
        <div className=" grid grid-cols-6 h-full">
          <div className=" col-start-1 col-end-4 flex flex-col justify-evenly ">
            <h1 className=" h1 text-7xl flex flex-col gap-4  ">
              <span>Lorem ipsum</span>
              <span>dolor sit</span>
            </h1>
            <p className=" text-2xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button className=" hover:bg-green-700 text-white uppercase text-2xl font-bold px-20 py-4 rounded-md  bg-green-500 w-min text-nowrap transition-all">
              VIEW ALL
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Section07;
