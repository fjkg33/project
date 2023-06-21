import React from 'react'
import { useNavigate } from 'react-router'

const BestCard = ({item}) => {
    const navigate=useNavigate()
    const bestCoffee=()=>{
        navigate(`/porduct/${item.id}`)
    }
  return (
    <div onClick={bestCoffee}>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.best == true?"Best":""}</div>
    </div>
  )
}

export default BestCard
