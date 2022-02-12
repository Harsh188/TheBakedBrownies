# Import the required packages
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from mongoClient import * 


app = Flask(__name__)

@app.route("/members")
def members():
	# member = get_person()
	# print("member:",member)
	set_person()
	# return member

if __name__ == "__main__":
	app.run(debug=True)