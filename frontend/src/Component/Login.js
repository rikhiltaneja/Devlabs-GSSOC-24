import React from "react";
import "../style/Login.css";
import img from "../image/login-img.png";

export default function Login() {
  return (
    <>
      <div className="page-container">
        <div className="login-page">
          <img src={img} />
        </div>
      </div>
    </>
  );
}
