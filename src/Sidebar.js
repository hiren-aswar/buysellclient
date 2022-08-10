import React from "react";
import "./sidebar.css";
import { useState } from "react";
export default function Sidebar({ socket }) {
  const [companys, setcompanys] = useState([]);

  const company = () => {
    socket.emit("c-need");
    socket.on("c-take", (data) => {
      console.log(data);
      setcompanys(data);
    });
  };
  const passroom=(data)=>{

      socket.emit("passroom",data)
      
  }
  return (
    <div className="sidebar">
      <button onClick={company}>Companys</button>
      <div className="sidebar_chats">
        {companys.map((val, key) => {
          return val.role === "user" ? (
            <div className="sidebarchats" onClick={()=>passroom(val.room)}>
              <div className="sidebar_chatinfo">
                <p>{val.name}</p>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
