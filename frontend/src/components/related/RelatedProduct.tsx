import Title from "../ui/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { RootState, AppDispatch } from "../../redux/store";
import RelatedItem from "./RelatedItem";
const RelatedProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const { product, status, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts("All"));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Title text1="RELATED" text2="PRODUCTS" />
      <div className="grid grid-cols-3 gap-10">
        {product.map((item) => (
          <RelatedItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
