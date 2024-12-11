
import Link from "next/link";
import "./Nav.css";
import Image from "next/image";
function Nav() {
  // AQUI FICA O ARRAY DE BUTTONS DO NAV LATERAL
  const itemsButtons = [
    { id: 1, image: "/imagens/icons/enterprise-icon.svg", rota: "/Pages/Enterprise" },
    { id: 2, image: "/imagens/icons/edit-icon.svg" },
    { id: 3, image: "/imagens/icons/sitemap-icon.svg", rota: "/Pages/Sitemap" },
    { id: 4, image: "/imagens/icons/bell-icon.svg", imageNotification: "/imagens/icons/Group 88.svg", rota: "/Pages/Notifications" },
    { id: 5, image: "/imagens/icons/time-loop-icon.svg", rota: "/Pages/History" },
    { id: 6, image: "/imagens/icons/user-icon.svg", rota: "/Pages/Perfil" },
  ];

  return (
    <>
      {/* HEADER CONTAINER */}
      <header className="header_">
        {/* AQUI FICA O GRUPO - logo */}
        <div className="rectangle_"></div>
        {/* AQUI FICA A NAV LATERAL */}
        <nav className="nav_bar_lateral">
          {/* AQUI FICA O ARRAY DE BUTTONS DO NAV LATERAL */}
          {itemsButtons.map((item) => (
            <button key={item.id}>
              <Link href={item.rota || "/"}> {/* Fallback para '/' se a rota for undefined */}
                <div className="nav-item">
                  <Image src={item.image} alt={`Ícone ${item.id}`} />
                  {/* Verifica se existe uma imagem de notificação e exibe */}
                  {item.imageNotification && (
                    <Image
                      src={item.imageNotification}
                      alt="Notificação"
                      className="notification-icon"
                    />
                  )}
                </div>
              </Link>
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Nav;
