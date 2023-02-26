# IMPORT
import mysql.connector
from flask import Flask,request,jsonify
from flask_cors import CORS
import requests
import json
from config import password
from config import headers
# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)

mydb = mysql.connector.connect(
	host="localhost",
	user = "root",
 	password = password,
  	database = "hackathon2023"
)

mycursor = mydb.cursor()

def parseConjugations(out):
	list = out.values()
 
	string = ''
	for value in list:
		string = string + ", " + value
  
	return string[2:]

def finder(inf, conjugation_Array):
    url = "https://french-conjugaison.p.rapidapi.com/conjugate/" + inf
    response = requests.request("GET", url, headers=headers)
    text = response.text
    jsonText = (json.loads(text))["data"]
    for tense in jsonText["indicatif"]:
        conjugation_Array.insert(0,parseConjugations(jsonText["indicatif"][tense]))
    for tense2 in jsonText["subjonctif"]:
        conjugation_Array.insert(0,parseConjugations(jsonText["subjonctif"][tense2]))
    for tense3 in jsonText["conditionnel"]:
        conjugation_Array.insert(0,parseConjugations(jsonText["conditionnel"][tense3]))
    return(conjugation_Array)

# ROUTES
@app.route('/test/')
def hello_word():
    name = request.args.get('name')
    return 'Hello, {}!'.format(name)


@app.route('/fix_route/<int:id>', methods=["PATCH"])
def patch(id):
    data = request.get_json()
    word = data.get('word')
    conjugation_Array = []
    finder(word, conjugation_Array)
    value2 = word
    value3 = conjugation_Array.pop()
    value4 = conjugation_Array.pop()
    value5 = conjugation_Array.pop()
    value6 = conjugation_Array.pop()
    value7 = conjugation_Array.pop()
    value8 = conjugation_Array.pop()
    value9 = conjugation_Array.pop()
    value10 = conjugation_Array.pop()
    value11 = conjugation_Array.pop()
    value12 = conjugation_Array.pop()
    value13 = conjugation_Array.pop()
    value14 = conjugation_Array.pop()
    value15 = conjugation_Array.pop()
    value16 = conjugation_Array.pop()
    value17 = conjugation_Array.pop()
    
    sql = (
        "UPDATE words SET (infinitif, indicatif_present, indicatif_passeSimple, indicatif_imparfait,indicatif_passeCompose,indicatif_futurSimple,"
    	"indicatif_passeAnterieur, indicatif_plusQueParfait, indicatif_futurAnterieur, subjonctif_present, subjonctif_passe,"
    	"subjonctif_imparfait, subjonctif_plusQueParfait, conditionnel_present, conditionnel_passe1reForme, conditionnel_passe2eForme) VALUES"
		"(%s, %s, %s, %s, %s , %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
	)
    data = (value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17)
    mycursor.execute(sql,data)
    mydb.commit()
    return json.dumps({'word': word, 'infinitif': value2, 'indicatif_present': value3, 'indicatif_passeSimple': value4, 
                    'indicatif_imparfait': value5, 'indicatif_passeCompose': value6, 'indicatif_futurSimple': value7, 
                    'indicatif_passeAnterieur': value8, 'indicatif_plusQueParfait': value9, 'indicatif_futurAnterieur': value10,
                    'subjonctif_present': value11, 'subjonctif_passe': value12, 'subjonctif_imparfait': value13,
                    'subjonctifplusQueParfait':value14, 'conditionnel_present': value15, 'conditionnel_passe1reForme': value16,
                    'conditionnel_passe2reForme': value17})
    


@app.route('/delete/<int:id>', methods=["DELETE"])
def delete(id):
    delete_query = "DELETE FROM words WHERE id = %s;"
    
    mycursor.execute(delete_query, (id,))
    mydb.commit()
    return "Deleted successfully"
    

@app.route('/word/<int:id>/<column_name>', methods=["GET"])
def get_row(id,column_name):
    query = ("SELECT {col_name} FROM words WHERE id = %s").format(col_name = column_name)
    mycursor.execute(query, (id,))
    results = mycursor.fetchone()
    mycursor.close
    return jsonify(results)
    

@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    word = data.get('word')
    conjugation_Array = []
    finder(word, conjugation_Array)
    value2 = word
    value3 = conjugation_Array.pop()
    value4 = conjugation_Array.pop()
    value5 = conjugation_Array.pop()
    value6 = conjugation_Array.pop()
    value7 = conjugation_Array.pop()
    value8 = conjugation_Array.pop()
    value9 = conjugation_Array.pop()
    value10 = conjugation_Array.pop()
    value11 = conjugation_Array.pop()
    value12 = conjugation_Array.pop()
    value13 = conjugation_Array.pop()
    value14 = conjugation_Array.pop()
    value15 = conjugation_Array.pop()
    value16 = conjugation_Array.pop()
    value17 = conjugation_Array.pop()

    sql = (
        "INSERT INTO words (infinitif, indicatif_present, indicatif_passeSimple, indicatif_imparfait,indicatif_passeCompose,indicatif_futurSimple,"
    	"indicatif_passeAnterieur, indicatif_plusQueParfait, indicatif_futurAnterieur, subjonctif_present, subjonctif_passe,"
    	"subjonctif_imparfait, subjonctif_plusQueParfait, conditionnel_present, conditionnel_passe1reForme, conditionnel_passe2eForme) VALUES"
		"(%s, %s, %s, %s, %s , %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
	)
    data = (value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17)
    mycursor.execute(sql,data)
    mydb.commit()
    return json.dumps({'word': word, 'infinitif': value2, 'indicatif_present': value3, 'indicatif_passeSimple': value4, 
                    'indicatif_imparfait': value5, 'indicatif_passeCompose': value6, 'indicatif_futurSimple': value7, 
                    'indicatif_passeAnterieur': value8, 'indicatif_plusQueParfait': value9, 'indicatif_futurAnterieur': value10,
                    'subjonctif_present': value11, 'subjonctif_passe': value12, 'subjonctif_imparfait': value13,
                    'subjonctifplusQueParfait':value14, 'conditionnel_present': value15, 'conditionnel_passe1reForme': value16,
                    'conditionnel_passe2reForme': value17})
	
@app.route('/create')	
def create():
    sql = (
        """CREATE TABLE words (
		id int NOT NULL AUTO_INCREMENT,
		infinitif varchar(600),
		indicatif_present varchar(600),
		indicatif_passeSimple varchar(600),
		indicatif_imparfait varchar(600),
		indicatif_passeCompose varchar(600),
		indicatif_futurSimple varchar(600),
		indicatif_passeAnterieur varchar(600),
		indicatif_plusQueParfait varchar(600),
		indicatif_futurAnterieur varchar (600),
		subjonctif_present varchar(600),
		subjonctif_passe varchar(600),
		subjonctif_imparfait varchar(600),
		subjonctif_plusQueParfait varchar(600),
		conditionnel_present varchar(600),
		conditionnel_passe1reForme varchar(600),
		conditionnel_passe2eForme varchar(600),
		PRIMARY KEY (id))"""
    )
    mycursor.execute(sql)
    mydb.commit()
    return jsonify({'message': 'Table has been created successfuly'}), 200
    


if __name__ == "__main__":
    app.run(debug=True)