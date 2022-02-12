# Import the required packages
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from api import mongoClient


app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['GET'])
def members():
	member = mongoClient.get_person()
	print(member)

	return jsonify({"member":"member"})

if __name__ == "__main__":
	app.run(host="0.0.0.0", threaded=True, port=5000, debug=True)