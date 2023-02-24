import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrder = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">أهلا بخيت حنيده</div>
      <Row className="justify-content-between">
        <UserAllOrderItem />
        <UserAllOrderItem />
      </Row>
    </div>
  );
};

export default UserAllOrder;
