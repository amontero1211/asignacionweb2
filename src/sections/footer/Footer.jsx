import { grabIcon } from "../../assets";
const Footer = () => {
  return (
    <div className=" customContainer paddingY paddingX bg-slate-100 grid grid-cols-3 ">
      <p className=" text-xl font-bold //pr-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img src={grabIcon} className=" w-[200px] self-center mx-auto" />
      <p className="text-xl font-bold text-right pl-60 self-center">
        {" "}
        All rights reserved to Lorem Ipsum© 2022
      </p>
    </div>
  );
};

export default Footer;
