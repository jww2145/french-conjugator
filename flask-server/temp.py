import mysql.connector
from config import my_user, my_pass, my_db


def createdb():
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
