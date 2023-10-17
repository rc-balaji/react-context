import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Reg = () => {
  const [uname, setUName] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const Register = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get", {
        params: { username: uname, password: pass },
      });
      console.log(response.data);
      alert("Sign Up Successfully");
      nav('/')
    } catch (error) {
      console.error(error);
    }
  };
  

  //     const password = ["123", "234", "345"];
  //     var r=0
  //     username.map((data, index) => {
  //       if (user === data && password[index] === pass) {
  //         r = 1;
  //       } else if (user === data && password[index] !== pass) {
  //         r=2;
  //       }
  //     });

  //     if (r === 1) {
  //       alert("Login Sucess");
  //       return true;
  //     } else if (r == 2) {
  //       alert("Incorect Password");
  //       return false;
  //     } else {
  //       alert("Invalid u/p");
  //       return false;
  //     }
  //   };
  //   const nav = useNavigate();
  return (
    <div>
      <h1>Sign Up Page</h1>
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

      <button onClick={Register}>Sign Up</button>
    </div>
  );
};
