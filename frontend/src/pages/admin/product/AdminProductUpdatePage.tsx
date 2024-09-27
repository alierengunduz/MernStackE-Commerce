import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  fetchProducts,
} from "../../../redux/features/product/productSlice";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  message,
  Alert,
  Checkbox,
} from "antd";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ProductType } from "../../../types/types";

const { Option } = Select;

const AdminProductUpdatePage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Fetch products from state
  const { product, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const { categories } = useSelector((state: RootState) => state.categories);
  const ProductData = Array.isArray(product)
    ? product.find((p) => p._id === productId)
    : null;

  useEffect(() => {
    // Fetch product list if not already present
    if (!ProductData) {
      dispatch(fetchProducts());
    }
  }, [dispatch, ProductData]);

  useEffect(() => {
    if (ProductData) {
      form.setFieldsValue({
        name: ProductData.name,
        description: ProductData.description,
        price: {
          current: ProductData.price?.current || "",
          discount: ProductData.price?.discount || "",
        },
        category: ProductData.category,
        subCategory: ProductData.subCategory,
        sizes: ProductData.sizes.join(", "),
        colors: ProductData.colors.join(", "),
        bestseller: ProductData.bestseller,
      });
    }
  }, [ProductData, form]);

  const onFinish = (values: any) => {
    const updatedProduct: ProductType = {
      ...ProductData,
      ...values,
      price: {
        current: values.price.current,
        discount: values.price.discount || 0,
      },
      sizes: values.sizes.split(", ").map((size: string) => size.trim()),
      colors: values.colors.split(", ").map((color: string) => color.trim()),
    };
    dispatch(updateProduct(updatedProduct))
      .unwrap()
      .then(() => {
        toast.success("Product updated successfully");
        navigate("/admin/products");
      })
      .catch(() => {
        toast.error("Failed to update product");
      });
  };

  if (status === "loading") {
    return <Spin />;
  }

  if (status === "failed") {
    return <Alert message="Error" description={error} type="error" />;
  }

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
            { required: true, message: "Please input the product name!" },
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
              message: "Please input the product description!",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Current Price"
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

        <Form.Item name="bestseller" valuePropName="checked">
          <Checkbox>Best Seller</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default AdminProductUpdatePage;
