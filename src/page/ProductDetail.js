import React, { useEffect, useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../page/cartSlice';

const ProductDetail = () => {
  const [cartAnimation, setCartAnimation] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/fjkg33/project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ id: product.id, name: product.title, price: product.price }));
      setCartAnimation(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col className={`product-img${cartAnimation ? ' move-to-cart' : ''}`}>
          <img src={product?.img} />
        </Col>
        <Col className="title-box">
          <div>{product?.title}</div>
          <div className="txt">원산지:{product?.origin}</div>
          <div>￦{product?.price}</div>
          <hr />
          <div className="option-box">
            <div>용량선택</div>
            <DropdownButton id="dropdown-basic-button" title="옵션:가격">
              <Dropdown.Item href="#/action-1">200g</Dropdown.Item>
              <Dropdown.Item href="#/action-2">500g +3600원</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1Kg +9100원</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="grinding-selection">
            <div>분쇄선택</div>
            <DropdownButton id="dropdown-basic-button" title="옵션:가격">
              <Dropdown.Item href="#/action-1">홀빈(분쇄안함)</Dropdown.Item>
              <Dropdown.Item href="#/action-2">프랜치프레스 분쇄</Dropdown.Item>
              <Dropdown.Item href="#/action-3">핸드드립/커피메이커</Dropdown.Item>
              <Dropdown.Item href="#/action-4">더치용</Dropdown.Item>
              <Dropdown.Item href="#/action-5">모카포트분쇄</Dropdown.Item>
              <Dropdown.Item href="#/action-6">에스프레소분쇄</Dropdown.Item>
            </DropdownButton>
          </div>
          <hr />
        </Col>
        <div className="buy-button">
          <div className="button">
            <Button variant="outline-primary" onClick={handleAddToCart}>
              장바구니 ({cartCount})
            </Button>
            <Button variant="outline-primary">찜하기</Button>
            <Button variant="outline-primary">구매하기</Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ProductDetail;
