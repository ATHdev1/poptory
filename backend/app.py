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
        return jsonify({"message": "✅ 백엔드에서 보낸 메시지가 정상적으로 도착함. 즉, 이 메시지가 보인다면 백엔드와 프론트 연결이 완료된거임. "})

    @app.route('/ping')
    def ping():
        return 'pong'

    return app
