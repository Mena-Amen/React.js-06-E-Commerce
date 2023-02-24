import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Utilities/Pagination";

const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "670px " }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrandsPage;
