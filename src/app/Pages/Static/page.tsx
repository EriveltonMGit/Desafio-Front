/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../../../Components/NavBar";
// IMPORT CSS
import "./Static.css";

function StaticPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Inicializa o hook useRouter

  // Função para avançar para o próximo span
  function exibirConcluido() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= 9 ? 9 : nextIndex; // Ajuste o número total de spans
    });
  }

  // Função para voltar ao item anterior ou redirecionar para a home
  function exibirVoltar() {
    if (currentIndex === 0) {
      router.push("/"); // Redireciona para a home
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <>
      {/* AQUI FICA O CONTAINER PRINCIPAL */}
      <main className="container_home_static">
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="" />
        </div>
        {/* NAV BAR */}
        <Nav />
        <div className="container_statics">
          <div className="div-menu">
            <section className="status_container-static">
              {/* AQUI FICA O ARRAY DE CARD STATUS */}
              <div className="container_items">
                <div className="line"></div>

                {[...Array(9)].map((_, index) => (
                  <div key={index} className="cards_status">
                    <div
                      className={`div_bk_item items_time_line ${
                        currentIndex >= index ? "highlight" : ""
                      } ${currentIndex === index ? "active-border" : ""}`}
                    >
                      <img src="/Vector.webp" alt="Image status" />
                    </div>
                    <p>Item {index + 1}</p>
                    {currentIndex >= index && (
                      <span id="span-status-prox">Concluido</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="container-mensasem-static">
            <div className="aviso-static">
              <h1>Em Breve</h1>
            </div>
          </div>

          {/* AQUI FICA A SECTION ARROW - PROXIMO PASSO */}
          <section className="px_passos">
            <button className="bt_anterior-static" onClick={exibirVoltar}>
              <p>Anterior</p>
            </button>
            <button className="btn_proximo" onClick={exibirConcluido}>
              <p>Próximo passo</p>
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default StaticPage;
