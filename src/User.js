import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Chat from "./Chat.js";
import "./user.css"

export default function User({ socket }) {
  const [room, setRoom] = useState();
  const [auther, setAuther] = useState("");
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();

  socket.on("room-info", (data) => {
    setRoom(data.room);
    setAuther(data.auther);
    console.log(data);
  });
  const checkmessage = () => {
    socket.emit("need-data");
    socket.on("take-data", (data) => {
      console.log(data);
      setData(data);
    });
  };

  const sendprice = () => {
    console.log("hello");
    socket.emit("price", {
      auther: auther,
      room: room,
      price: price,
      product: product,
    });
    socket.emit("need-data");
    socket.on("take-data", (data) => {
      console.log(data);
      setData(data);
    });
  };

  return (
    <div>
      <button onClick={checkmessage}>Show Message</button>
      <div className="chats">
        {data.map((val, key) => {
          return val.room === room ? (
            <div className="chatbody">
              <p className="chat_send">
                <span className="chat_name">{val.auther}</span>
                <p className={auther === val.auther ? "send" : "recive"}>
                  {" "}
                  {val.price}{" "}
                  {val.product}
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
      <div>
        <input
          type="text"
          placeholder="enter the product"
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="Number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={sendprice}>add</button>
      </div>
    </div>
  );
}
