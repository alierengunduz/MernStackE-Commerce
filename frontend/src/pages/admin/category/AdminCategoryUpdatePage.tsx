import { useDispatch, useSelector } from "react-redux";
import {
  updateCategory,
  fetchCategory,
} from "../../../redux/features/category/categorySlice";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { toast } from "react-toastify";
const AdminCategoryUpdatePage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Redux state'den category verisini alıyoruz
  const { categories } = useSelector((state: RootState) => state.categories);

  // category array mi, değil mi kontrol ediyoruz
  const categoryData = Array.isArray(categories)
    ? categories.find((c) => c._id === categoryId)
    : null;

  useEffect(() => {
    // Kategoriler daha önce yüklenmemişse veya boşsa fetchCategory çağırıyoruz
    if (!categories || categories.length === 0) {
      dispatch(fetchCategory());
    }
  }, [dispatch, categories]);

  const onFinish = (values: { title: string }) => {
    dispatch(updateCategory({ categoryId: categoryId!, updatedData: values }));
    navigate("/admin/categories");
    toast.success("Category updated successfully");
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        // initialValues sadece categoryData varsa yüklenir
        initialValues={categoryData ? { title: categoryData.title } : {}}
      >
        <Form.Item
          label="Category Name"
          name="title"
          rules={[
            { required: true, message: "Please input your category name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default AdminCategoryUpdatePage;
