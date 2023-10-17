import React, { useState } from "react";
import { useCartContext } from "../App";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setName } = useCartContext();

  const [uname, setUName] = useState("");
  const [pass, setPass] = useState("");
  const isAuth = (user, pass) => {
    const username = ["Raj", "Sam", "Ram"];
    const password = ["123", "234", "345"];
    var r=0
    username.map((data, index) => {
      if (user === data && password[index] === pass) {
        r = 1;
      } else if (user === data && password[index] !== pass) {
        r=2;
      }
    });

    if (r === 1) {
      alert("Login Sucess");
      return true;
    } else if (r == 2) {
      alert("Incorect Password");
      return false;
    } else {
      alert("Invalid u/p");
      return false;
    }
  };
  const nav = useNavigate();
  return (
    <div>
      <h1>Login to the Page</h1>
      <input
        placeholder="Enter Name"
        value={uname}
        onChange={(e) => {
          setUName(e.target.value);
        }}
        type="text"
      />
      <input
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        type="password"
      />
      <button
        onClick={() => {
          
          if(isAuth(uname, pass))
          {setName(uname)
          setUName("")
          setPass("")
          nav("/home")}
        }}
      >
        Login
      </button>
    </div>
  );
};
