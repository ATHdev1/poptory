from flask import Flask, jsonify
from extensions import db, cors

from auth import auth_bp
from kakao_auth import kakao_bp
from models import User

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)
    cors.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(kakao_bp, url_prefix='/kakao')

    @app.route('/')
    def home():
        return jsonify({"message": "✅ Poptory 백엔드 정상 동작 중입니다!"})

    return app
