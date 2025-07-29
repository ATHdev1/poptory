from poptory.backend.extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(200))
    nickname = db.Column(db.String(100))
    kakao_id = db.Column(db.String(100), unique=True, nullable=True)
    is_verified = db.Column(db.Boolean, default=False)  # 인증 여부
    verification_code = db.Column(db.String(10))  # 인증코드 저장용
    
class Store(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    location = db.Column(db.String(255))
    start_date = db.Column(db.String(50))
    end_date = db.Column(db.String(50))
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))  # 만든 사용자 ID
    user = db.relationship('User', backref='stores')  # User.stores로 접근 가능
