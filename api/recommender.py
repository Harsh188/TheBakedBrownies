import pandas as pd
import numpy as np
import json
import ast
from sklearn.metrics.pairwise import pairwise_distances

df_recipe = pd.read_csv('./data/recipes_slice.csv', index_col='recipe_id')
df_recipe = df_recipe.drop(['Unnamed: 0'], axis = 1) 
df_recipe = df_recipe.drop(6696)
df_recipe = df_recipe.drop(7026)
df_recipe = df_recipe.drop(7091)
df_recipe = df_recipe.drop(8039)
df_recipe = df_recipe.drop(8129)
df_recipe = df_recipe.drop(8282)
df_recipe = df_recipe.drop(8346)
df_recipe = df_recipe.drop(8903)

for key in df_recipe['nutritions'].keys():
    df_recipe['nutritions'][key] = ast.literal_eval(df_recipe['nutritions'][key])

recipe_matrix = []
for key in df_recipe['nutritions'].keys():
    print(key)
    nutri_vec = []
    for j in ['sugars', 'sodium', 'carbohydrates', 'calories', 'fat', 'fiber', 'protein']:
        print(j)
        nutri_vec.append(df_recipe['nutritions'][key][j]['amount'])
    print(nutri_vec)
    recipe_matrix.append(nutri_vec)

keys = df_recipe['nutritions'].keys()
values = [i for i in range(len(keys))]
mapping = {values[i]:keys[i] for i in range(len(keys))}

def similarity(user_input, recipe_matrix):
    similarity_values = []
    for vector in recipe_matrix:
        output = pairwise_distances([user_input],[vector],metric='cosine')
        similarity_values.append(output)
    similarity_values = list(similarity_values)
    return_recipes = []
    max_sim = []
    for i in range(10):
        maximum = max(similarity_values)
        idx = similarity_values.index(maximum)
        max_sim.append([maximum, idx])
        similarity_values[idx] = 0
        return_recipes.append(mapping[idx])
    df_slice = pd.DataFrame(columns = df_recipe.columns)
    for id in return_recipes:
        df_slice.loc[len(df_slice.index)] = df_recipe.loc[id] 
    return df_slice

user_input = [40, 400, 40, 400, 40, 0.4, 4]
print(similarity(user_input, recipe_matrix))


