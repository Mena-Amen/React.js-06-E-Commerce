import React from "react";
import NavBarLogin from "../../Components/Utilities/NavBarLogin";
import Slider from "./../../Components/Home/Slider";
import HomeCategory from "./../../Components/Home/HomeCategory";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCardFeatures from "./../../Components/Brand/BrandCardFeatures";
import Footer from "./../../Components/Utilities/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        title="أحدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandCardFeatures title="أشهر الماركات" btntitle="المزيد" />
      {/* <BrandCardFeatures title="أشهر الماركات" btntitle="المزيد" /> */}
    </div>
  );
};

export default HomePage;
