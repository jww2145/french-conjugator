import requests
import json

url = "https://french-conjugaison.p.rapidapi.com/conjugate/"

headers = {
	"X-RapidAPI-Key": "a9be7e9630mshd95fe02fce700e0p16bd39jsn9aa9310c5148",
	"X-RapidAPI-Host": "french-conjugaison.p.rapidapi.com"
}

# participe = jsonText["participe"]
# indicatif = jsonText["indicatif"]
# subjonctif = jsonText["subjonctif"]
# conditionnel = jsonText["conditionnel"]
# imperatif = jsonText["imperatif"]

def finder(inf, form ,tense):
	url = "https://french-conjugaison.p.rapidapi.com/conjugate/" + inf
	response = requests.request("GET", url, headers=headers)
	text = response.text
	jsonText = (json.loads(text))["data"]
	out = jsonText[form][tense]

	return out



#print(finder("aller", "indicatif", "present"))

