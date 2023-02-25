import requests
import json
import mysql.connector
from config import headers

url = "https://french-conjugaison.p.rapidapi.com/conjugate/aller"

response = requests.request("GET", url, headers=headers)
text = response.text
jsonText = (json.loads(text))["data"]

infinitive = jsonText["infinitive"]
participe = jsonText["participe"]



print(infinitive, participe)

