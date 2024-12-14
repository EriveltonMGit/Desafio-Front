/* eslint-disable @next/next/no-img-element */
'use client'

import MensgemAviso from "@/Components/MensagemAviso/MensagemAviso";
import Nav from "../../../Components/NavBar/page";

// IMPORT CSS 
import './Enterprise.css'
function Enterprise() {
    return ( 
        <section className="container_enterprise">
        
        {/* AQUI FICA O CONTAINER PRINCIPAL */}
        <main >
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer_enterprise">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="" />
        </div>
        {/* NAV BAR */}

       {/* aqui fica o menu dvice */}
        
        {/* aqui fica o nav lateral */}
        <Nav />
        < MensgemAviso/>
        
      </main>
        
        
        </section>
     );
}

export default Enterprise;