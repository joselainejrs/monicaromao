from . import db

class Tratamento(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    especificacao = db.Column(db.String,  unique=True)
    periodo = db.Column(db.Integer)

    agendamento = db.relationship('Agendamento', back_populates='tratamento', lazy=True)

    def to_dict(self):
         return {
            'id_tratamento': self.id,
            'especificacao': self.especificacao,
            'periodo': self.periodo
        }
    