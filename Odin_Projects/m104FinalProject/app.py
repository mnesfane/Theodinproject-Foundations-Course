from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash


app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db= SQL("sqlite:///users.db")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    session.clear()
    #form via POST
    if request.method == "POST":
        #check ila username kaykhalef null
        if not request.form.get("username"):
            return render_template("login.html", error="not username")

        # if password ... same thing here
        elif not request.form.get("password"):
            return render_template("login.html", error="not password")

        # check fl database l username wch kyn
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # check wech usename exist and password reh correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return render_template("login.html", error="not password")

        # save id dial l user
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # ila l method is GET render the template
    else:
        return render_template("login.html")



@app.route("/signup", methods=["GET", "POST"])
def register():
    if request.method == "POST":
            # same logic as login
        if not request.form.get("username") or not request.form.get("password") or not request.form.get("confirmation"):
            return render_template("signup.html", error="error")
        if request.form.get("password") != request.form.get("confirmation"):
            return render_template("signup.html", error="not the same")
        data = db.execute("SELECT * FROM users")
        for dt in data:
            if dt['username'] == request.form.get("username"):
                return render_template("signup.html", error="not username")
        password = request.form.get("password")
        hpassword = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
        db.execute("INSERT INTO users (username, hash) VALUES(?, ?)", request.form.get("username"), hpassword)
        row = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))
        session["user_id"] = row[0]['id']
        return redirect("/")

    else:
        return render_template("signup.html")

@app.route('/logout')
def logout():
    # end the session
    session.clear
    session.pop('user_id', None)
    return redirect("/")
