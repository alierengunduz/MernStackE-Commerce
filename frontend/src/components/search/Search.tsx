import { assets } from "../../assets/frontend_assets/assets";
import { Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { searchProducts } from "../../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  isScrolled: boolean;
}

const Search = ({ isScrolled }: SearchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { product, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      dispatch(searchProducts(searchValue));
    }
  }, [searchValue, dispatch]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSearchValue("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleProductClick = (productId: string) => {
    setIsModalOpen(false);
    navigate(`/product/${productId}`); // Detay sayfasının yolu
  };

  return (
    <div>
      <IoSearch
        className={`w-6 h-6 cursor-pointer ${
          isScrolled ? "text-white" : "text-black"
        }`}
        onClick={showModal}
      />

      <Modal
        footer={false}
        title="Focus on the work you love"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Search for products"
          className="w-full border-b-2 border-gray-300 focus:outline-none"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {status === "loading" ? (
          <div className="flex justify-center">
            <Spin />
          </div>
        ) : (
          <div>
            {searchValue.trim() === "" ? (
              <p>No products to display. Start typing to search.</p>
            ) : product.length > 0 ? (
              product.map((item) => (
                <div
                  className="w-[80%] mx-auto mt-5"
                  key={item._id}
                  onClick={() => handleProductClick(item._id)}
                >
                  <Card item={item} />
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Search;
