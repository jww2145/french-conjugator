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

@app.route('/hello', methods=['POST'])

def create(word):
	TABLES = {}
	TABLES['word'] = (
		"CREATE TABLE word ("
		"   id int NOT NULL AUTO_INCREMENT"
		"   indicatif varchar(99)"
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
		"   PRIMARY KEY (indicatif)"
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