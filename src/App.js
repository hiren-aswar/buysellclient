import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
import io from "socket.io-client";
const socket = io.connect("https://productintern.herokuapp.com/");

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
                
      <Route path="/" element={<Home socket={socket} />} />
        <Route path="/login" element={<Login socket={socket} />} />

        <Route path="/register" element={<Register socket={socket} />} />
        
        <Route path="/user" element={<User socket={socket} />} />
        <Route path="/admin" element={<Admin socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
