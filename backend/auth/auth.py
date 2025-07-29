import random, string
from flask import Blueprint, request, jsonify
from poptory.backend.extensions.extensions import db
from poptory.backend.models.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from poptory.backend.email_utils import send_verification_email

auth_bp = Blueprint('auth', __name__)

def generate_code(length=6):
    return ''.join(random.choices(string.digits, k=length))

@auth_bp.route('/register', methods=['POST'])
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': '이미 가입된 이메일입니다'}), 400

    hashed_pw = generate_password_hash(data['password'])
    code = generate_code()
    new_user = User(
        email=data['email'],
        password=hashed_pw,
        nickname=data['nickname'],
        verification_code=code,
        is_verified=False
    )
    db.session.add(new_user)
    db.session.commit()

    send_verification_email(data['email'], code)

    return jsonify({'message': '회원가입 성공! 이메일로 인증코드를 보냈습니다.'})


@auth_bp.route('/verify', methods=['POST'])
def verify():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return jsonify({'message': '해당 이메일이 존재하지 않습니다'}), 404

    if user.verification_code == data['code']:
        user.is_verified = True
        user.verification_code = None
        db.session.commit()
        return jsonify({'message': '이메일 인증 성공!'})
    else:
        return jsonify({'message': '인증 코드가 일치하지 않습니다'}), 400


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': '이메일 혹은 비밀번호가 틀립니다'}), 401

    if not user.is_verified:
        return jsonify({'message': '이메일 인증이 필요합니다'}), 403

    return jsonify({'message': '로그인 성공!'})
