from pymongo import MongoClient
import json

client = MongoClient("mongodb+srv://TheBakedBrownies:<TheBakedBrownies420>@cluster0.ini1l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

db = client.BakingTest
people = db['bakers']

import datetime

personDocument = {
  "name": { "first": "Alan", "last": "Turing" },
  "email": "I'am@baked.com",
  "weight": 62,
  "height": 162,
  "bmi": 20,
  "reviews": [21321,21322,232323]
}

p_d_j = json.dumps(personDocument)

print(type(personDocument))
print(p_d_j)

def get_person():
	print(p_d_j)
	return p_d_j

def set_person():
	p_id = people.insert_one(personDocument).inserted_id
	print(p_id)
	return p_id