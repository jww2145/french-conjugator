# IMPORT
from flask import Flask
from flask_cors import CORS
# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and server
CORS(app)
# ROUTES
@app.route('/hello', methods=['GET'])
def getHello():
	return 'This is a GET request!'
@app.route('/hello', methods=['POST'])
def postHello():
	return 'This is a POST request!'
@app.route('/hello', methods=['PUT'])
def putHello():
	return 'This is a PUT request!'
@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'
if __name__ == "__main__":
    app.run(debug=True)