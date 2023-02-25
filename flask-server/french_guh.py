import requests
import json

url = "https://french-conjugaison.p.rapidapi.com/conjugate/aller"

headers = {
	"X-RapidAPI-Key": "a9be7e9630mshd95fe02fce700e0p16bd39jsn9aa9310c5148",
	"X-RapidAPI-Host": "french-conjugaison.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)
text = response.text
jsonText = (json.loads(text))["data"]

infinitive = jsonText["infinitive"]
participe = jsonText["participe"]



print(infinitive, participe)

