import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
export default function Home({soket}) {
  return (
    <div className="conatainer">
      <div className="row">
        <h1>Welcome to Our Site</h1>
        <h2>Please Click on Register If You Are New</h2>
        <h2>Or Click On Login Button</h2>
        <div className="buttons">
          <Link to="/register">
            <button>register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
