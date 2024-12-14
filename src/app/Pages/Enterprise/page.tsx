/* eslint-disable @next/next/no-img-element */
'use client'

import MensgemAviso from "@/Components/MensagemAviso/MensagemAviso";
import Nav from "../../../Components/NavBar/page";

// IMPORT CSS 
import './Enterprise.css'
function Enterprise() {
    return ( 
        <>
        
        {/* AQUI FICA O CONTAINER PRINCIPAL */}
        <main className="container_home">
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="" />
        </div>
        {/* NAV BAR */}

       {/* aqui fica o menu dvice */}
        
        {/* aqui fica o nav lateral */}
        <Nav />
        < MensgemAviso/>
        
      </main>
        
        
        </>
     );
}

export default Enterprise;