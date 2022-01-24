from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS #comment this on deployment

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app) #comment this on deployment

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    db.init_app(app)

    from .views import main
    app.register_blueprint(main)

    return app