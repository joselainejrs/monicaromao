import stylesRodape from './rodape.module.css'
import Logo from '../../../public/img/logo.svg'

export default function Rodape() {


    return (
        <footer>
            <div className={stylesRodape["campo-rodape"]}>
            <p className={stylesRodape.descricao}><span className={stylesRodape["destaque-descricao"]}>Desenvolvido por:</span> Joselaine Romão</p>
            <img src={Logo} alt="Logo" />
            </div>
        </footer>
    )
}
