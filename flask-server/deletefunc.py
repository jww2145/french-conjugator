import mysql.connector
from config import my_user, my_pass, my_db



def delete(word):
    mydb = mysql.connector.connect(
    host="localhost",
    user=my_user,
    password=my_pass,
    database=my_db,
    auth_plugin='mysql_native_password'
    )
    
    command = "DELETE FROM words WHERE infinitif=" + word

    mycursor = mydb.cursor()
    mycursor.execute(command)

