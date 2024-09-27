import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/features/order/orderSlice"; // Import deleteUser thunk
import { Table, Spin, Alert } from "antd";
import { RootState, AppDispatch } from "../../../redux/store"; // Redux store type

const AdminOrderPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, status, error } = useSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(orders);

  const columns = [
    {
      title: "Customer Email",
      dataIndex: "receipt_email",
      key: "receipt_email",
    },
    {
      title: "Order Price",
      dataIndex: "amount",
      key: "amount",
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
        dataSource={orders}
        columns={columns}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default AdminOrderPage;
