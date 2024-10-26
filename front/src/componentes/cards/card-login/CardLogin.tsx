import './CardLogin.css';
import '../../../../public/estilo/padroniza.css'

export default function CardLogin() {
    const style = {
        width: '50%',

    };


    return (
        <div className="card card-login" style={style}>
            <div className="card-body">
                <h2 className="card-title">Consultar Agendamento</h2>
                <form action="" >
                    <label>CPF:</label><br />
                    {/* margin */}
                    <input type="text" name="name" /> <br/>
                    <button type="submit" className='btn-login'>Solicitar o Agendamento</button>

                </form>
            </div>
        </div>
    )
}

