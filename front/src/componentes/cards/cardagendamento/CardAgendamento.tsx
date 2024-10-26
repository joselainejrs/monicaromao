import './CardAgendamento.css';
import '../../../../public/estilo/padroniza.css'

export default function CardAgendamento() {
    const style = {
        width: '100%',
    };


    return (
        <div className="card card-agenda" style={style}>
            <div className="card-body">
                <h2 className="card-title">Agende sua consulta</h2>
                <form action="" >
                    <div className='campo-form-agenda'>
                        <div className='dados-pessoal'>
                            <label>Nome Completo:</label><br/>
                            {/* margin */}
                            <input type="text" name="name" /><br/><br/>
                            <div className='input-conj'>
                                <label> CPF: </label><br/>
                                <input type="text" name="name" className='input-c'/>

                                <label>Telefone: </label><br/>
                                <input type="text" name="name" className='input-t' />
                            </div>
                        </div>

                        <div className='consultar-dados'>
                            <div className='input-conj'>
                                <label>Data: </label><br/>
                                <input type="text" name="name" className='input-d'/>

                                <label>Horário: </label><br/>
                                <input type="text" name="name" className='input-h'/>
                            </div>
                            <label>Tratamento:</label>
                                <select>
                                    <option value="">Selecione um das opçoes</option>
                                </select>
                            

                        </div>
                    </div>


                    <button type="submit">Solicitar o Agendamento</button>

                </form>
            </div>
        </div>
    )
}

