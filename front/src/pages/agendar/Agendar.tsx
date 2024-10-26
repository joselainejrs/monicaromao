import styleConsultar from './agendar.module.css';
import Menu from '../../componentes/menu/Menu';
import Rodape from '../../componentes/rodapé/Rodape';
import CardAgendamento from '../../componentes/cards/cardagendamento/CardAgendamento';
import CardLogin from '../../componentes/cards/card-login/CardLogin';


export default function Agendar() {
  return (
    <>
      < Menu />
      <div>
        <section >
          <div className={styleConsultar['tela-geral-agenda-login']}>
            <div><CardAgendamento /></div>
            <div><CardLogin /></div>
          </div>
        </section>
      </div>
      <Rodape />
    </>
  )
}

