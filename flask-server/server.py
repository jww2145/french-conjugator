# IMPORT
import mysql.connector
from flask import Flask,request,jsonify
from flask_cors import CORS
from hidden import password
from create_models import create
from create_words import createwords
from fetchword import getword

# APP SETUP
app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
	host="localhost",
	user = "root",
 	password = password,
  	database = "hackathon2023"
)

mycursor = mydb.cursor()


# ROUTES
@app.route('/test/')
def hello_word():
    name = request.args.get('name')
    return 'Hello, {}!'.format(name)


@app.route('/delete/<int:id>', methods=["DELETE"])
def delete(id):
    delete_query = "DELETE FROM words WHERE id = %s;"
    
    mycursor.execute(delete_query, (id,))
    mydb.commit()
    return "Deleted successfully"
    

@app.route('/word/<word_searched>/<column_name>', methods=["GET"])
def get_row(word_searched,column_name):
    return getword(word_searched,column_name)
    

@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    words = data.get('words')
    words = words.split(',')
    for word in words:
        word = word.strip()
        createwords(word)
    return "Success"
	
@app.route('/create')	
def docreate():
    create()
    return jsonify({'message': 'Table has been created successfuly'}), 200

    


if __name__ == "__main__":
    app.run(debug=True)