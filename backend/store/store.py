from flask import Blueprint, request, jsonify
from poptory.backend.extensions.extensions import db
from poptory.backend.models.models import Store,User

store_bp = Blueprint('store', __name__)

# 팝업스토어 등록
@store_bp.route('/stores', methods=['POST'])
def create_store():
    data = request.get_json()
    required_fields = ['name', 'location_id', 'category_id', 'user_id']
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    user = db.session.get(User, data['user_id'])
    location = db.session.get(Location, data['location_id'])
    category = db.session.get(Category, data['category_id'])

    if not user or not location or not category:
        return jsonify({"error": "Invalid foreign key reference. You fucked up"}), 400
    
    store = Store(
        name=data['name'],
        description=data.get('description'),
        location=data.get('location'),
        start_date=data.get('start_date'),
        end_date=data.get('end_date'),
        user_id=data['user_id'],  # 로그인 연동 안됐으니 임시로 받기
        location_id=data['location_id'],
        category_id=data['category_id']
    )
    db.session.add(store)
    db.session.commit()
    return jsonify({
        "message": "Store created successfully",
        'id': store.id
        }), 201

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

# 👇 이 아래는 임시 seed 용 코드입니다. 테스트 후 반드시 삭제하시오!

if __name__ == '__main__':
    from poptory.backend.extensions.extensions import db
    from poptory.backend.models.models import Location, Category
    from flask import Flask

    app = Flask(__name__)
    app.config.from_object('poptory.backend.configs.default')
    db.init_app(app)

    with app.app_context():
        if not Location.query.first():
            locations = [
                Location(name="서울 강남구"),
                Location(name="서울 종로구"),
                Location(name="부산 해운대구")
            ]
            db.session.add_all(locations)

        if not Category.query.first():
            categories = [
                Category(name="의류"),
                Category(name="식음료"),
                Category(name="뷰티"),
                Category(name="잡화")
            ]
            db.session.add_all(categories)

        db.session.commit()
        print("✅ Seed 데이터가 성공적으로 삽입되었사옵니다.")

