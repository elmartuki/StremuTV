import React, { useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
import back from "../assets/back.svg";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import AlertModal from "../components/alerts/AlertModal";
import AlertConfirm from "../components/alerts/AlertConfirm";

const monthlyPlans = [
  {
    name: "Básico",
    price: "$9.99",
    features: ["1 pantalla", "Definición estándar"],
  },
  {
    name: "Estándar",
    price: "$15.99",
    features: ["2 pantallas", "Full HD"],
    popular: true,
  },
  { name: "Premium", price: "$19.99", features: ["4 pantallas", "4K + HDR"] },
];

const yearlyPlans = [
  {
    name: "Básico",
    price: "$99.99",
    features: ["1 pantalla", "Definición estándar"],
  },
  {
    name: "Estándar",
    price: "$149.99",
    features: ["2 pantallas", "Full HD"],
    popular: true,
  },
  { name: "Premium", price: "$199.99", features: ["4 pantallas", "4K + HDR"] },
];

export default function PlanSelector() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const cardRef = useRef(null);

  const plans = isMonthly ? monthlyPlans : yearlyPlans;
  const navegacion = useNavigate();

  const handleChoose = (plan) => {
    setSelectedPlan(plan);

    setFirstName("");
    setLastName("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
  };

  const handleClose = () => {
    setSelectedPlan(null);
  };

  const onFirstNameChange = (e) => {
    const v = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "").slice(0, 12);
    setFirstName(v);
  };

  const onLastNameChange = (e) => {
    const v = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "").slice(0, 12);
    setLastName(v);
  };

  const formatCard = (digits) => {
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const onCardNumberChange = (e) => {
    const el = e.target;
    const rawValue = el.value;
    const selectionStart = el.selectionStart ?? rawValue.length;

    const digits = rawValue.replace(/\D/g, "").slice(0, 16);

    const digitsBeforeCursor = rawValue
      .slice(0, selectionStart)
      .replace(/\D/g, "").length;

    const formatted = formatCard(digits);
    setCardNumber(formatted);

    const spacesBefore = Math.floor(digitsBeforeCursor / 4);
    let newCursorPos = digitsBeforeCursor + spacesBefore;

    if (newCursorPos > formatted.length) newCursorPos = formatted.length;

    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.setSelectionRange(newCursorPos, newCursorPos);
      }
    }, 0);
  };

  const onCardNumberKeyDown = (e) => {
    const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
    if (allowed.includes(e.key)) return;
    if (
      (e.ctrlKey || e.metaKey) &&
      ["v", "c", "x", "a"].includes(e.key.toLowerCase())
    )
      return;

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    const digits = cardNumber.replace(/\D/g, "");
    const el = e.target;
    const selStart = el.selectionStart ?? 0;
    const selEnd = el.selectionEnd ?? 0;
    const replacingDigitsCount = cardNumber
      .slice(selStart, selEnd)
      .replace(/\D/g, "").length;

    if (digits.length - replacingDigitsCount >= 16) {
      e.preventDefault();
    }
  };

  const onCardNumberPaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digits = paste.replace(/\D/g, "").slice(0, 16);
    const formatted = formatCard(digits);
    setCardNumber(formatted);
    setTimeout(() => {
      if (cardRef.current) {
        const pos = formatted.length;
        cardRef.current.setSelectionRange(pos, pos);
      }
    }, 0);
  };

  const onExpiryChange = (e) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "").slice(0, 4);
    const formatted =
      digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits;
    setExpiry(formatted);
  };

  const onExpiryKeyDown = (e) => {
    const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
    if (allowed.includes(e.key)) return;
    if (
      (e.ctrlKey || e.metaKey) &&
      ["v", "c", "x", "a"].includes(e.key.toLowerCase())
    )
      return;
    if (!/^\d$/.test(e.key)) e.preventDefault();

    const digits = expiry.replace(/\D/g, "");
    const el = e.target;
    const selStart = el.selectionStart ?? 0;
    const selEnd = el.selectionEnd ?? 0;
    const replacingDigits = expiry
      .slice(selStart, selEnd)
      .replace(/\D/g, "").length;
    if (digits.length - replacingDigits >= 4) e.preventDefault();
  };

  const onExpiryPaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digits = paste.replace(/\D/g, "").slice(0, 4);
    const formatted =
      digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits;
    setExpiry(formatted);
  };

  const onCvvChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(digits);
  };

  const onCvvKeyDown = (e) => {
    const allowed = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
    if (allowed.includes(e.key)) return;
    if (
      (e.ctrlKey || e.metaKey) &&
      ["v", "c", "x", "a"].includes(e.key.toLowerCase())
    )
      return;
    if (!/^\d$/.test(e.key)) e.preventDefault();

    if (cvv.length >= 3) {
      const el = e.target;
      const selStart = el.selectionStart ?? 0;
      const selEnd = el.selectionEnd ?? 0;
      const replacing = selEnd - selStart;
      if (replacing === 0) e.preventDefault();
    }
  };

  const onCvvPaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digits = paste.replace(/\D/g, "").slice(0, 3);
    setCvv(digits);
  };

  const validateExpiryMonth = (mm) => {
    if (!mm) return false;
    const n = Number(mm);
    return n >= 1 && n <= 12;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usserList = obtenerDelLocalStorage("usuarios");
    const usserKey = obtenerDelLocalStorage("UsserKey");

    if (!firstName) {
      alert("Ingresa Nombre (máx 12 letras).");
      return;
    }
    if (!lastName) {
      setMessage("Ingresa Apellido (máx 12 letras).");
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);

      return;
    }

    const digitsCard = cardNumber.replace(/\s/g, "");
    if (digitsCard.length !== 16) {
      setMessage("El número de tarjeta debe tener 16 dígitos.");
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);
      return;
    }
    if (
      !/^\d{2}\/\d{2}$/.test(expiry) ||
      !validateExpiryMonth(expiry.slice(0, 2))
    ) {
      setMessage("Vencimiento inválido. Usa MM/YY y mes entre 01 y 12.");
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);
      return;
    }
    if (cvv.length !== 3) {
      setMessage("CVV inválido. Debe tener 3 dígitos.");
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);
      return;
    }

    setMessage(
      `✅ Pago realizado con éxito. Gracias ${firstName} ${lastName} por elegir el plan ${selectedPlan.name}!`
    );
    setConfirm(true);
    setTimeout(() => setConfirm(false), 5000);

    const changeSub = usserList.find((u) => {
      return u.id === usserKey.id;
    });

    if (changeSub.length > 0) {
      const asignarSub = usserList.find((u) => u.id === usserKey.id);

      if (asignarSub) {
        const ahora = new Date();
        const vencimiento = new Date(ahora);
        vencimiento.setDate(vencimiento.getDate() + 30);

        const usuarioActualizado = {
          ...asignarSub,
          subActiva: selectedPlan.name,
          subPrecio: selectedPlan.price,
          subVencimiento: vencimiento,
        };

        const nuevaLista = usserList.map((u) =>
          u.id === usserKey.id ? usuarioActualizado : u
        );

        guardarEnLocalStorage("usuarios", nuevaLista);
        guardarEnLocalStorage("UsserKey", usuarioActualizado);
      }

      setTimeout(() => {
        handleClose();
        navegacion("/home");
      }, 5000);
    } else {
      const usuarioEncontrado = usserList.find((u) => {
        return Number(u.id) === Number(changeSub.id);
      });

      const ahora = new Date();
      const vencimiento = new Date(ahora);
      vencimiento.setDate(vencimiento.getDate() + 30);

      const suscripcionActualizada = {
        ...usuarioEncontrado,
        subActiva: selectedPlan.name,
        subPrecio: selectedPlan.price,
        subVencimiento: vencimiento,
      };

      const nuevaLista = usserList.map((u) =>
        u.id === usserKey.id ? suscripcionActualizada : u
      );

      guardarEnLocalStorage("usuarios", nuevaLista);
      guardarEnLocalStorage("UsserKey", suscripcionActualizada);
    }

    setTimeout(() => {
      handleClose();
      navegacion("/home");
    }, 5000);
  };

  const navigate = useNavigate();

  return (
    <section className="Subsection">
      <AlertModal alertText={message} showAlert={alert} />
      <AlertConfirm alertText={message} showConfirm={confirm} />
      <div className="form-login-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="Boton para volver para atras" />
          <p>Volver</p>
        </button>
      </div>
      <div className="plan-container">
        <h2 className="title">Elige tu Plan</h2>

        <div className="toggle-container">
          <button
            className={`toggle ${isMonthly ? "active" : ""}`}
            onClick={() => setIsMonthly(true)}
          >
            Mensual
          </button>
          <button
            className={`toggle ${!isMonthly ? "active" : ""}`}
            onClick={() => setIsMonthly(false)}
          >
            Anual
          </button>
        </div>

        <p className="description">
          Disfruta de películas, series y mucho más sin límites. Cancela cuando
          quieras.
        </p>

        <div className="plans">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <span className="badge">Más Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price} <span>{isMonthly ? "/mes" : "/año"}</span>
              </p>
              <button className="choose-btn" onClick={() => handleChoose(plan)}>
                Elegir Plan
              </button>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <TiTick /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="subscription-info">
          <p>Tu plan actual se renueva el 24 de Julio, 2024.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <small>Quedan 15 días</small>
        </div>
      </div>

      {/* Formulario de pago */}
      {selectedPlan && (
        <div className="payment-modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>
            <h3>Completa tus datos de pago</h3>
            <p>
              Plan seleccionado: <strong>{selectedPlan.name}</strong> (
              {selectedPlan.price})
            </p>

            <form
              onSubmit={handleSubmit}
              className="payment-form"
              autoComplete="off"
            >
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <div style={{ flex: 1 }}>
                  <label>Nombre</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={onFirstNameChange}
                    maxLength={12}
                    required
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <label>Apellido</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={onLastNameChange}
                    maxLength={12}
                    required
                  />
                </div>
              </div>

              <label style={{ marginTop: "0.6rem" }}>Número de tarjeta</label>
              <input
                name="cardNumber"
                type="text"
                ref={cardRef}
                inputMode="numeric"
                placeholder="4111 1111 1111 1111"
                value={cardNumber}
                onChange={onCardNumberChange}
                onKeyDown={onCardNumberKeyDown}
                onPaste={onCardNumberPaste}
                maxLength={19}
                required
                autoComplete="off"
              />

              <div className="card-details">
                <div style={{ flex: 1 }}>
                  <label>Vencimiento</label>
                  <input
                    name="expiry"
                    type="text"
                    inputMode="numeric"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={onExpiryChange}
                    onKeyDown={onExpiryKeyDown}
                    onPaste={onExpiryPaste}
                    maxLength={5}
                    required
                    autoComplete="off"
                  />
                </div>
                <div style={{ width: "110px" }}>
                  <label>CVV</label>
                  <input
                    name="cvv"
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    value={cvv}
                    onChange={onCvvChange}
                    onKeyDown={onCvvKeyDown}
                    onPaste={onCvvPaste}
                    maxLength={3}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <button type="submit" className="pay-btn">
                Realizar Pago{" "}
              </button>

              <small
                style={{ display: "block", marginTop: "10px", color: "#bbb" }}
              ></small>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
