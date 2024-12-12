/* eslint-disable @next/next/no-img-element */


import MensgemAviso from "@/Components/MensagemAviso/MensagemAviso";
import Nav from "../../../Components/NavBar/page";
// IMPORT CSS 
import './Perfil.css'

function Perfil() {
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

        < MensgemAviso/>
        
      </main>
        
        
        </>
     );
}

export default Perfil;