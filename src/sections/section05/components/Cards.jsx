import Card from "./Card";
import { photoSection03one } from "../../../assets";

const Cards = () => {
  return (
    <div className=" grid grid-cols-3 gap-6">
      <Card img={photoSection03one} />
      <Card img={photoSection03one} />
      <Card img={photoSection03one} />
      <Card img={photoSection03one} />
      <Card img={photoSection03one} />
      <Card img={photoSection03one} />
    </div>
  );
};

export default Cards;
