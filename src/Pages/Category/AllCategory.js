import React from "react";
import CategoryContainer from "./../../Components/Category/CategoryContainer";
import Pagination from "./../../Components/Utilities/Pagination";

const AllCategory = ({ pathText }) => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategory;
