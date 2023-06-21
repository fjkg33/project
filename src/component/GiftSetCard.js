import React from 'react'
import { useNavigate } from 'react-router'

const GiftSetCard = ({item}) => {
    const navigate=useNavigate()
    const giftClick=()=>{
        navigate('/product/giftset')
    }
  return (
    <div onClick={giftClick}>
        <img src={item?.img} />
        <div>{item?.title}</div>
      <div>￦{item?.price}</div>
    </div>
  )
}

export default GiftSetCard
