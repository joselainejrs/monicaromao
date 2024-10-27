from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from models.__init__ import db
from controllers import all_blueprints

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///agendamento_podologico.db'
db.init_app(app)

migrate = Migrate(app, db)

for blueprint in all_blueprints:
    app.register_blueprint(blueprint)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host='localhost',  port=8153, debug=True)