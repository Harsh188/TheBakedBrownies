import pandas as pd
import json

ratings = pd.read_csv("./data/ratings_slice.csv")
recipes = pd.read_csv("./data/recipes_slice.csv")

print(ratings.head())
print(recipes.head())

for col in recipes.columns:
    print(col)

def getRecipes():
	recipes_mod = recipes.loc[:4]
	print(recipes_mod.values.tolist())
	return recipes_mod.to_dict()

def getRatings():
	return ratings.values.tolist()