/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import "./Home.css";
import Link from "next/link";
import Nav from "../../../Components/NavBar/page";
import ItemsStatus from "@/Components/ItemsStatus/ItemsStatus";
import Switch from "antd/es/switch";

function Home() {
  const [crudVisible, setCrudVisible] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

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

  // DEFINE OS FUNCIONÁRIOS INICIAIS FILTRADOS APENAS COMO ATIVOS
  const [filteredFuncionarios, setFilteredFuncionarios] = useState(
    itemsFuncionarios.filter((funcionario) => funcionario.estado === "ativo")
  );
  // EXIBE OU ESCONDE A DIV DE CRUD PARA UM FUNCIONÁRIO ESPECÍFICO
  const mostrarDivCrud = (id: number, e?: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    setCrudVisible(crudVisible === id ? null : id);
  };
  // ALTERA O ESTADO DA CHAVE "ISCOMPLETED" QUANDO O SWITCH É MODIFICADO
  const handleSwitchChange = (checked: boolean) => {
    setIsCompleted(checked);
  };
  // FILTRA E EXIBE APENAS OS FUNCIONÁRIOS ATIVOS
  const verAtivos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ativos = itemsFuncionarios.filter(
      (funcionario) => funcionario.estado === "ativo"
    );
    setFilteredFuncionarios(ativos);
  

    
  };
  // LIMPA OS FILTROS E EXIBE TODOS OS FUNCIONÁRIOS
  const limparFiltros = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilteredFuncionarios(itemsFuncionarios);
    const contaienr_list = document.getElementById(`contaienr_list`);
      const secttion_form = document.getElementById(`form_container`);
    
    if (secttion_form?.style.height) {
      if (secttion_form.style.height === "538px") {
        secttion_form.style.height = "auto";
      } else {
        secttion_form.style.height = "354px";
      }
    }
    if (contaienr_list?.style.height) {
      if (contaienr_list.style.height === "232px") {
        contaienr_list.style.height = "448px";
      } else {
        contaienr_list.style.height = "232px";
      }
    }
  };

  return (
    <>
      <main className="container_home" id="form_container">
        <div className="content_img_footer_home">
          <img
            src="/imagens/imagem_bk/Elementos de fundo.svg"
            alt="Elemento de fundo"
            loading="lazy"
          />
        </div>

        <Nav />

        <section className="container_sections">
          <ItemsStatus />
          <section className="section_form" >
            <div className="perfil">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
                ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec
                mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut
                at tristique libero, nec efficitur dui. Aliquam erat volutpat.
                Fusce quam sem, tempus nec justo eget, luctus scelerisque velit.
                Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
                Proin ac lacinia erat, et commodo felis. Phasellus tempor
                tellus.
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
                  <p className="rota-add-func">+ Adicionar Funcionário</p>
                </Link>
                <main className="filtros">
                  <div>
                    <button className="btn_ativos" onClick={verAtivos}>
                      <p>Ver apenas ativos</p>
                    </button>
                    <button onClick={limparFiltros}>
                      <p>Limpar filtros</p>
                    </button>
                  </div>
                  <p className="ativos">
                    Ativos{" "}
                    {
                      filteredFuncionarios.filter((f) => f.estado === "ativo")
                        .length
                    }
                    /{itemsFuncionarios.length}
                  </p>
                </main>
              </section>
              <main className="container_items_list" id="contaienr_list">
                {filteredFuncionarios.map((item) => (
                  <div
                    key={item.id}
                    className={`lista_item ${
                      item.estado === "inativo" ? "inativo" : ""
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
                        e.preventDefault();
                        mostrarDivCrud(item.id, e);
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
                <Switch
                  className="custom-switch"
                  checkedChildren="Sim"
                  unCheckedChildren="Não"
                  defaultChecked={isCompleted}
                  onChange={handleSwitchChange}
                />
              </section>
            </form>
          </section>

          <section className="px_passos">
            <button className="bt_anterior">
              <Link href="/Pages/Home">Anterior</Link>
            </button>
            <button
              className="btn_proximo"
              style={{
                backgroundColor: isCompleted ? "#649fbf" : "",
              }}
              disabled={!isCompleted}
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
