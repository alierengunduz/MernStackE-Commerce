import { FC } from "react";
import { ProductType } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface CardProps {
  item: ProductType;
}

const Card: FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();
  const firstImage = item.image[0];
  const imageUrl = firstImage.startsWith("http")
    ? firstImage
    : `http://localhost:8000/images/${firstImage.replace("uploads/", "")}`;
  console.log(item);

  return (
    <div
      onClick={() => navigate(`/product/${item._id}`)}
      className="relative group flex flex-col justify-between items-center animate-fadeIn border-2  h-[350px] rounded-lg overflow-hidden bg-white shadow-lg transition-transform duration-500 ease-in-out hover:shadow-2xl hover:scale-105 cursor-pointer"
    >
      {/* Üst Kısım: Resim */}
      <div className="relative w-full h-[45%] overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 px-3 py-1 bg-gradient-to-r from-yellow-400 to-red-500 text-white text-sm font-semibold rounded-br-lg shadow-lg">
          {item.price.discount}% OFF
        </div>
        {/* Hover esnasında yukarıdan gelen görsel detaylar */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 ease-in-out flex items-center justify-center">
          <button className="px-6 py-2 bg-white text-green-600 font-bold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </button>
        </div>
      </div>

      {/* Alt Kısım: Ürün Bilgileri */}
      <div className="w-full p-4 bg-white h-[55%]  flex flex-col justify-between items-start">
        <h1 className="text-xl font-medium text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-green-600">
          {item.name}
        </h1>
        <p className="text-green-500 font-semibold">IN STOCK</p>
        <div className="flex items-center space-x-2 mt-2">
          {item.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color.toLowerCase() }}
            ></div>
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          {item.sizes.map((size, index) => (
            <p
              key={index}
              className="text-xs  font-semibold text-white py-1 px-2 rounded-md bg-purple-700"
            >
              {size}
            </p>
          ))}
        </div>
        <p className="text-lg absolute top-0 right-0 font-semibold text-white bg-blue-700 px-3 py-1 rounded-sm">
          {item.price.current.toFixed(2)}$
        </p>
      </div>
    </div>
  );
};

export default Card;
