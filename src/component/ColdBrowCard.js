import React from 'react'
import { useNavigate } from 'react-router'

const ColdBrowCard = ({item}) => {
  const navigate=useNavigate();
  const coldbrow=()=>{
      navigate('/porduct/coldbrow')
  }
return (
  <div onClick={coldbrow}>
    <img src={item?.img} />
    <div>{item?.title}</div>
    <div>￦{item?.price}</div>
  </div>
  )
}

export default ColdBrowCard
