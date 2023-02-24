import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";

const RateItem = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col className="me-5">
          <div className="rate-name d-inline ms-2">بولا محسن</div>
          <img className="" src={rate} alt="rate" height="16px" width="16px" />
          <div className="cat-rate d-inline p-1 pt-2">3.5</div>
        </Col>
      </Row>

      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description d-inline ms-2">
            منتج مطابق للصورة و الوصف و وجدت معه اسكرين هدية
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
