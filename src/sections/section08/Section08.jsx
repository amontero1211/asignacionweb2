import Cards from "./components/Cards";

const Section08 = () => {
  return (
    <div className="min-h-[800px] bg-gradient-to-t from-green-900 to-green-600 customContainer paddingY paddingX flex flex-col gap-14">
      <h1 className=" h1 text-center text-white ">Lorem ipsum dolor sit</h1>
      {/* cards */}
      <Cards />

      {/* button */}
      <button className=" mt-4 bg-white hover:bg-slate-300 w-min text-nowrap mx-auto uppercase text-2xl font-bold  px-20 py-4 rounded-md transition-all">
        view all
      </button>
    </div>
  );
};

export default Section08;
