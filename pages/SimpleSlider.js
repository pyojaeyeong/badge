import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {data.token.map((token) => (
          <li key={token.id}>
            <strong>{token.name}</strong>
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
