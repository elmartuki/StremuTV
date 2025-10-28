import React from "react";
import Passwords from "../components/passwordrecover/Passwords";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
export default function RecoverPasswordPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="section-password">
        <Passwords />
      </section>
    </>
  );
}