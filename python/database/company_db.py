import psycopg2 as pg

conn = pg.connect(
    host="localhost",
    database="company_db",
    user="postgres",
    password="2005",
    port=5432
)

cur = conn.cursor()
cur.execute("insert into users (name, email) values ('Vrund Patel', 'vrund.2005@example.com');")
cur.execute("SELECT * FROM users;")
rows = cur.fetchall()
print(rows)

conn.commit()
conn.close()
