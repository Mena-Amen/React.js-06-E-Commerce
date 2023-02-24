import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "./../Utilities/Pagination";

const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="subtitle d-inline p-1">التقييمات</div>
          <img
            className="mt-2"
            src={rate}
            alt="rate"
            height="16px"
            width="16px"
          />
          <div className="cat-rate d-inline p-1 pt-2">4.2</div>
          <div className="rate-count d-inline p-1 pt-2">(124 تقييم)</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination />
    </Container>
  );
};

export default RateContainer;
