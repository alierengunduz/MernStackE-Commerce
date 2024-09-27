import { useParams } from "react-router-dom";
import ProductPageLeft from "../../components/product/ProductPageLeft";
import ProductPageRight from "../../components/product/ProductPageRight";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../redux/features/product/productSlice";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import CollapseCom from "../../components/collapse/CollapseCom";
import RelatedProduct from "../../components/related/RelatedProduct";
const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  return (
    <div className="flex flex-col gap-y-10 w-full mt-5">
      <div className="flex w-full gap-x-10">
        <ProductPageLeft />
        <ProductPageRight />
      </div>
      <CollapseCom />
      <div className="flex items-center justify-center">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default ProductPage;
