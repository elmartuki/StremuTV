import React from "react";
import Passwords from "../components/passwordrecover/Passwords";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
export default function RecoverPasswordPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="form-login-back">
        <button onClick={() => navigate("/login")}>
          <img src={back} alt="" />
          <p>Volver</p>
        </button>
      </div>
      <section className="section-password">
        <Passwords />
      </section>
    </>
  );
}
