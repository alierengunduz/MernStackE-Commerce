import { Select } from "antd";
import { useDispatch } from "react-redux";
import { setSortOrder } from "../../redux/features/product/productSlice"; // Sıralama eylemi için action

const SortFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    dispatch(setSortOrder(value)); // Seçilen sıralama değerini Redux state'ine dispatch et
  };

  return (
    <div>
      <Select
        defaultValue="relevant"
        onChange={handleChange}
        options={[
          { value: "relevant", label: "Sort by: Relevant" },
          { value: "lowtohigh", label: "Sort by: Low to High" },
          { value: "hightolow", label: "Sort by: High to Low" },
        ]}
      />
    </div>
  );
};

export default SortFilter;
