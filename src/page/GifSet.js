import React from 'react'
import GiftSetCard from '../component/GiftSetCard'
import { Container,Row,Col } from 'react-bootstrap'

const GiftSet = () => {
    const giftList =[
        {
            "id": 14,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000732/1000000732_main_089.jpg",
            "title": "홀릭 콜드브루 종합선물세트",
            "price": 7300,
            "rating": 4,
            "best": false,
            "new": false,
            "commend": false,
            "sale": true,
            "origin": ["브라질","콜롬비아"]
          },
          {
            "id": 15,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/03/14/1000000739/1000000739_main_016.jpg",
            "title": "홀릭 콜드브루 페트(200ml 2병)선물세트",
            "price": 28600,
            "rating": 5,
            "best": false,
            "new": false,
            "commend": false,
            "sale": true,
            "origin": "브라질,콜롬비아"
          },
          {
            "id": 16,
            "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/20/01/02/1000000732/1000000732_main_089.jpg",
            "title": "홀릭 콜드브루 종합선물세트",
            "price": 28600,
            "rating": 5,
            "best": false,
            "new": false,
            "commend": false,
            "sale": true,
            "origin": "브라질"
          },
    ]
  return (
    <Container>
        <Row className='giftset'>
            {giftList.map((menu)=>(
                <Col lg={3}><GiftSetCard item={menu}/></Col>
            ))}
        </Row>
    </Container>
  )
}

export default GiftSet
