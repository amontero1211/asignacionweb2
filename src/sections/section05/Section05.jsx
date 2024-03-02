import Cards from "./components/Cards";
const Section05 = () => {
  return (
    <div className=" customContainer paddingY paddingX bg-slate-100">
      <div className=" text-center">
        <h1 className=" h1 pb-12"> Latest videos</h1>
        <Cards />
        <button className=" hover:bg-green-700 uppercase text-2xl text-white font-bold mt-10 border border-solid background-color: bg-green-600 px-20 py-4 rounded-md transition-all">
          view all
        </button>
      </div>
    </div>
  );
};
export default Section05;
