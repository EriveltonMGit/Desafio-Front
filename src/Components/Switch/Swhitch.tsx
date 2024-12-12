import React, { useState } from "react";
import "./Swith.css"; 

function Switch() {
  const [isSelected, setIsSelected] = useState(false); // Estado para controlar o texto

  const toggleSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelected((prevState) => !prevState); // Alterna entre os estados
  };

  return (
    <button className={`switch-button ${isSelected ? "active" : ""}`} onClick={toggleSwitch}>
      <div className={`switch-ball ${isSelected ? "active" : ""}`}></div>
      <span className="switch-text">{isSelected ? "Ativo" : "Inativo"}</span>
    </button>
  );
}

export default Switch;
