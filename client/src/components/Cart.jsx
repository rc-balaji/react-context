import React from "react";
import { Nav } from "./Nav";
import { useCartContext } from "../App";

export const Cart = () => {
  const { cart, setCart,Num,setNum } = useCartContext();
  const DeleteItem = (i) => {
    const newCart = cart.filter((data, index) => index !== i);
    setNum(Num-1)
    setCart(newCart);
  };


  const Total = cart.reduce((total,item)=>(total+item.price),0)
  return (
    <div>
      <Nav />
      <div>
        <h1>Cart Pages</h1>

        <ol>
          {cart.length !== 0 ? (
            cart.map((data, index) => {
              return (
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={index}
                >
                  <p>Name:{data.name}</p>
                  <p>Price:{data.price}</p>
                  <button
                    style={{ color: "red" }}
                    onClick={() => DeleteItem(index)}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          ) : (
            <p>No Items</p>
          )}
        </ol>

        <p>Total:${Total}</p>
        <button onClick={()=>{
          alert("Order Placed")
          setCart([])
          setNum(0)
        }} >Place Order</button>
      </div>
    </div>
  );
};
