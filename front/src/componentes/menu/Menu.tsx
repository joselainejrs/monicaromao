import './menu.css'
import Logo from '../../../public/img/logo.svg'
import { Link, useLocation } from 'react-router-dom';


import styled from 'styled-components'

// Componente estilizado usando styled-components
const CampoMenu = styled.div`
  background-color: white;
`;

const Background = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 850px) {
    display: block;
    text-align: center;
  }
`;

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
    { 'label': 'Agendar Consulta', 'path': '/Agendar', 'img': '../../../public/img/menu/agendamento.svg', 'alt': 'Icone de sacola de compra' },
  ]

  return (
    <CampoMenu>
      <Background>
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
      </Background>
    </CampoMenu>
  )
}

