/* eslint-disable @next/next/no-img-element */
"use client";
// IMPORT DOS COMPONENTS
import ItemsStatus from "@/Components/ItemsStatus/ItemsStatus";
import Nav from "../../../Components/NavBar";
import { useState } from "react";
//AQUI FICA O CSS
import "./Home.css";
import Link from "next/link";
import Swhitch from "@/Components/Switch/Swhitch";


function Home() {
  // AQUI FICA O ARRAY DE FUNCIONÁRIOS
  const itemsFuncionarios = [
    {
      id: 1,
      nome: "",
      ativo: "Ativo",
      cargo: "Cargo 1",
      codigoFuncionario: "",
    },
    {
      id: 2,
      nome: "",
      ativo: "Ativo",
      cargo: "Cargo 1",
      codigoFuncionario: "",
    },
    {
      id: 3,
      nome: "",
      ativo: "Ativo",
      cargo: "Cargo 1",
      codigoFuncionario: "",
    },
    {
      id: 4,
      nome: "",
      ativo: "Ativo",
      cargo: "Cargo 1",
      codigoFuncionario: "",
    },
  ];

  // AQUI FICA O ESTADO PARA MOSTRAR O BUTTON DE CRUD - EDITAR E EXLUIR
  const [crudVisible, setCrudVisible] = useState<number | null>(null);
  // Alternar a visibilidade do botão CRUD
  const mostrarDivCrud = (id: number, e?: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    setCrudVisible(crudVisible === id ? null : id);
  };

 
  
  


  return (
    <>
      {/* AQUI FICA O CONTAINER PRINCIPAL */}
      <main className="container_home">
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="" />
        </div>
        {/* NAV BAR */}
        <Nav />
        {/* AQUI FICA O 1 CONTAINER COM 3 SECTIONS DO FORM */}
        <section className="container_sections">
          {/* AQUI FICA O NAV STATUS */}
          <ItemsStatus />
          {/* AQUI FICA A SECTION DE FORM DOS FUNCIONÁRIOS */}
          <section className="section_form">
            {/* CARD PERFIL */}
            <div className="perfil">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
                ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec
                mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut
                at tristique libero, nec efficitur dui. Aliquam erat volutpat.
                Fusce quam sem, tempus nec justo eget, luctus scelerisque velit.
                Nam sollicitudin purus urna, vitae ornare neque tincidunt vel.
                Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus
                eu vulputate tempus
              </p>
              <img src="/imagens/icons/user-profile-icon.svg" alt="" />
            </div>
            {/* AQUI FICA A DIV DO FORMULÁRIO DE CLÍENTES */}
            <form className="form_container">
              {/* AQUI FICA O TITULO DO FORM */}
              <div className="title_form">
                <p>Funcionário(s)</p>
              </div>
              {/* AQUI FICA O BUTTON DE ADICIONAR FUNCIONÁRIOS */}
              <section className="container_funcionarios">
                <button className="add_funcionario"  >
                <Link href="/Pages/Funcionarios">+ Adicionar Funcionário</Link>
          

                </button>
                {/* AQUI FICA OS FILTROS DE PESQUISA DE FUNCIONARIOS */}
                <main className="filtos">
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
              {/* ÁREA DE ARRAY DOS  CARDS FUNCIONÁRIOS */}

              <main className="container_items_list">
                {itemsFuncionarios.map((item) => (
                  <div key={item.id} className="lista_item">
                    <div className="area_content_funcionarios">
                      <h2>Daniel da Silva</h2>
                      <div>
                        <button>00000</button>
                        <button>{item.ativo}</button>
                        <button>{item.cargo}</button>
                      </div>
                    </div>
                    {/* AQUI FICA O BTN EDITAR E EXCLUIR DO CADASTRO */}
                    <button
                      className="btn_edit"
                      onClick={(e) => {
                        e.preventDefault(); // Impede a ação padrão do botão, que é submeter o formulário
                        mostrarDivCrud(item.id, e);
                      }}
                    >
                      <img src="/imagens/icons/button....svg" alt="" />

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

              {/* AQUI FICA O SWITCH */}
              <section className="container_switch">
                <p>A etapa está concluída?</p>

                <Swhitch />
              </section>
            </form>
          </section>
          {/* AQUI FICA A SECTION ARROW - PROXIMO PASSO */}
          <section className="px_passos">
            <button className="bt_anterior">
              <Link href="/" legacyBehavior>
                <a>Anterior</a>
              </Link>
            </button>
            <button className="btn_proximo">
              <Link href="/Pages/Funcionarios" legacyBehavior>
                <a>Próximo passo</a>
              </Link>
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
