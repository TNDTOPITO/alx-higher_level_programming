#!/usr/bin/node
import requests

movie_id = input("Enter the movie ID: ")
url = f"https://swapi.dev/api/films/{movie_id}/"

response = requests.get(url)
data = response.json()

characters = data["characters"]

for character in characters:
    character_data = requests.get(character).json()
    print(character_data["name"])
