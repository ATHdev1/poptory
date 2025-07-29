from flask import Blueprint, request, jsonify
from poptory.backend.extensions.extensions import db
from poptory.backend.models.models import Store

store_bp = Blueprint('store', __name__)

# 팝업스토어 등록
@store_bp.route('/stores', methods=['POST'])
def create_store():
    data = request.get_json()
    store = Store(
        name=data['name'],
        description=data.get('description', ''),
        location=data.get('location', ''),
        start_date=data.get('start_date', ''),
        end_date=data.get('end_date', ''),
        user_id=data['user_id']  # 로그인 연동 안됐으니 임시로 받기
    )
    db.session.add(store)
    db.session.commit()
    return jsonify({'id': store.id}), 201

# 전체 목록 조회
@store_bp.route('/stores', methods=['GET'])
def get_stores():
    stores = Store.query.all()
    return jsonify([
        {
            'id': s.id,
            'name': s.name,
            'description': s.description,
            'location': s.location,
            'start_date': s.start_date,
            'end_date': s.end_date,
            'user_id': s.user_id
        }
        for s in stores
    ])

# 단일 팝업스토어 상세 조회
@store_bp.route('/stores/<int:store_id>', methods=['GET'])
def get_store(store_id):
    store = Store.query.get_or_404(store_id)
    return jsonify({
        'id': store.id,
        'name': store.name,
        'description': store.description,
        'location': store.location,
        'start_date': store.start_date,
        'end_date': store.end_date,
        'user_id': store.user_id
    })

# 삭제
@store_bp.route('/stores/<int:store_id>', methods=['DELETE'])
def delete_store(store_id):
    store = Store.query.get_or_404(store_id)
    db.session.delete(store)
    db.session.commit()
    return jsonify({'message': '삭제 완료'})
