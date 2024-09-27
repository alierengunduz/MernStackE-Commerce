import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  deleteUser,
} from "../../../redux/features/user/userSlice"; // Import deleteUser thunk
import { Table, Spin, Alert, Popconfirm, Button } from "antd";
import { RootState, AppDispatch } from "../../../redux/store"; // Redux store type
import { UserType } from "../../../types/types";
import { toast } from "react-toastify";
const AdminUserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchAllUsers()); // Fetch all users on component mount
  }, [dispatch]);

  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
    toast.success("User deleted successfully");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: UserType) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => handleDelete(record._id)} // Call handleDelete with the user ID
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
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
        dataSource={users}
        columns={columns}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default AdminUserPage;
