import FilterCom from "../../components/filters/FilterCom";
import Title from "../../components/ui/Title";
import CollectionPageRight from "../../components/collectionPageCom/CollectionPageRight";
import SortFilter from "../../components/sortFilter/SortFilter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
const CollectionPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5  mt-2 gap-x-10 px-10">
      <div className="sm:w-1/4 w-full">
        <FilterCom />
      </div>
      <div className="w-full">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center justify-between mb-8">
          <Title text1="ALL" text2="COLLECTIONS" />
          <SortFilter />
        </div>
        <CollectionPageRight />
      </div>
    </div>
  );
};

export default CollectionPage;
