import './home.css';
import MonicaRomao from '../../../public/img/home/monica.png'
import Menu from '../../componentes/menu/Menu';
import Rodape from '../../componentes/rodapé/Rodape';

export default function Home() {
  return (
    <>
      < Menu />
      <section className='conteudo'>
        <div className='conteudo-home'>
          <div>
            <div className='campo-descicao'>
              <p className='monica'>
                Sou <span className='dest-text'>Mônica Romão</span>, especia lista em cuidado dos pés (Podologa) há mais de 7 anos.</p>
              
              <p className='monica'>Meu foco é promover o bem-estar e a saúde dos pés, sempre com comprometimento à qualidade, eficiência, integridade e respeito.</p>

              <span className='dest-text'>
                Cuide com Amor, Caminhe com Conforto
              </span>
            </div>

            <button className='btn-agenda'>Agendar Consulta</button>

          </div>

          <img className='img-monica' src={MonicaRomao} alt="Logo" />

        </div>
      </section>

      <Rodape />
    </>
  )
}

