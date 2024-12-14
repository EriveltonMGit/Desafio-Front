/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import './NavDevice.css';
import Link from "next/link";

const NavMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const pages = [
    { id: 1, nome: "Início", image: "/home.webp", rota: "/Pages/Home" },
    { id: 2, nome: "Sobre a Empresa", image: "/enterprise-icon.webp", rota: "/Pages/Enterprise" },
    { id: 3, nome: "Adicionar funcionário", image: "/edit-icon.webp", rota: "/Pages/Funcionarios" },
    { id: 4, nome: "Sistemas", image: "/sitemap-icon.webp", rota: "/Pages/Sitemap" },
    { id: 5, nome: "Notificações", image: "/bell-icon.webp", rota: "/Pages/Notifications" },
    { id: 6, nome: "Histórico", image: "/time-loop-icon.webp", rota: "/Pages/History" },
    { id: 7, nome: "Usuário", image: "/user-icon.webp", rota: "/Pages/Perfil" },
  ];

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
    console.log("Menu visível:", !isVisible); // Debug
  };

  return (
    <header className="nav-menu">
      {/* Botão de menu */}
      <nav className="container_menu_device">
        <img src="/favicon.png" alt="logo" loading="lazy" />
        <button className="btn-cart" onClick={toggleMenu}>
          <FiMenu className="icon-elipsi"/>
        </button>
      </nav>

      {/* Menu Elipsi */}
      <nav className={`menu-device ${isVisible ? "show" : ""}`} id="menu_device">
        {/* Título */}
        <h1 className="menu-title">Bem-vindo à SEA Tecnologia</h1>

        {/* Lista de links */}
        <ul className="menu-list">
          {pages.map((page) => (
            <li key={page.id} className="menu-item">
              <a href={page.rota} className="menu-link">
                <img
                  src={page.image}
                  alt={`Ícone da página ${page.rota}`}
                  className="menu-icon"
                />
              <p>  {page.nome}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="rodape_menu_device">
          <Link href="https://www.seatecnologia.com.br/">Sobre</Link>
          <img src="/favicon.png" alt="logo" loading="lazy" />
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
