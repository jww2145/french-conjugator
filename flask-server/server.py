# IMPORT
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
def postHello():
	return 'This is a POST request!'


@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'


if __name__ == "__main__":
    app.run(debug=True)