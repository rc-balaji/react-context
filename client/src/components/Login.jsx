import React, { useEffect, useState } from "react";
import { useCartContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {

 const [UsersList,setUserList] = useState([])
  const fetchData =async ()=>{
    try {
      const response = await axios.get("http://localhost:3000/login")
      console.log(response.data);
      setUserList(response.data)
     
    } catch (error) {
      console.error(error);
    } }

  useEffect(()=>{
    fetchData()
  },[])


  const { setName } = useCartContext();

  const [uname, setUName] = useState("");
  const [pass, setPass] = useState("");
  const isAuth = (user, pass) => {
    
    var r=0

    if(UsersList.length){
      UsersList.map((item)=>{
        if(item.username === user && item.password === pass){
          r=1
        }
        else if(item.username === user && item.password !== pass)
        {
          r=2
        }
    })
    }


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
