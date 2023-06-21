import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import FruitCard from '../component/FruitCard'

const FruitAgency = () => {
  const fruit=[
    {
      "id": 20,
      "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/21/05/21/1000000755/1000000755_main_085.jpg",
      "title": "이츠리온 허니레몬청",
      "price": 11000,
      "rating": 3,
      "new": false,
      "commend": false,
      "sale": false
    },
    {
      "id": 21,
      "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/21/07/28/1000000785/1000000785_main_049.jpg",
      "title": "이츠리온 고농축 딸기청4kg",
      "price": 40000,
      "rating": 4,
      "new": false,
      "commend": false,
      "sale": false
    },
    {
      "id": 22,
      "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/21/05/21/1000000757/1000000757_main_060.jpg",
      "title": "이츠리온 허니레몬청 4kg",
      "price": 41000,
      "rating": 4,
      "new": false,
      "commend": false,
      "sale": false
    }
  ]
  return (
    <Container>
      <Row className='fruit-box'>
        {fruit.map((menu)=>(
            <Col lg={4}><FruitCard item={menu}/></Col>
        ))}
      </Row>
    </Container>
  )
}

export default FruitAgency
