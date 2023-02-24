import React from "react";
import CartItem from "./../Cart/CartItem";
import { Col, Row } from "react-bootstrap";

const AdminOrderDetails = () => {
  return (
    <div>
      <div className="admin-content-text">تفاصيل طلب رقم #122</div>
      <CartItem />
      <CartItem />
      <CartItem />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className="d-flex">
          <div className="admin-content-text py-3">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الإسم:
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            بخيت حنيدة المهيطل
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:{" "}
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            01011110022
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الإيميل:{" "}
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            bekhet_elmehtal2022@gmail.com
          </div>
        </Col>
        <div className="d-inline px-4 border text-center pt-2">
          المجموع: ٩٠٠٠ جنيه مصري
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1 text-center px-2 w-50"
          >
            <option value="val">حالة الطلب</option>
            <option value="val">قيد التنفيذ</option>
            <option value="val">تم الانتهاء</option>
            <option value="val">إلغاء</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2">حفظ</button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetails;
