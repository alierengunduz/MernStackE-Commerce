import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { RootState, AppDispatch } from "../../redux/store";
import CollectionPageRightItem from "./CollectionPageRightItem";

const CollectionPageRight = () => {
  const dispatch: AppDispatch = useDispatch();
  const { product, status, error, sortOrder } = useSelector(
    (state: RootState) => state.products
  );
  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    // Dispatch fetchProducts with selectedCategory; if "all", pass an empty string
    const categoryToFetch =
      selectedCategory === "all" ? "" : selectedCategory.toLowerCase();
    dispatch(fetchProducts({ category: categoryToFetch, sortOrder }));
  }, [dispatch, selectedCategory, sortOrder]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  // Sıralama işlevini burada uygulayın
  const sortedProducts = [...product].sort((a, b) => {
    switch (sortOrder) {
      case "lowtohigh":
        return a.price.current - b.price.current;
      case "hightolow":
        return b.price.current - a.price.current;
      case "relevant":
      default:
        return 0; // Varsayılan sıralama (önem sırasına göre değil)
    }
  });

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {sortedProducts.map((item) => (
        <CollectionPageRightItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CollectionPageRight;
