import React from 'react'
import { useNavigate } from 'react-router'


const ProductCard = ({item}) => {

  const navigate=useNavigate()
  const showDetail =()=>{
      navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail} className='product-title'>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
    </div>
  )
}

export default ProductCard
