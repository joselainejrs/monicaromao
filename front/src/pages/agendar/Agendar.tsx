import './agendar.css';
import Menu from '../../componentes/menu/Menu';
import Rodape from '../../componentes/rodapé/Rodape';
import '../../../public/estilo/padroniza.css'
import CardAgendamento from '../../componentes/cards/cardagendamento/CardAgendamento';
import CardLogin from '../../componentes/cards/card-login/CardLogin';
// import Cards from '../../componentes/cards/Cards';


export default function Agendar() {
  return (
    <>
      < Menu />
      <div className='conteudo'>
        <div className='conteudo-login'>
          {/* <Cards /> */}
          <div>
            <CardAgendamento />
          </div>
          <div>
            <CardLogin />
          </div>

        </div>
      </div>

      <Rodape />
    </>
  )
}

