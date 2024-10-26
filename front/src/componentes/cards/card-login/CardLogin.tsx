import styleLogin from './CardLogin.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardLogin() {
    const navigate = useNavigate(); // Passo 1: Criar a função navigate

    const login = (event: any) => {
        event.preventDefault(); 
        navigate('/perfil'); 
    };


    return (
        <div className={styleLogin["e-card-login"]}>
            <form action="" onSubmit={login} className={styleLogin['form-login']}>
                <h2 className={styleLogin['title']}>Consultar Agendamento</h2>
                <div><label>CPF:</label></div>
                <input type="text" name="name" /> <br />
                <button type="submit" onClick={login} className={styleLogin['btn-login']}>Entrar</button>
            </form>
        </div>
    )
}

