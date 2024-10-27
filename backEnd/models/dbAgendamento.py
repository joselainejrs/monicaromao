from . import db

class Agendamento(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cpf_user = db.Column(db.String, db.ForeignKey('user.cpf'), nullable=False)
    id_status = db.Column(db.Integer, db.ForeignKey('status.id'))
    id_tratamento = db.Column(db.Integer, db.ForeignKey('tratamento.id'))    
    data = db.Column(db.String)
    hora = db.Column(db.String)

    user = db.relationship('User', back_populates='agendamentos')
    status = db.relationship('Status', back_populates='agendamentos')
    tratamento = db.relationship('Tratamento', back_populates='agendamentos')
    
    def to_dict(self):
         return {
            'id': self.id,
            'id_cliente': self.cpf_user,
            'id_tratamento': self.id_tratamento,
            'id_status': self.id_status,
            'data': self.data,
            'hora': self.hora
        }
    