import React, { useEffect, useState } from 'react'
import { cardsData } from '../../../AdminData/data'
import { getAllUser } from '../../../api/UserRequests'
import Card from '../Card/Card'
import './Cards.css'


const Cards = () => {
  const [Count, setCount] = useState(0)
  const avg=Count/100*100

  useEffect(()=>{
  const data = async()=>{
   const allUser = await getAllUser()
  //  console.log(allUser.data.length,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjzzzzzzzzzzzzzzzzzzzzzz")
   setCount(allUser.data.length)
  }
  data()
  },[])
  return (
    <div className='cards'>


      {cardsData.map((card,id)=>{
        return(
          <div className='parentContainer'>

          <Card 
          title={card.title} 
          color={card.color}
          barValue={avg}
          value={Count}
          png={card.png}
          series={card.series}/>

          </div>
        )
      })}
    </div>
  )
}

export default Cards