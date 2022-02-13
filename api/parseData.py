import pandas as pd
import json

ratings = pd.read_csv("./data/ratings_slice.csv")
recipes = pd.read_csv("./data/recipes_slice.csv")

print(ratings.head())
print(recipes.head())

recipes_mod = recipes.iloc[:10]
recipes_mod_t = recipes_mod.T

for col in recipes.columns:
    print(col)

def getRecipes():
	return recipes_mod_t.to_dict()

def getRatings():
	return ratings.tolist()