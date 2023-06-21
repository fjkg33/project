import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BestCard from '../component/BestCard'

const BestAll = () => {
    const bestAll =[
        {
            "id": 0,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/15/09/18/1000000407/1000000407_main_062.jpg",
            "title": "스타 블랜드",
            "rating": 3,
            "price": 2900,
            "best": true,
            "new": true,
            "commend": true,
            "Volume": ["200g", "500g", "1kg"],
            "origin": ["브라질", "콜롬비아", "베트남"],
            "suggestion": true
          },
          {
            "id": 4,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/15/05/13/1000000465/1000000465_main_090.jpg",
            "title": "[뉴크롭]과테말라 SHB 안티구아",
            "price": 4500,
            "rating": 2,
            "best": true,
            "new": false,
            "commend": true,
            "Volume": ["200g", "500g", "1kg"],
            "origin": "과테말라",
            "suggestion":true
          }, 
          {
            "id": 6,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/03/10/1000000735/1000000735_main_076.jpg",
            "title": "[뉴크롭]Light 케냐 AA 키암부",
            "price": 5800,
            "rating": 4,
            "best": true,
            "new": false,
            "commend": true,
            "Volume": ["200g", "500g", "1kg"],
            "origin": ["브라질","콜롬비아","에티오피아"],
            "suggestion":false
          },
          {
            "id": 9,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/23/03/11/1000000833/1000000833_main_081.jpg",
            "title": "[뉴크롭]콜롬비아 디카페인 200g",
            "price": 10900,
            "rating": 5,
            "best": true,
            "new": true,
            "commend": true,
            "Volume": ["200g", "500g", "1kg"],
            "origin": "콜롭비아"
          },
    ]
  return (
    <Container>
        <Row className='best'>
            {bestAll.map((menu)=>(
                <Col lg={3}><BestCard item={menu}/></Col>
            ))}
            
        </Row>
    </Container>
  )
}

export default BestAll
