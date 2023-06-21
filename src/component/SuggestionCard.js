import React from 'react'
import { useNavigate } from 'react-router'

const SuggestionCard = ({item}) => {
    const navigate=useNavigate();
    const Suggestion=()=>{
        navigate('/porduct/suggestion')
    }
  return (
    <div className='suggestion-title' onClick={Suggestion}>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
      <div>{item?.suggestion == true?"추천":""}</div>
    </div>
  )
}

export default SuggestionCard
