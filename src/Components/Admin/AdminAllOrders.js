import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrderItem from "./AdminAllOrderItem";

const AdminAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text">إدارة جميع الطلبات</div>
      <Row className="justify-content-start">
        <AdminAllOrderItem />
        <AdminAllOrderItem />
        <AdminAllOrderItem />
      </Row>
    </div>
  );
};

export default AdminAllOrders;
