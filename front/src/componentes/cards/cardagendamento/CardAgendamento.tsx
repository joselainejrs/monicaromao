import styleAgendamento from './CardAgendamento.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardAgendamento() {
    const navigate = useNavigate(); // Passo 1: Criar a função navigate

    const solicitar = (event: any) => {
        event.preventDefault(); 
        navigate('/perfil'); 
    };

    return (
        <div className={styleAgendamento["card-agenda"]}>
            <form className={styleAgendamento["form-agenda"]} action="" onSubmit={solicitar}>
                <h2 className={styleAgendamento["title"]}>Agende sua consulta</h2>
                <div className={styleAgendamento['campo-form-agenda']}>
                    <div className={styleAgendamento['dados-pessoal']}>
                        <label>Nome Completo:</label><br />
                        <input type="text" name="name" placeholder='insira seu nome' className={styleAgendamento['input-n-t']} /><br /><br />

                        <div className={styleAgendamento['input-conj']}>
                            <div><label> CPF: </label></div>
                            <div><label>Telefone: </label></div>
                        </div>

                        <div className={styleAgendamento['input-conj']}>
                            <input type="text" name="name" placeholder='00000000000' className={styleAgendamento['input-c']} />
                            <input type="text" name="name" placeholder='11987295762' className={styleAgendamento['input-t']} />
                        </div>
                    </div>

                    <div className={styleAgendamento['consultar-dados']}>
                        <div className={styleAgendamento['input-conj']}>
                            <div><label>Data: </label></div>
                            <div><label>Horário: </label></div>
                        </div>
                        <div className={styleAgendamento['input-conj']}>
                            <input type="date" name="name" className={styleAgendamento['input-d']} />
                            <input type="hora" name="name" className={styleAgendamento['input-h']} />
                        </div>
                        <label className={styleAgendamento['label-t']}>Tratamento:</label><br />
                        <select className={styleAgendamento['input-n-t']} name="select">
                            <option value="" className={styleAgendamento.desativado}>Selecione um das opções</option>
                        </select>
                    </div>
                </div>

                <div className={styleAgendamento['btn-agendamento']}>
                     <button type="button" onClick={solicitar} className={styleAgendamento['btn-login']}>Solicitar o agendamento</button>
                </div>
            </form>
        </div>
    )
}

