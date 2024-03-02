import Cards from "./components/Cards";

const Section03 = () => {
  return (
    <div className=" customContainer paddingY paddingX bg-slate-100">
      <div className=" text-center">
        <h1 className=" h1"> Lorem ipsum</h1>
        <p className=" text-2xl my-10 w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        {/* cards */}
        <Cards />

        {/* button */}

        <button className=" hover:bg-slate-300 uppercase text-2xl font-bold mt-10 border border-solid border-black px-10 py-4 rounded-md transition-all">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Section03;
