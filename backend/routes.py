# routes/store_routes.py

from flask import Blueprint, request, jsonify
from services import find_stores

store_bp = Blueprint("store_bp", __name__)

@store_bp.route("/stores/filter", methods=["GET"])
def filter_stores():
    city = request.args.get("city")
    district = request.args.get("district")
    category = request.args.get("category")
    stores = find_stores(city, district, category)
    return jsonify([store.to_dict() for store in stores])
