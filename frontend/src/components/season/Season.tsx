import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { useEffect, useRef } from "react";
import Card from "../ui/Card";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Title from "../ui/Title";

const Season = () => {
  const dispatch: AppDispatch = useDispatch();
  const { product, status, error, sortOrder } = useSelector(
    (state: RootState) => state.products
  );

  const sliderRef = useRef<any>(null); // Slider'a referans oluşturuyoruz

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Varsayılan olarak 4 ürün gösterilecek
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // 1200px altı ekranlarda 3 ürün göster
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // 768px altı ekranlarda 2 ürün göster
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // 480px altı ekranlarda 1 ürün göster
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchProducts({ category: "all", sortOrder }));
  }, [dispatch, sortOrder]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-5 h-[650px]">
      <Title text1="Best-Selling" text2="Products" />
      <div className="w-full flex items-center justify-center gap-x-20 h-[100px]">
        <span
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="cursor-pointer hover:bg-black hover:text-white transition-all duration-300 p-2 rounded-t-lg"
          onClick={() => sliderRef.current.slickPrev()} // Önceki slide'a git
        >
          <FaAnglesLeft size={30} />
        </span>
        <span
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          className="cursor-pointer hover:bg-black hover:text-white transition-all duration-300 p-2 rounded-t-lg"
          onClick={() => sliderRef.current.slickNext()} // Sonraki slide'a git
        >
          <FaAnglesRight size={30} />
        </span>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {/* Slider'ı ref ile kontrol edeceğiz */}
        {product.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Season;
