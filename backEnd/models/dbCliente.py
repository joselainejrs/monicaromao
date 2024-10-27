from .dbUser import User
from . import db

class Cliente(db.Model):
    id = db.Column(db.Integer, db.ForeignKey('user.cpf'), primary_key=True)  
    agendamentos = db.relationship('Agendamento', backref='cliente', lazy=True)
    user = db.relationship('User', backref=db.backref('cliente', uselist=False))

    def to_dict(self):
        return {
           "id": self.id,
            "user": self.user.to_dict(),
        }