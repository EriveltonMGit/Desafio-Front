/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import "./Home.css";
import Link from "next/link";
import Nav from "../../../Components/NavBar/page";
import ItemsStatus from "@/Components/ItemsStatus/ItemsStatus";
import Switch from "../../../Components/Switch/Switch";


function Home() {
  // Estado e outras funções
  const [crudVisible, setCrudVisible] = useState<number | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const mostrarDivCrud = (id: number, e?: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    setCrudVisible(crudVisible === id ? null : id);
  };
//  FUNÇAÕ DO SWITCH
  const toggleSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelected((prevState) => !prevState);
  };




  // Array de Funcionários
  const itemsFuncionarios = [
    { id: 1, nome: "Daniel Alves da Silva", codigoFuncionario: "000.000.000-99", estado: "ativo", cargo: "Cargo 1" },
    { id: 2, nome: "Giselee Torres Lopes", codigoFuncionario: "000.000.000-99", estado: "inativo", cargo: "Cargo 2" },
    { id: 3, nome: "Ana Bispo dos Santos", codigoFuncionario: "000.000.000-99", estado: "inativo", cargo: "Cargo 3" },
    { id: 4, nome: "Regina Elisa Sousa", codigoFuncionario: "000.000.000-99", estado: "ativo", cargo: "Cargo 4" },
  ];

  return (
    <>
      <main className="container_home">
        <div className="content_img_footer">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="Elemento de fundo" loading="lazy" />
        </div>

        <Nav />
      
        {/* Conteúdo Principal */}
        <section className="container_sections">
          <ItemsStatus />
          <section className="section_form">
            <div className="perfil">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
                ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec
                mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut
                at tristique libero, nec efficitur dui. Aliquam erat volutpat.
                Fusce quam sem, tempus nec justo eget, luctus scelerisque velit.
                Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
                Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus</p>
              <img src="/perfil-user.webp" alt="Imagem de perfil" loading="lazy" />
            </div>

            <form className="form_container">
              <div className="title_form">
                <p>Funcionário(s)</p>
              </div>
              <section className="container_funcionarios">
                <button className="add_funcionario">
                  <Link href="/Pages/Funcionarios">+ Adicionar Funcionário</Link>
                </button>
                <main className="filtros">
                  <div>
                    <button>
                      <p>Ver apenas ativos</p>
                    </button>
                    <button>
                      <p>Limpar filtros</p>
                    </button>
                  </div>
                  <p className="ativos">Ativos 2/4</p>
                </main>
              </section>
              <main className="container_items_list">
                {itemsFuncionarios.map((item) => (
                  <div
                    key={item.id}
                    className={`lista_item ${item.id === 2 || item.id === 3 ? "diferente" : ""}`}
                  >
                    <div className="area_content_funcionarios">
                      <h2>{item.nome}</h2>
                      <div>
                        <button>{item.codigoFuncionario}</button>
                        <button>{item.estado}</button>
                        <button>{item.cargo}</button>
                      </div>
                    </div>
                    <button
                      className="btn_edit"
                      onClick={(e) => {
                        e.preventDefault();
                        mostrarDivCrud(item.id, e);
                      }}
                    >
                      <img src="/butom_edit.webp" alt="Editar/Excluir" loading="lazy" />
                      {crudVisible === item.id && (
                        <div className="btn_crud">
                          <a>Editar</a>
                          <a>Excluir</a>
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </main>

              <section className="container_switch">
                <h5>A etapa está concluída?</h5>
                <Switch isSelected={isSelected} onToggle={toggleSwitch} />
              </section>
            </form>
          </section>

          <section className="px_passos">
            <button className="bt_anterior">
              <Link href="/Pages/Home">Anterior</Link>
            </button>
            <button className="btn_proximo">
              <Link href="/Pages/Funcionarios">Próximo passo</Link>
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
