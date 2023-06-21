import React from "react";
import ColdBrowCard from "../component/ColdBrowCard";
import { Container, Row, Col } from "react-bootstrap";

const ColdBrowAll = () => {
  const coldbrowList = [
    {
      id: 14,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000732/1000000732_main_089.jpg",
      title: "홀릭 콜드브루 종합선물세트",
      price: 7300,
      rating: 4,
      best: false,
      new: false,
      commend: false,
      sale: true,
      origin: ["브라질", "콜롬비아"],
    },
    {
      id: 15,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/03/14/1000000739/1000000739_main_016.jpg",
      title: "홀릭 콜드브루 페트(200ml 2병)선물세트",
      price: 28600,
      rating: 5,
      best: false,
      new: false,
      commend: false,
      sale: true,
      origin: "브라질,콜롬비아",
    },
    {
      id: 16,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000732/1000000732_main_089.jpg",
      title: "홀릭 콜드브루 종합선물세트",
      price: 28600,
      rating: 5,
      best: false,
      new: false,
      commend: false,
      sale: true,
      origin: "브라질",
    },
    {
      id: 17,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000734/1000000734_main_01.jpg",
      title: "홀릭 콜드브루 페드형 200ml",
      price: 3500,
      rating: 5,
      best: false,
      new: true,
      commend: false,
      sale: true,
      origin: ["브라질", "콜롬비아"],
    },
    {
      id: 18,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000733/1000000733_main_06.jpg",
      title: "홀릭 콜드브루 페드형 500ml",
      price: 3500,
      rating: 5,
      best: false,
      new: true,
      commend: true,
      sale: true,
      origin: ["브라질", "콜롬비아"],
    },
    {
      id: 19,
      img: "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/04/17/1000000746/1000000746_main_031.jpg",
      title: "홀릭 스틱 콜드브루 2박스",
      price: 8500,
      rating: 5,
      best: false,
      new: false,
      commend: false,
      sale: true,
      origin: "브라질",
    },
  ];
  return (
    <Container>
      <Row className="coldbrow">
        {coldbrowList.map((menu) => (
          <Col ig={3}>
            <ColdBrowCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ColdBrowAll;
