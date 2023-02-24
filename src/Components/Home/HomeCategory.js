import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "./../Utilities/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import laptop from "../../images/laptop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="ملابس رجالي" img={clothe} background="#391e61" />
        <CategoryCard title="أدوات المنزل" img={cat2} background="#a1813c" />
        <CategoryCard title="الكترونيات" img={laptop} background="#f4dba5" />
        <CategoryCard title="عروض" img={sale} background="#a5d4f4" />
        <CategoryCard title="سويت شيرت" img={clothe} background="#001626" />
        <CategoryCard title="أدوات طبخ" img={pic} background="#f4a5a5" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
