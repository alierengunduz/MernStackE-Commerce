import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchCategory,
  deleteCategory,
} from "../../../redux/features/category/categorySlice"; // Import deleteUser thunk
import { Table, Spin, Alert, Popconfirm, Button, Space } from "antd";
import { RootState, AppDispatch } from "../../../redux/store"; // Redux store type
import { CategoryType } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const AdminCategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { categories, status, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategory()); // Fetch all users on component mount
  }, [dispatch]);

  const handleDelete = (categoryId: string) => {
    dispatch(deleteCategory(categoryId))
      .unwrap() // Unwrap ile promise sonucunu bekleyip işlem tamamlandığında işlem yapıyoruz
      .then(() => {
        toast.success("Category deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting category: " + err.message);
      });
  };

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: CategoryType) => (
        <Space>
          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/category/${record._id}`)}
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
        dataSource={categories}
        columns={columns}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default AdminCategoryPage;
