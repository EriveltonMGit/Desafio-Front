/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./Nav.css";


function Nav() {
  // AQUI FICA O ARRAY DE BUTTONS DO NAV LATERAL
  const itemsButtons = [
    { id: 1, image: "/enterprise-icon.webp", rota: "/Pages/Enterprise",  },
    { id: 2, image: "/edit-icon.webp",},
    { id: 3, image: "/sitemap-icon.webp", rota: "/Pages/Sitemap", },
    { id: 4, image: "/bell-icon.webp",  rota: "/Pages/Notifications", },
    { id: 5, image: "/time-loop-icon.webp", rota: "/Pages/History",  },
    { id: 6, image: "/user-icon.webp", rota: "/Pages/Perfil", },
  ];

  return (
    <>
      {/* HEADER CONTAINER */}
      <header className="header_">
        {/* AQUI FICA O GRUPO - logo */}
        <div className="rectangle_"></div>
        {/* AQUI FICA A NAV LATERAL */}
        <nav className="nav_bar_lateral">
          <div className="div_bar">
          {/* AQUI FICA O ARRAY DE BUTTONS DO NAV LATERAL */}
          {itemsButtons.map((item) => (
            <button key={item.id}>
              <Link href={item.rota || "/"}> {/* Fallback para '/' se a rota for undefined */}
                <div className="nav-item">
                  <img
                    src={item.image}
                    alt={`Ícone ${item.id}`}
                   
                  />
                  {/* Verifica se existe uma imagem de notificação e exibe */}
                  
                </div>
              </Link>
            </button>
          ))}  
          </div>
          
        </nav>
      </header>
    </>
  );
}

export default Nav;
