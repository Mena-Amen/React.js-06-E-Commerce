import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
const UserAllOrderCard = () => {
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <img width="93px" height="120px" src={mobile} alt="mobile" />
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر
          </div>
          <div className="cat-rate pt-2 d-inline me-3">4.5</div>
          <div className="rate-count d-inline p-1 pt-2">(122 تقييم)</div>
          <div className="mt-3">
            <div className="cat-text d-inline">الكميه</div>
            <input
              className="mx-2"
              type="number"
              style={{ width: "40px", height: "25" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
