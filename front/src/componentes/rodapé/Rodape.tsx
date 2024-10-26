import './rodape.css'
import '../../../public/estilo/padroniza.css'

import Logo from '../../../public/img/logo.svg'

export default function Rodape() {


    return (
        <footer>
            <div className='campo-rodape'>
            <p><span>Desenvolvido por:</span> Joselaine Romão</p>
            <img src={Logo} alt="Logo" />
            </div>
        </footer>
    )
}
