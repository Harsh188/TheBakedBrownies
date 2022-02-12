from pymongo import MongoClient

client = MongoClient("mongodb+srv://TheBakedBrownies:<TheBakedBrownies420>@cluster0.ini1l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test

db = client.gettingStarted
people = db.people

import datetime

personDocument = {
  "name": { "first": "Alan", "last": "Turing" },
  "birth": datetime.datetime(1912, 6, 23),
  "death": datetime.datetime(1954, 6, 7),
  "contribs": [ "Turing machine", "Turing test", "Turingery" ],
  "views": 1250000
}

print(type(personDocument))

people.insert_one(personDocument)

# res = people.find_one({ "name.last": "Turing" })

# print(res)