import styleOpcoesSelecionar from './OpcoesSelecionaMenu.module.css';

export default function OpcoesSelecionaMenu() {
    const OpcoesPerfil = [
        { img: 'caminho/para/imagem1.png', label: 'Agendamentos' }, 
        // { img: 'caminho/para/imagem2.png', label: 'Nome 2' }, 
    ];

    return (
        <div>
            {OpcoesPerfil.map((menu, index) => (
                <button key={index} className={styleOpcoesSelecionar.opcoes}>
                    <img src={menu.img} alt='' /> {menu.label}
                </button>
            ))}
        </div>
    );
}
