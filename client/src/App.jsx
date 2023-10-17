import { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Profile } from "./components/Profile";
import { Nav } from "./components/Nav";
import { Reg } from "./components/Reg";


const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

function App() {
 

  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [Num,setNum] = useState(0)

  return (
    <div>
      <CartContext.Provider value={{ cart, name,Num, setNum,setCart, setName }}>
        <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reg" element={<Reg />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
