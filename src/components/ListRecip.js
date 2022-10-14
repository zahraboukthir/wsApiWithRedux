import React from 'react'
import RecipCard from './RecipCard'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallrecieps } from './../js/actions/recipeActions';
import "./reciep.css"

export default function ListRecip({searchedvalue}) {
  // {data}
  const dispatch=useDispatch()
useEffect(() => {
  dispatch(getallrecieps(searchedvalue))
}, [searchedvalue,dispatch])
const list=useSelector(state=>state.receipReducer.listrecieps)
const loading=useSelector(state=>state.receipReducer.loading)
  console.log(loading)
console.log(list)
  return (
    <div style={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-around" }}>
        { loading ? (
        "loading ...."
      ) :list.map((el,index)=><RecipCard key={index} el={el}/>)}
    </div>
  )
}

