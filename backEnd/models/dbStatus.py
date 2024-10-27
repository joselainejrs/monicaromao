from . import db

class Status(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    classificacao = db.Column(db.String, unique=True)
    descricao = db.Column(db.String, unique=True)

    agendamento = db.relationship('Agendamento', back_populates='status', lazy=True)

    def to_dict(self):
         return {
            'id_status': self.id,
            'classificacao': self.classificacao,
            'descricao': self.descricao
        }
    