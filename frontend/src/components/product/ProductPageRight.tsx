import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
const ProductPageRight = () => {
  const dispatch = useDispatch();
  const { productDetail, status, error } = useSelector(
    (state: RootState) => state.products
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Default quantity is 1

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }

  let sizes: string[] = [];
  if (productDetail?.sizes) {
    sizes =
      typeof productDetail.sizes === "string"
        ? JSON.parse(productDetail.sizes)
        : productDetail.sizes;
  }

  const handleAddToCart = () => {
    if (productDetail && selectedSize && selectedColor) {
      dispatch(
        addToCart({
          product: productDetail,
          size: selectedSize,
          color: selectedColor,
          quantity,
        })
      );
      toast.success("Added to cart");
      setSelectedSize(null);
      setSelectedColor(null);
      setQuantity(1);
    } else {
      toast.error("Please select size and color");
    }
  };

  return (
    <div className="w-1/2 flex flex-col justify-between gap-y-4">
      <h1 className="text-3xl font-semibold">{productDetail?.name}</h1>
      <p className="text-sm">${productDetail?.description}</p>
      <h2 className="font-medium">Select Size</h2>
      <ul className="grid grid-cols-5 gap-10">
        {sizes.map((size) => (
          <li
            key={size}
            className={`text-center border border-gray-300 py-2 rounded-md cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-300 ${
              selectedSize === size ? "bg-gray-500 text-white" : ""
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
      <h2 className="font-medium">Color</h2>
      <ul className="flex items-center gap-x-3">
        {productDetail?.colors.map((color) => (
          <li
            key={color}
            className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
              selectedColor === color
                ? "scale-125 transition-all duration-300"
                : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border-2 py-2.5 rounded-sm"
        />
        <button
          onClick={handleAddToCart}
          className="bg-black text-white w-1/3 hover:bg-opacity-75 transition-colors duration-300 py-3 rounded-md"
        >
          ADD TO CART
        </button>
      </div>
      {/* Rest of your JSX structure */}
    </div>
  );
};

export default ProductPageRight;
