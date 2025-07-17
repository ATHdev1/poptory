from flask import Flask
from extensions import db, cors

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)
    cors.init_app(app)

    with app.app_context():
        from models import User
        db.create_all()

    from auth import auth_bp
    from kakao_auth import kakao_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(kakao_bp, url_prefix='/kakao')

    return app

# 서버 실행 부분
if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
