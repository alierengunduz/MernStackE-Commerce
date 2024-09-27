import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Upload,
  message,
  Checkbox,
  Alert,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../redux/store";
import { createProduct } from "../../../redux/features/product/productSlice";
import { fetchCategory } from "../../../redux/features/category/categorySlice";
import { ProductType } from "../../../types/types";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
} from "antd/es/upload/interface";

const { Option } = Select;

const AdminProductCreatePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [imageList, setImageList] = useState<UploadFile[]>([]);
  const { categories, status, error } = useSelector(
    (state: RootState) => state.categories
  ); // Make sure the state name is correct

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  if (status === "loading") {
    return <Spin />;
  }

  if (status === "failed") {
    return <Alert message="Error" description={error} type="error" />;
  }

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.fileList.length <= 4) {
      setImageList(info.fileList);
    } else {
      message.error("You can only upload up to 4 images.");
    }
  };

  const onFinish = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price[current]", values.price.current.toString());
      formData.append(
        "price[discount]",
        (values.price.discount || 0).toString()
      );
      formData.append("category", values.category);
      formData.append("subCategory", values.subCategory || "");
      formData.append("sizes", JSON.stringify(values.sizes.split(",")));
      formData.append("colors", JSON.stringify(values.colors.split(",")));
      formData.append("bestseller", values.bestseller ? "true" : "false");

      imageList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("image", file.originFileObj);
        }
      });

      await dispatch(createProduct(formData)).unwrap();
      message.success("Product created successfully");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error creating product:", error);
      message.error("Failed to create product");
    }
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
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Please input your product name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your product description!",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name={["price", "current"]}
          rules={[
            { required: true, message: "Please input the current price!" },
          ]}
        >
          <InputNumber prefix="$" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Discounted Price" name={["price", "discount"]}>
          <InputNumber prefix="$" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select a category">
            {categories.map((cat) => (
              <Option key={cat._id} value={cat._id}>
                {cat.title}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Sub Category" name="subCategory">
          <Input />
        </Form.Item>

        <Form.Item label="Sizes" name="sizes">
          <Input placeholder="Enter sizes separated by commas (e.g., S,M,L)" />
        </Form.Item>

        <Form.Item label="Colors" name="colors">
          <Input placeholder="Enter colors separated by commas (e.g., Red,Blue,Green)" />
        </Form.Item>

        <Form.Item label="Product Images">
          <Upload
            listType="picture-card"
            fileList={imageList}
            onChange={handleChange}
            maxCount={4}
            beforeUpload={() => false} // Prevent automatic upload
          >
            {imageList.length < 4 && "+ Upload"}
          </Upload>
        </Form.Item>

        <Form.Item name="bestseller" valuePropName="checked">
          <Checkbox>Best Seller</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create Product
        </Button>
      </Form>
    </div>
  );
};

export default AdminProductCreatePage;
