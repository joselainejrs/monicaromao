import { useState } from 'react';
import styleStatus from './CardStatusConsulta.module.css';

export default function CardStatusConsulta() {
    const statusSolicitacao = [
        { classificacao: 'Aprovada', color: 'verde', descricao: '' },
        { classificacao: 'Pendente', color: 'verde', descricao: '' },
        { classificacao: 'Finalizada', color: 'verde', descricao: '' },
        { classificacao: 'Cancelado', color: 'verde', descricao: '' },
    ]

    const statusAtual = 'Pendente';
    const [usuarioTipo] = useState('proprietaria');

    const status = statusSolicitacao.find(status => status.classificacao === statusAtual);


    return (
        <div className={styleStatus['campo-info-status']}>
            <div>
                {usuarioTipo === 'proprietaria' && (
                    <p>Cliente: <span>Monica Romão</span></p>
                )}
                <p>Especificação: <span>Detalhamento</span></p>
            </div>
            <p>Tratamento: <span>Nome do Tratamento</span></p>
            <p>Data / hora: <span>10/01/205 - 10:00h</span></p>
            <p>Status Solicitação: <span>{status?.classificacao}</span></p>
         
            {usuarioTipo === 'proprietaria' && (
                <button>Editar agendamento</button>
            )}

        </div>
    )
}

