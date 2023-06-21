import React from 'react'
import { useNavigate } from 'react-router'

const FruitCard = ({item}) => {
    const navigate=useNavigate()
    const fruitClick=()=>{
        navigate('/product/fruit')
    }
  return (
    <div onClick={fruitClick}>
      <img src={item?.img} />
      <div>{item?.title}</div>
    <div>￦{item?.price}</div>
    </div>
  )
}

export default FruitCard
