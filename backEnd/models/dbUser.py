from . import db

class User(db.Model):
    cpf = db.Column(db.String, unique=True, primary_key=True)
    nome = db.Column(db.String)
    sobrenome = db.Column(db.String)
    tipo_user = db.Column(db.String, default="cliente")
    telefone = db.Column(db.String)

    agendamento = db.relationship('Agendamento', back_populates='user', lazy=True)
    
    def to_dict(self):
         return {
            'cpf': self.cpf,
            'nome': self.nome,
            'sobrenome': self.sobrenome,
            'tipo_user': self.tipo_user if self.tipo_user else "cliente",
            'telefone': self.telefone
        }
    