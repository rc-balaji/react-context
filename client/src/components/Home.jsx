import React from "react";
import { Nav } from "./Nav";
import { useCartContext } from "../App";

export const Home = () => {
  const { cart, setCart,setNum,Num} = useCartContext();

  const Items = [
    { name: "Item 1", price: 10.99 },
    { name: "Item 2", price: 15.49 },
    { name: "Item 3", price: 8.99 },
    { name: "Item 4", price: 5.99 },
    { name: "Item 5", price: 12.99 },
  ];

  const AddCart = (data) =>{

      setCart([...cart,data])
      setNum(Num+1)
      alert("Item is Added to Cart ")
  }
  return (
    <div>
      <Nav />
      <div>
        <h1>Add to the cart</h1>
        <ol>
          {Items.map((data, index) => (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              key={index}
            >
              <p>Name:{data.name}</p>
              <p>Price:{data.price}</p>
              <button onClick={()=>AddCart(data)} >  Add to Cart</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
