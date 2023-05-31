from configuration import dbname, user, password, host
import psycopg2


def create():
    conn = psycopg2.connect(dbname = dbname, user = user, password = password, host = host)
    cursor=conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS words")
    sql =  """CREATE TABLE words (
        word_id SERIAL PRIMARY KEY,
        infinitif text,
        indicatif_present text,
        indicatif_passeSimple text,
        indicatif_imparfait text,
        indicatif_passeCompose text,
        indicatif_futurSimple text,
        indicatif_passeAnterieur text,
        indicatif_plusQueParfait text,
        indicatif_futurAnterieur text,
        subjonctif_present text,
        subjonctif_passe text,
        subjonctif_imparfait text,
        subjonctif_plusQueParfait text,
        conditionnel_present text,
        conditionnel_passe1reForme text,
        conditionnel_passe2eForme text)
        """
    cursor.execute(sql)
    conn.commit()
    cursor.close()
    conn.close()
