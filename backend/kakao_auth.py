import requests
from flask import Blueprint, request, redirect, jsonify
from extensions import db
from models import User

kakao_bp = Blueprint('kakao', __name__)

CLIENT_ID = "카카오 앱 REST API 키"
REDIRECT_URI = "http://localhost:5000/kakao/callback"

@kakao_bp.route('/login')
def kakao_login():
    kakao_url = f"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}"
    return redirect(kakao_url)

@kakao_bp.route('/callback')
def kakao_callback():
    code = request.args.get('code')
    token_url = "https://kauth.kakao.com/oauth/token"
    token_data = {
        "grant_type": "authorization_code",
        "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "code": code
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    res = requests.post(token_url, data=token_data, headers=headers)
    access_token = res.json().get('access_token')

    profile_res = requests.get(
        "https://kapi.kakao.com/v2/user/me",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    kakao_account = profile_res.json()
    kakao_id = kakao_account['id']
    nickname = kakao_account['properties']['nickname']
    email = kakao_account['kakao_account'].get('email', '')

    # 사용자 DB 처리
    user = User.query.filter_by(kakao_id=kakao_id).first()
    if not user:
        user = User(kakao_id=kakao_id, nickname=nickname, email=email)
        db.session.add(user)
        db.session.commit()

    return jsonify({'message': '카카오 로그인 성공', 'user_id': user.id})
