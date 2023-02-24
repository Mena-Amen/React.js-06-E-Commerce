import React from "react";
import { Card, Col } from "react-bootstrap";

const BrandCard = ({ img }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-center"
    >
      <Card
        className="mt-1"
        style={{
          width: "100%",
          height: "151px",
          border: "none",
          borderRaduis: "8px",
          backgroundColor: "white",
        }}
      >
        <Card.Img
          style={{ width: "100%", height: "151px" }}
          src={img}
          alt="brand"
        />
      </Card>
    </Col>
  );
};

export default BrandCard;
