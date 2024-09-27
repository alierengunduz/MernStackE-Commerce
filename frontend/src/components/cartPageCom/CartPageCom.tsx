import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
import Title from "../ui/Title";
import { AiOutlineClose } from "react-icons/ai";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchAllUsers } from "../../redux/features/user/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const CartPageCom = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.carts);
  const { users, status, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleRemoveFromCart = (
    productId: string,
    size: string,
    color: string
  ) => {
    dispatch(removeFromCart({ productId, size, color }));
  };

  const handlePayment = async () => {
    const body = { cart, users };

    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_API_STRIPE_PUBLIC_KEY as string
      );
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const res = await axios.post("http://localhost:8000/api/payment", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.data.id) {
        throw new Error("Payment failed: Invalid session ID.");
      }

      const session = res.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
      console.log("Cart cleared successfully!");
    } catch (error: any) {
      console.error(
        "Payment processing error:",
        error.response ? error.response.data : error.message
      );
      alert("Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-10 flex flex-col gap-y-10">
      <div className="text-xl">
        <Title text1="YOUR" text2="CART" />
      </div>
      {cart.length === 0 ? (
        <p className="h-[calc(100vh-548px)]">Your cart is empty.</p>
      ) : (
        <div className="flex gap-x-12">
          <div className="flex flex-col gap-y-3">
            <ul className="w-full border-y-2 border-double">
              {cart.map((item, index) => (
                <li key={index} className="flex gap-x-5 my-5 relative">
                  <div>
                    <img
                      className="w-52 h-60 object-cover"
                      src={
                        item.product.image[0]
                          ? `http://localhost:8000/images/${item.product.image[0].replace(
                              "uploads/",
                              ""
                            )}`
                          : ""
                      }
                      alt={item.product.name}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1>{item.product.name}</h1>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p className="text-green-600 font-bold">IN STOCK</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Each</p>
                    <p>${item.product.price.current.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>Quantity</p>
                    <input type="number" value={item.quantity} readOnly />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>Total</p>
                    <p>
                      ${(item.product.price.current * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="absolute bottom-5 right-0 p-2 bg-red-600 text-white rounded-full hover:text-red-800 transition-colors"
                    onClick={() =>
                      handleRemoveFromCart(
                        item.product._id,
                        item.size,
                        item.color
                      )
                    }
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg">{cart.length} Items</p>
              <p>
                $
                {cart
                  .reduce(
                    (acc, item) =>
                      acc + item.product.price.current * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={handlePayment}
            className="bg-green-600 text-white py-2 rounded-md w-[60%] hover:bg-green-900 transition-all duration-300"
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPageCom;
