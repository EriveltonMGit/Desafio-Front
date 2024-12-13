import React from "react";
import "./Switch.css";

interface SwitchProps {
  isSelected: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

const Switch: React.FC<SwitchProps> = ({ isSelected, onToggle }) => {
  return (
    <button
      className={`switch-button ${isSelected ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className={`switch-ball ${isSelected ? "active" : ""}`}></div>
      <span className="switch-text">{isSelected ? "Ativo" : "Inativo"}</span>
    </button>
  );
};

export default Switch;
