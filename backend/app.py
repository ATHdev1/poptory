from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS 허용

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': '백엔드에서 프론트로 메세지 전달했고, 이게 잘 갔으면 이 메시지가 뜨는거임'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
