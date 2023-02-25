import mysql.connector
from config import my_user, my_pass, my_db



def read(inf, column):
    mydb = mysql.connector.connect(
    host="localhost",
    user=my_user,
    password=my_pass,
    database=my_db,
    auth_plugin='mysql_native_password'
    )
    
    command = "SELECT " + column + " FROM words WHERE infinitif=" + inf

    mycursor = mydb.cursor()
    mycursor.execute(command)
    result = mycursor[0]

    return result
