// Success.tsx - Ödeme başarılı sayfası
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
const Success = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Ödeme başarılı olunca sepeti temizliyoruz
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="pb-20">
      <Result
        status="success"
        title="Payment Successful"
        subTitle="Your order has been completed successfully"
        extra={[
          <div className="flex items-center gap-x-10  justify-center">
            <Link
              className="bg-green-600 text-white py-2 px-6 rounded-sm"
              to="/"
            >
              Home
            </Link>
            <Link
              className="bg-blue-600 text-white py-2 px-6 rounded-sm"
              to="/order"
            >
              Order
            </Link>
          </div>,
        ]}
      />
    </div>
  );
};

export default Success;
