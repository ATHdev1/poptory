from poptory.backend.extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(200))
    nickname = db.Column(db.String(100))
    kakao_id = db.Column(db.String(100), unique=True, nullable=True)
    is_verified = db.Column(db.Boolean, default=False)  # 인증 여부
    verification_code = db.Column(db.String(10))  # 인증코드 저장용
    bookmarks = db.relationship(
        "Bookmark",
        back_populates="user",
        cascade="all, delete-orphan"
    )

class Store(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    location = db.Column(db.String(255))
    start_date = db.Column(db.String(50))
    end_date = db.Column(db.String(50))
    
     # 누가 만든 스토어인지 (사업자)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))  # 만든 사용자 ID
    user = db.relationship('User', backref='stores')  # User.stores로 접근 가능
    
    bookmarks = db.relationship(
        "Bookmark",
        back_populates="store",
        cascade="all, delete-orphan"
    )
    
    location_id = db.Column(db.Integer, db.ForeignKey('location.id'))
    location = db.relationship('Location', back_populates='stores')

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship('Category', back_populates='stores')
    
class Bookmark(db.Model):
    __tablename__ = 'bookmark'

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    store_id = db.Column(db.Integer, db.ForeignKey('store.id'), primary_key=True)

    user = db.relationship("User", back_populates="bookmarks")
    store = db.relationship("Store", back_populates="bookmarks")
    
class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(50), nullable=False)        # 예: 서울
    district = db.Column(db.String(50), nullable=False)    # 예: 성동구 
    #districts를 만들어서 ex) [성동구, 마포구, 영등포구, 등등] 이 리스트 안에 없으면 오류 나도록 추후 설계

    stores = db.relationship('Store', back_populates='location')

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)    # 예: 패션/의류

    stores = db.relationship('Store', back_populates='category')
