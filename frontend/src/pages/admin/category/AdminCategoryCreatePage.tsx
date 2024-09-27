import { useDispatch } from "react-redux";
import { createCategory } from "../../../redux/features/category/categorySlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { AppDispatch } from "../../../redux/store";
import { toast } from "react-toastify";
const AdminCategoryCreatePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: { title: string }) => {
    // Yeni kategoriyi oluşturmak için dispatch çağırıyoruz
    dispatch(createCategory({ title: values.title }));
    navigate("/admin/categories"); // Oluşturma sonrası kategori listesine yönlendir
    toast.success("Category created successfully");
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
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
          Create
        </Button>
      </Form>
    </div>
  );
};

export default AdminCategoryCreatePage;
