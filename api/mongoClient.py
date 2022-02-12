from pymongo import MongoClient

client = MongoClient("mongodb+srv://TheBakedBrownies:<TheBakedBrownies420>@cluster0.ini1l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test