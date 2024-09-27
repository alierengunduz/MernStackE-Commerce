import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchProducts,
  deleteProduct,
} from "../../../redux/features/product/productSlice";
import { fetchCategory } from "../../../redux/features/category/categorySlice"; // Import category fetch
import { Table, Spin, Alert, Popconfirm, Button, Space } from "antd";
import { RootState, AppDispatch } from "../../../redux/store";
import { ProductType } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { product, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts({ category: "all", sortOrder: "relevant" }));
    dispatch(fetchCategory()); // Fetch categories
  }, [dispatch]);

  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        dispatch(fetchProducts({ category: "all", sortOrder: "relevant" }));
        toast.success("Product deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete product");
      });
  };

  const getCategoryTitle = (categoryId: string) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.title : "Unknown";
  };

  const columns = [
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      render: (image: string[]) => (
        <img
          src={
            image[0]
              ? `http://localhost:8000/images/${image[0].replace(
                  "uploads/",
                  ""
                )}`
              : ""
          }
          alt="Product"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Description",
      dataIndex: "description",
      key: "description",
      render: (text: string) => text.slice(0, 50) + "...",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (categoryId: string) => getCategoryTitle(categoryId),
    },
    {
      title: "Current Price",
      key: "price.current",
      render: (record: ProductType) =>
        record.price?.current ? `$${record.price.current}` : "N/A",
    },
    {
      title: "Discounted Price",
      key: "price.discount",
      render: (record: ProductType) =>
        record.price?.discount ? `$${record.price.discount}` : "N/A",
    },
    {
      title: "Sizes",
      dataIndex: "sizes",
      key: "sizes",
      render: (sizes: string[]) => sizes.join(", "),
    },
    {
      title: "Colors",
      dataIndex: "colors",
      key: "colors",
      render: (colors: string[]) => colors.join(", "),
    },
    {
      title: "SubCategory",
      dataIndex: "subCategory",
      key: "subCategory",
    },
    {
      title: "BestSeller",
      dataIndex: "bestseller",
      key: "bestseller",
      render: (bestseller: boolean) => (bestseller ? "Yes" : "No"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: ProductType) => (
        <Space>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/product/${record._id}`)}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  if (status === "loading") {
    return <Spin />;
  }

  if (status === "failed") {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <div>
      <Table
        bordered
        dataSource={product}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1200 }}
      />
    </div>
  );
};

export default AdminProductPage;
