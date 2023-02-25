# IMPORT
import mysql.connector
from flask import Flask
from flask_cors import CORS
from french_guh import finder
from config import my_user, my_pass, my_db
# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)

# ROUTES
@app.route('/read', methods=['GET'])
def getConjugations(inf, form ,tense):
	return finder(inf, form ,tense)

def parseConjugations(inf, form, tense):
	out = getConjugations(inf, form, tense)
	list = out.values()
	string = ""
	for i in list:
		string = string + ", " + list[i]
	string = string[:-2]
	return string


@app.route('/hello', methods=['POST'])
def update(word):
	mydb = mysql.connector.connect(
		host="localhost",
		user=my_user,
		password=my_pass,
		database=my_db,
		auth_plugin='mysql_native_password'
	)
	mycursor = mydb.cursor()
	value2 = word
	value3 = parseConjugations(word,"indicatif","present")
	value4 = parseConjugations(word, "indicatif", "passeSimple")
	value5 = parseConjugations(word, "indicatif", "imparfait")
	value6 = parseConjugations(word, "indicatif", "passeCompose")
	value7 = parseConjugations(word, "indicatif", "futurSimple")
	value8 = parseConjugations(word, "indicatif", "passeAnterieur")
	value9 = parseConjugations(word, "indicatif", "plusQueParfait")
	value10 = parseConjugations(word, "indicatif", "futurAnterieur")
	value11 = parseConjugations(word, "subjonctif", "present")
	value12 = parseConjugations(word, "subjonctif", "passe")
	value13 = parseConjugations(word, "subjonctif", "imparfait")
	value14 = parseConjugations(word, "subjonctif", "plusQueParfait")
	value15 = parseConjugations(word, "conditionnel", "present")
	value16 = parseConjugations(word, "conditionnel", "passe1reForme")
	value17 = parseConjugations(word, "conditionnel", "passe2eForme")
 
	dumb = "brian you're so dumb"	


	command = "INSERT INTO words" \
			  "VALUES (" + value2 + ", " + value3 + ", " + value4 + ", " + value5 + ", " + value6 + ", " + value7 + ", " + value8 + ", " + value9 + ", " + value10 + ", " + value11 + ", " + value12 + ", " + value13 + ", " + value14 + ", " + value15 + ", " + value16 + ", " + value17 
	mycursor.execute(command)
	
	
	
	
	
	
	
	
	
def create(word):
	TABLES = {}
	TABLES['words'] = (
		"CREATE TABLE words ("
		"   id int NOT NULL AUTO_INCREMENT"
		"   infinitif varchar(99)"
		"	indicatif_present varchar(99)"
		"   indicatif_passeSimple varchar(99)"
		"	indicatif_imparfait varchar(99)"
		"	indicatif_passeCompose varchar(99)"
		"	indicatif_futurSimple varchar(99)"
		"   indicatif_passeAnterieur varchar(99)"
		"   indicatif_plusQueParfait varchar(99)"
		"   indicatif_futurAnterieur varchar (99)"
		"   subjonctif_present varchar(99)"
		"   subjonctif_passe varchar(99)"
		"   subjonctif_imparfait varchar(99)"
		"   subjonctif_plusQueParfait varchar(99)"
		"   conditionnel_present varchar(99)"
		"   conditionnel_passe1reForme varchar(99)"
		"   conditionnel_passe2eForme varchar(99)"
		"   PRIMARY KEY (id)"
	)


def postHello():
	return 'This is a POST request!'
@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'



mydb = mysql.connector.connect(
  host="localhost",
  user=my_user,
  password=my_pass,
  database=my_db,
  auth_plugin='mysql_native_password'
)

mycursor = mydb.cursor()

mycursor.execute("""CREATE TABLE words (
		id int NOT NULL AUTO_INCREMENT,
		infinitif varchar(99),
		indicatif_present varchar(99),
		indicatif_passeSimple varchar(99),
		indicatif_imparfait varchar(99),
		indicatif_passeCompose varchar(99),
		indicatif_futurSimple varchar(99),
		indicatif_passeAnterieur varchar(99),
		indicatif_plusQueParfait varchar(99),
		indicatif_futurAnterieur varchar (99),
		subjonctif_present varchar(99),
		subjonctif_passe varchar(99),
		subjonctif_imparfait varchar(99),
		subjonctif_plusQueParfait varchar(99),
		conditionnel_present varchar(99),
		conditionnel_passe1reForme varchar(99),
		conditionnel_passe2eForme varchar(99),
		PRIMARY KEY (id))""")


if __name__ == "__main__":
    app.run(debug=True)