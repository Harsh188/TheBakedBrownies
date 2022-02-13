# Import the required packages
from flask import Flask
from flask import jsonify
from flask_cors import CORS
import parseData
import sys

app = Flask(__name__)
CORS(app)

@app.route("/recipes", methods=['GET'])
def recipes():
	res = parseData.getRecipes()
	return res

@app.route("/ratings", methods=['GET'])
def ratings():
	res = parseData.getRatings()
	return res

if __name__ == "__main__":
	app.run(port=5000, debug=True)