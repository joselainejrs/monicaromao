import './menu.css'
import '../../../public/estilo/padroniza.css'
import Logo from '../../../public/img/logo.svg'
import { Link, useLocation } from 'react-router-dom';


import styled from 'styled-components'

// Componente estilizado usando styled-components

const ListaNaoOrdenada = styled.ul`
  display: flex;
 
   @media (max-width: 850px) {
        padding: 0;
        justify-content: space-evenly;
  }
`;

const IconeLogo = styled.img`
  padding: 0;
`;

const ListaMenu = styled.li`
  list-style: none;
`;


export default function Menu() {
  const location = useLocation();

  const OpcoesMenu = [
    { 'label': 'Quem Sou', 'path': '/', 'img': '../../../public/img/menu/quem-sou.svg', 'alt': 'Icone de carteira de usuario' },
    { 'label': 'Agendar Consulta', 'path': '/agendar', 'img': '../../../public/img/menu/agendamento.svg', 'alt': 'Icone de sacola de compra' },
  ]

  return (
    <header>
      <div className='campo-menu'>
        <IconeLogo src={Logo} alt="Logo" />
        <nav>
          <ListaNaoOrdenada>
            {OpcoesMenu.map((menu, index) => (
              <ListaMenu key={index}>
                {/* <img src={menu.img} alt={menu.alt} /> */}
                <Link className={location.pathname === menu.path ? 'link active' : 'link'} to={menu.path}>
                  {menu.label}
                </Link>
              </ListaMenu>
            ))}
          </ListaNaoOrdenada>
        </nav>
      </div>
    </header>
  )
}

