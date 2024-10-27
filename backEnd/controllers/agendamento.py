from datetime import datetime
from models.dbUser import *
from models.dbCliente import *
from models.dbAgendamento import *
# from flask import Blueprint
from flask import Blueprint, jsonify, request

agendamento = Blueprint('agendamento', __name__)

@agendamento.route('/agendar', methods=["POST"])
def post_depoimento():
    try:
        dados = request.get_json()

        usuario_existente = User.query.filter_by(cpf=dados['cpf']).first()

        if usuario_existente:
            cpf = usuario_existente.cpf
            return jsonify({"mensagem": "Usuário encontrado"}), 201
        else:
            novo_usuario = User(
                nome=dados['nome'],
                sobrenome=dados['sobrenome'],
                tipo_user=dados.get('tipo_user', 'cliente'),
                cpf=dados['cpf'],
                telefone=dados['telefone']
            )   
            db.session.add(novo_usuario)
            db.session.commit()
            cpf = novo_usuario.id 

            novo_agendamento = Agendamento(
                id_cliente=cpf,
                id_tratamento=dados['id_tratamento'],
                id_status=dados['id_status'],
                data=dados['data'],
                hora=dados['hora']
            )

            db.session.add(novo_agendamento)
            db.session.commit()
            return jsonify({"mensagem": "Agendamento realizado com sucesso", "agendamento_id": novo_agendamento.id}), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Retorna a mensagem de erro
