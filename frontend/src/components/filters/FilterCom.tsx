import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { setSelectedCategory } from "../../redux/features/category/categorySlice";
import { AppDispatch } from "../../redux/store";

const FilterCom = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, status, error, selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  // Radio button change handler
  const onChange = (e: RadioChangeEvent) => {
    const selectedCategoryId = e.target.value; // This will be the category ID
    dispatch(setSelectedCategory(selectedCategoryId)); // Dispatch the selected category ID
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="300"
      className="flex flex-col gap-y-10"
    >
      <div className="text-xl tracking-wider">FILTERS</div>
      <div className="border-2 border-double p-2 flex flex-col gap-y-5">
        <h2>CATEGORIES</h2>
        <Radio.Group
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onChange={onChange}
          value={selectedCategory} // Shows the selected category ID
        >
          <Radio value="all" className="text-gray-500">
            All
          </Radio>
          {categories.map((cat, index) => (
            <div
              key={cat._id}
              data-aos="fade-up"
              data-aos-delay={index * 200} // Add delay based on the index
              data-aos-duration="1000" // Optional: adjust duration of the animation
            >
              <Radio value={cat._id} className="text-gray-500">
                {cat.title}
              </Radio>
            </div>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default FilterCom;
