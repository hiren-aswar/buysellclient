import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";


export default function Register({socket}) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const register = () => {
    axios
      .post("https://productintern.herokuapp.com/register", {
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.user === true) {
          navigate("/login");
        
          
        } else {
          navigate("/register");
        }
      });
  };
  return (
    <div className="register">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}
