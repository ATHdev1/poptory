from extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(200))
    nickname = db.Column(db.String(100))
    kakao_id = db.Column(db.String(100), unique=True, nullable=True)
    is_verified = db.Column(db.Boolean, default=False)  # 인증 여부
    verification_code = db.Column(db.String(10))  # 인증코드 저장용