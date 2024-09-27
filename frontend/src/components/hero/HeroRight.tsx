import Slider from "react-slick";

const HeroRight = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      data-aos="flip-left"
      className="md:w-1/2 h-full w-full mt-5  border-none outline-none"
    >
      <Slider {...settings}>
        <div className="lg:h-[500px] md:h-[400px] h-[300px] border-none outline-none ml-auto">
          <img
            className="h-full  object-contain border-none outline-none  w-full"
            src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_1280.png"
            alt=""
          />
        </div>
        <div className="lg:h-[450px] md:h-[400px] h-[300px] border-none outline-none">
          <img
            className="h-full   object-contain border-none outline-none w-full"
            src="https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png"
            alt=""
          />
        </div>
        <div className="lg:h-[500px] md:h-[400px] h-[300px] border-none outline-none">
          <img
            className="h-full  object-contain border-none outline-none w-full"
            src="https://cdn.pixabay.com/photo/2017/09/25/18/16/t-shirt-2786105_1280.png"
            alt=""
          />
        </div>
        <div className="lg:h-[500px] md:h-[400px] h-[300px] border-none outline-none">
          <img
            className="h-full  object-contain border-none outline-none w-full"
            src="https://cdn.pixabay.com/photo/2016/12/06/09/31/women-1886005_1280.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroRight;
