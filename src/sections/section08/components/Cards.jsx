/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { photo0801, photo0802, photo0803, photo0804 } from "../../../assets";

const Cards = () => {
  /* prev arrow slider */
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          opacity: "0.7",
        }}
        onClick={onClick}
      />
    );
  }

  /* next arrow slider */
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", opacity: "0.7" }}
        onClick={onClick}
      />
    );
  }

  /* slider */
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <ul
        style={{
          height: "30px",
          margin: " -30px 0",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          border: " 2px solid white",
        }}
      ></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      <Card img={photo0801} />
      <Card img={photo0802} />
      <Card img={photo0803} />
      <Card img={photo0804} />
    </Slider>
  );
};

export default Cards;
