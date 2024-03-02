import { patternSection04, photoSection04 } from "../../assets";

const Section04 = () => {
  return (
    <div className=" customContainer bg-green-600 ">
      <div className=" grid grid-cols-2">
        <div className=" paddingX py-16 max-w-[560px] flex flex-col justify-between">
          <h1 className="h1 text-white ">
            Lorem ipsum dolor sit amet, consetetur
          </h1>
          {/* buttons */}
          <div className=" flex flex-col gap-5">
            <button className=" hover:bg-slate-300 bg-white uppercase text-2xl font-bold border border-solid  px-10 py-4 rounded-md w-full transition-all">
              LOREM IPSUM DOLOR SIT
            </button>
            <button className=" hover:bg-green-700 text-white uppercase text-2xl font-bold border border-solid  px-10 py-4 rounded-md w-full transition-all">
              LOREM IPSUM DOLOR SIT
            </button>
          </div>
        </div>

        {/* bg + image */}
        <div
          style={{
            backgroundImage: `url(${patternSection04})`,
          }}
          className=" flex"
        >
          <img src={photoSection04} className=" object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default Section04;
