/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import "./Home.css";
import Link from "next/link";
import Nav from "../../../Components/NavBar/page";
import ItemsStatus from "@/Components/ItemsStatus/ItemsStatus";
import Switch from "antd/es/switch";

function Home() {
  // Estado para controlar se o CRUD está visível
  const [crudVisible, setCrudVisible] = useState<number | null>(null);

  // Estado para controlar se o Switch está ativado (etapa concluída)
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  // Estado para controlar o efeito de piscar do Switch
  

  // Função para exibir ou esconder o formulário de CRUD
  const mostrarDivCrud = (id: number, e?: { preventDefault: () => void }) => {
    if (e) e.preventDefault(); // Evita o comportamento padrão do evento (evita o refresh da página)
    setCrudVisible(crudVisible === id ? null : id); // Alterna entre mostrar ou esconder o CRUD baseado no id
  };

  // Função para manipular a mudança do Switch
  const handleSwitchChange = (checked: boolean) => {
    setIsCompleted(checked); // Atualiza o estado isCompleted para refletir se o Switch está ativo ou não
  };

  // Array de Funcionários, usado para renderizar os itens na lista
  const itemsFuncionarios = [
    {
      id: 1,
      nome: "Daniel Alves da Silva",
      codigoFuncionario: "000.000.000-99",
      estado: "ativo",
      cargo: "Cargo 1",
    },
    {
      id: 2,
      nome: "Giselee Torres Lopes",
      codigoFuncionario: "000.000.000-99",
      estado: "inativo",
      cargo: "Cargo 2",
    },
    {
      id: 3,
      nome: "Ana Bispo dos Santos",
      codigoFuncionario: "000.000.000-99",
      estado: "inativo",
      cargo: "Cargo 3",
    },
    {
      id: 4,
      nome: "Regina Elisa Sousa",
      codigoFuncionario: "000.000.000-99",
      estado: "ativo",
      cargo: "Cargo 4",
    },
  ];

  return (
    <>
      <main className="container_home">
        <div className="content_img_footer">
          <img
            src="/imagens/imagem_bk/Elementos de fundo.svg"
            alt="Elemento de fundo"
            loading="lazy"
          />
        </div>

        <Nav />

        {/* Conteúdo Principal */}
        <section className="container_sections">
          <ItemsStatus />
          <section className="section_form">
            <div className="perfil">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
                ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec
                mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut
                at tristique libero, nec efficitur dui. Aliquam erat volutpat.
                Fusce quam sem, tempus nec justo eget, luctus scelerisque velit.
                Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
                Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus
              </p>
              <img
                src="/perfil-user.webp"
                alt="Imagem de perfil"
                loading="lazy"
              />
            </div>

            <form className="form_container">
              <div className="title_form">
                <p>Funcionário(s)</p>
              </div>
              <section className="container_funcionarios">
                <Link className="add_funcionario" href="/Pages/Funcionarios">
                  <p className="rota-add-func" >
                    + Adicionar Funcionário
                  </p>
                </Link>
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
                    className={`lista_item ${
                      item.id === 2 || item.id === 3 ? "diferente" : ""
                    }`}
                  >
                    <div className="area_content_funcionarios">
                      <h2 className="nome-fun">{item.nome}</h2>
                      <div>
                        <button>{item.codigoFuncionario}</button>
                        <button>{item.estado}</button>
                        <button>{item.cargo}</button>
                      </div>
                    </div>
                    <button
                      className="btn_edit"
                      onClick={(e) => {
                        e.preventDefault(); // Evita o comportamento padrão do evento (evita o refresh da página)
                        mostrarDivCrud(item.id, e); // Exibe ou esconde o CRUD baseado no id
                      }}
                    >
                      <img
                        src="/butom_edit.webp"
                        alt="Editar/Excluir"
                        loading="lazy"
                      />
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
                {/* Switch para marcar a etapa como concluída ou não */}
                <Switch
                  className="custom-switch"
                  checkedChildren="Sim"
                  unCheckedChildren="Não"
                  defaultChecked={isCompleted} // Define o estado inicial baseado em isCompleted
                  onChange={handleSwitchChange} // Atualiza o estado quando o switch é alterado
                />
              </section>
            </form>
          </section>

          <section className="px_passos">
            {/* Botão Anterior */}
            <button className="bt_anterior">
              <Link href="/Pages/Home">Anterior</Link>
            </button>

            {/* Botão Próximo */}
            <button
              className="btn_proximo"
              style={{
                backgroundColor: isCompleted ? "#649fbf" : "", // Altera a cor de fundo do botão quando o switch está ativado
              }}
              disabled={!isCompleted} // Desabilita o botão caso o switch não esteja ativado
            >
              <Link href={isCompleted ? "/Pages/StaticPage" : "#"} passHref> 
                Próximo passo
              </Link>
            </button> 
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
