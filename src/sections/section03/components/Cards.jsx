import Card from "./Card";
import {
  photoSection03one,
  photoSection03two,
  photoSection03three,
} from "../../../assets";

const Cards = () => {
  return (
    <div className=" grid grid-cols-3 gap-6">
      <Card img={photoSection03one} />
      <Card img={photoSection03two} />
      <Card img={photoSection03three} />
    </div>
  );
};

export default Cards;
