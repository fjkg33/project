import React from 'react'
import {Container,Row,Col} from  'react-bootstrap'
import SuggestionCard from '../component/SuggestionCard'

const SuggestionCoffee = () => {
  const suggestionCoffe =[
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
      "id": 2,
      "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/15/04/24/1000000460/1000000460_main_054.jpg",
      "title": "[뉴크롭]에티오피아 내추럴 예가체프G4",
      "price": 4300,
      "rating": 4,
      "choice": false,
      "new": false,
      "commend": false,
      "Volume": ["200g", "500g", "1kg"],
      "origin": "에티오피아",
      "suggestion":true
    },
    {
      "id": 3,
      "img": "https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/goods/15/05/13/1000000464/1000000464_main_065.jpg",
      "title": "[뉴크롬] 브라질 프리미엄",
      "price": 3400,
      "rating": 4,
      "best": false,
      "new": true,
      "commend": false,
      "Volume": ["200g", "500g", "1kg"],
      "origin": "브라질",
      "suggestion":true
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
  ]
  return (
    <Container>
        <Row className='suggestion-coffee'>
          {suggestionCoffe.map((menu)=>(
            <Col lg={3}><SuggestionCard item={menu}/></Col>
          ))}
        </Row>
    </Container>
  )
}

export default SuggestionCoffee
