import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css"

export default function Login({socket}) {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState("")
  const [route, setRoute] = useState("")
  const [password, setPassword] = useState();
  let navigate = useNavigate();
  const login = () => {
    axios.post("https://productintern.herokuapp.com/login", {
      name: name,
      password: password,
      role: "user",
    }).then(  (res)=>{
   
       socket.emit("join-room",res.data.data[0])
   
      if(res.data.user==="login")
      {
       navigate("/login")
      }
      else if(res.data.user==="admin")
      {
       navigate("/admin")
      }
      else{
       navigate("/user")
      }

    });

 
    
  };
  return (
    <div className="login">
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
      <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
