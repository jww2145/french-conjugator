# IMPORT
import mysql.connector
from flask import Flask
from flask_cors import CORS
from french_guh import finder
# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)

# ROUTES
@app.route('/read', methods=['GET'])
def getConjugations(inf, form ,tense):
	return finder(inf, form ,tense)

@app.route('/hello', methods=['POST'])

def create(word, tenses):
	TABLES = {}
	TABLES['word'] = (
		"CREATE TABLE infinitive ("
		"   id varchar(10) PRIMARY KEY"
		"   infinitive varchar(99) NOT NULL"
	)
	for i in tenses:
		if (tenses[i] != None):
			(
				"ALTER TABLE infinitive ADD COLUMN tenses[i] varchar(99) NOT NULL"
			)

def postHello():
	return 'This is a POST request!'
@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'


if __name__ == "__main__":
    app.run(debug=True)