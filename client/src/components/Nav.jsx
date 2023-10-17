import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../App";

export const Nav = () => {
  const {name,setName,Num} =useCartContext()
  const nav = useNavigate()

  useEffect(()=>{

    if(name==="")
  {
    nav('/')
  }
  })
  
  return (
    
    (<div style={{width:'100%'}} >
      <nav style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
      }} >
        <ul style={{
        display:'flex',
        flexDirection:'row'
        ,justifyContent:'space-evenly',
        listStyle:'none'
    }} >

            
            <li><button onClick={()=>{
                nav('/home')
            }} >Home</button></li>
            <li><button onClick={()=>{
                nav('/cart')
            }} >Cart-{Num}</button></li>
            <li><button onClick={()=>{
                nav('/profile')
            }} >Profile</button></li>
        </ul>
        <h4>{name}</h4> 
        <button onClick={()=>{
            setName('')
            nav('/')
        }} >Sign Out</button>
      </nav>
    </div>)
  );
};
