/* eslint-disable @next/next/no-img-element */
"use client";
// IMPORT DOS COMPONENTS
import ItemsStatus from "@/Components/ItemsStatus/ItemsStatus";
import Nav from "../../../Components/NavBar/index";

//AQUI FICA O CSS
import "./Funcionarios.css";
import Link from "next/link";
import FormGroup_1 from "@/Components/FormGroup/FormGroup";
import FormGroup_2 from "@/Components/FormGroup_2/FormGroup_2";
import FormGroup_3 from "@/Components/FormFroup_3/FormFroup_3";

function Funcionarios() {
  // FUNÇÃO PARA MUDAR A COR DE BK DOS ITEMS DE 1 A 9

  return (
    <>
      {/* AQUI FICA O CONTAINER PRINCIPAL */}
      <main className="container_cadastro">
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer">
          <img
            src="/imagens/imagem_bk/Elementos de fundo.svg"
            alt="Elemento de fundo"
          />
        </div>
        {/* NAV BAR */}
        <Nav />
        {/* AQUI FICA O 1 CONTAINER COM 3 SECTIONS DO FORM */}
        <section className="container_sections_cadastro">
          <main className="content_cadastro_container">
            {/* AQUI FICA O NAV STATUS */}
            <ItemsStatus />
            {/* AQUI FICA A SECTION DE FORM DOS FUNCIONÁRIOS */}
            <section className="section_form">
              {/* CARD PERFIL */}
              <div className="perfil">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
                  ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur
                  nec mattis dolor. Nulla finibus bibendum ligula tempus
                  vehicula. Ut at tristique libero, nec efficitur dui. Aliquam
                  erat volutpat. Fusce quam sem, tempus nec justo eget, luctus
                  scelerisque velit. Nam sollicitudin purus urna, vitae ornare
                  neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
                  Phasellus tempor tellus eu vulputate tempus
                </p>

                <img src="/perfil-user.webp" alt="Imagem de perfil" />
              </div>
              {/* AQUI FICA A DIV DO FORMULÁRIO DE CLÍENTES */}
              <section className="form_container">
                {/* AQUI FICA O TITULO DO FORM */}
                <div className="title_form">
                  <Link href="/">
                    <p>
                      <img src="/Arrow.webp" alt="" />{" "}
                      Funcionário(s)
                    </p>
                  </Link>
                </div>
                {/* AQUI FICA O BUTTON DE ADICIONAR FUNCIONÁRIOS */}
                <section className="container_funcionarios_add_form">
                  <main className="container_form_add">
                    {/* AQUI FICA O FORM DE NOME */}
                    <form className="form_cadastro">
                      <FormGroup_1 />
                      <FormGroup_2 />
                      <FormGroup_3 />
                    </form>
                    {/* AQUI FICA O BUTTON SALVAR  */}
                    <button className="salvarFomr">
                      <p>Salvar</p>
                    </button>
                  </main>
                </section>
              </section>
            </section>
            {/* AQUI FICA A SECTION ARROW - PROXIMO PASSO */}
            <section className="px_passos">
              <button className="bt_anterior">
                <Link href="/" legacyBehavior>
                  <a>Anterior</a>
                </Link>
              </button>
              <button className="btn_proximo">
                <Link href="/" legacyBehavior>
                  <a>Próximo passo</a>
                </Link>
              </button>
            </section>
          </main>
        </section>
      </main>
    </>
  );
}

export default Funcionarios;
