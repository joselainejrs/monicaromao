import './home.css';
import MonicaRomao from '../../../public/img/home/monica.png'
import Menu from '../../componentes/menu/Menu';
import Rodape from '../../componentes/rodapé/Rodape';
import '../../../public/estilo/padroniza.css'


export default function Home() {
  return (
    <>
      < Menu />
      <div className='conteudo'>
        <div className='conteudo-home'>
          <div>
            <div className='campo-descicao'>
              <p className='monica'>
                Sou <span>Mônica Romão</span>, especia lista em cuidado dos pés (Podologa) há mais de 7 anos.

                Meu foco é promover o bem-estar e a saúde dos pés, sempre com comprometimento à qualidade, eficiência, integridade e respeito.
              </p>
              <p className='slong'>
                Cuide com Amor, Caminhe com Conforto
              </p>
            </div>

            <button>Agendar Consulta</button>

          </div>

          <img className='img-monica' src={MonicaRomao} alt="Logo" />

        </div>
      </div>

      <Rodape />
    </>
  )
}

