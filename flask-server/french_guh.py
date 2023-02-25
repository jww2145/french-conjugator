import requests
import json
import mysql.connector
from config import headers

# url = "https://french-conjugaison.p.rapidapi.com/conjugate/aller"

# response = requests.request("GET", url, headers=headers)
# text = response.text
# jsonText = (json.loads(text))["data"]

# infinitive = jsonText["infinitive"]
# participe = jsonText["participe"]

def finder(inf, form ,tense):
	url = "https://french-conjugaison.p.rapidapi.com/conjugate/" + inf
	response = requests.request("GET", url, headers=headers)
	text = response.text
	jsonText = (json.loads(text))["data"]
	out = jsonText[form][tense]

	return out


