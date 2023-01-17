#!/usr/bin/node
import requests
import sys

movie_id = sys.argv[1]
url = f"https://swapi.dev/api/films/{movie_id}/"

response = requests.get(url)
data = response.json()

characters = data["characters"]

for character in characters:
    response = requests.get(character)
    character_data = response.json()
    print(character_data["name"])
