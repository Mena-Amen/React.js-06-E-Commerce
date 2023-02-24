import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import Pagination from "./../Utilities/Pagination";

const UserFavouriteProduct = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المنتجات المفضلة</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavouriteProduct;
