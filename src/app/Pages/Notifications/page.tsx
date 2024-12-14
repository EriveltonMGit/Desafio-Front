/* eslint-disable @next/next/no-img-element */


import MensgemAviso from "@/Components/MensagemAviso/MensagemAviso";
import Nav from "../../../Components/NavBar/page";
// IMPORT CSS 
import './Notifications.css'

function Notifications() {
    return ( 
        <>
        
        {/* AQUI FICA O CONTAINER PRINCIPAL */}
        <main className="container_notifications">
        {/* AQUI FICA A IMAGEM BK NO RODAPE */}
        <div className="content_img_footer_notifications">
          <img src="/imagens/imagem_bk/Elementos de fundo.svg" alt="" loading="lazy" />
        </div>
        {/* NAV BAR */}
        <Nav />

        < MensgemAviso/>
        
      </main>
        
        
        </>
     );
}

export default Notifications;