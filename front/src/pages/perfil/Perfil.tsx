import CardMenuOpcoes from '../../componentes/cards/CardMenuOpcoes/CardMenuOpcoes';
import CardStatusConsulta from '../../componentes/cards/CardStatusConsulta/CardStatusConsulta.';
import Menu from '../../componentes/menu/Menu';
import Rodape from '../../componentes/rodapé/Rodape';
import stylePerfil from './perfil.module.css';

export default function Perfil() {
    return (
      <>
      <Menu />
      <section>
        <div className={stylePerfil["campo-perfil"]}>
        <CardMenuOpcoes />

        <div className={stylePerfil["descricoes-opcoes"]}>
          <h2 className={stylePerfil.title}>Agendamentos</h2>
          <div className={stylePerfil['campo-status']}>
        <CardStatusConsulta />
        <CardStatusConsulta />
        <CardStatusConsulta />
          </div>
        </div>
        
        </div>
      </section>
      <Rodape />
      </>
    )
}

