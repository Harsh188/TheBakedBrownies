# Import the required packages
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from mongoClient import * 


app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['POST'])
def members():
	# member = get_person()
	# print("member:",member)
	member = get_person()
	return member

if __name__ == "__main__":
	app.run(debug=True)