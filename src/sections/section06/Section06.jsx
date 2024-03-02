import { bgSection06 } from "../../assets";

const Section06 = () => {
  return (
    <>
      <div className="relative h-[1000px] customContainer paddingY paddingX">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{ backgroundImage: `url(${bgSection06})` }}
        ></div>
        <div className=" relative grid grid-cols-4 h-full">
          <div className=" col-start-3 col-end-5 flex flex-col justify-between h-full ">
            <h1 className=" text-white font-bold text-8xl">JOIN US.</h1>
            <p className=" text-white text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
            <form className=" flex flex-col gap-4">
              <div className=" grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" p-4 text-2xl rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className=" p-4 text-2xl rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className=" p-4 text-2xl rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className=" p-4 text-2xl rounded-md outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Department"
                className=" p-4 text-2xl rounded-md outline-none w-full"
              />
              <textarea
                placeholder=" Message"
                cols="30"
                rows="5"
                className="p-4 text-2xl"
              ></textarea>
            </form>
            <button className=" hover:bg-green-700 text-white uppercase text-2xl font-bold px-20 py-4 rounded-md  bg-green-500 w-min text-nowrap transition-all">
              I&apos;M IN
            </button>
            <p className=" text-white text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section06;
