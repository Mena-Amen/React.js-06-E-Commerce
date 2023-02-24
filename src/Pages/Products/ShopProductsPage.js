import React from "react";
import CategoryHeader from "./../../Components/Category/CategoryHeader";
import SearchCountResults from "./../../Components/Utilities/SearchCountResults";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "./../../Components/Utilities/SideFilter";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import Pagination from "./../../Components/Utilities/Pagination";

const ShopProductsPage = ({ title }) => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResults title="123 نتيجة بحث" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
