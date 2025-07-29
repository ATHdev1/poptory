from poptory.backend.models.models import Store, Category, Location

def find_stores(city=None, district=None, category=None):
    query = Store.query.join(Location).join(Category)
    if city:
        query = query.filter(Location.city == city)
    if district:
        query = query.filter(Location.district == district)
    if category:
        query = query.filter(Category.name == category)
    return query.all()
