import React from 'react'
import RecipCard from './RecipCard'

export default function ListRecip({data}) {

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {data.map((el,index)=><RecipCard key={index} el={el}/>)}
    </div>
  )
}

