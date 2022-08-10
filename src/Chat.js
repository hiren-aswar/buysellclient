import React from "react";
import "./chat.css";
import { useState, useEffect } from "react";
export default function Chat({ socket }) {
  const [meseg, setMeseg] = useState([]);
  const [roomin, setroomin] = useState();
  const [mall, setMall] = useState("");
  const [rupi, setRupi] = useState();
  socket.on("t-chats", (data) => {
    setMeseg(data);
  });
  socket.on("info", (data) => {
    console.log(data);
    setroomin(data);
  });
  console.log(roomin);

  const adminmsg = () => {
    socket.emit("adminmsg", {
      product: mall,
      q: rupi,
      auther: "admin",
      roo: roomin,
    });
  };
  const update = () => {
    socket.emit("needdata");
    socket.on("kevin", (data) => {
      setMeseg(data);
    });
  };

    return (
    <div className="kevin">
      <button onClick={update}>update</button>
      <div className="chat">
        {meseg.map((val, key) => {
          return val.room === roomin ? (
            <div className="ch_body">
              <p className="ch_send">
                <span className="ch_name">{val.auther}</span>
                <p className={val.auther === "admin" ? "send" : "recive"}>
                  {" "}
                  {val.auther==="admin"?<div>
                   product : <p>{val.product}
                   </p>
                  quantity :<p>{val.q}</p>

                  </div>:
                  <div>
                  price: <p>{val.price}</p>
                  product: <p>{val.product}</p>
                  </div>

                }
                 
                </p>
                <span className="chat_timestamp">
                  {new Date().toDateString()}
                </span>
              </p>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div className="textmsg">
        <input
          type="text"
          placeholder="enter product"
          onChange={(e) => setMall(e.target.value)}
        />
        <input
          type="Number"
          placeholder="Enter Quntity"
          onChange={(e) => setRupi(e.target.value)}
        />
        <button onClick={adminmsg}>Send</button>
      </div>
    </div>
  );
}
