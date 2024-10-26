import OpcoesSelecionaMenu from '../../OpcoesSelecionaMenu/OpcoesSelecionaMenu';
import styleCardMenuOpcoes from './CardMenuOpcoes.module.css';

export default function CardMenuOpcoes() {
    return (
        <div className={styleCardMenuOpcoes['card-perfil']}>
            <div className={styleCardMenuOpcoes.primario}>
                <div className={styleCardMenuOpcoes.apresentacao}>
                    <div className={styleCardMenuOpcoes['campo-descricao']}>
                    {/* <img src="" alt="" /> */}
                    <div className={styleCardMenuOpcoes.circulo}></div>
                    <div className={styleCardMenuOpcoes.detalhes}>
                        {/* nome e sobrenome */}
                        <p className={styleCardMenuOpcoes.nome}>Mônica Helena</p>
                        <p className={styleCardMenuOpcoes.tipo}>Proprietaria</p>
                    </div>
                    </div>
                    <hr />
                    <OpcoesSelecionaMenu />

                </div>

            </div>
            <div className={styleCardMenuOpcoes.segundario}>
                    <OpcoesSelecionaMenu />

            </div>
        </div>
    )
}

