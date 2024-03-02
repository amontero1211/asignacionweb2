import { photoSection02 } from "../../assets";

const Section02 = () => {
  return (
    <div className="customContainer paddingY paddingX grid grid-cols-2 gap-4 justify-between">
      <aside className=" flex flex-col place-content-between">
        <h1 className=" h1 max-w-[80%] ">Lorem ipsum dolor sit amet</h1>
        <p className=" text-2xl mt-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit
        </p>
      </aside>
      <div>
        <img src={photoSection02} className=" object-cover w-full" />
      </div>
    </div>
  );
};

export default Section02;
