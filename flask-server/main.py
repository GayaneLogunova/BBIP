from flask import (Flask, render_template, request, session)
import json

app = Flask("__main__")
app.config['SECRET_KEY'] = "gfywchCBCWOHEOPQDWLKFCBACEWUuhiuafhwhuailwkndscsm,mkawrlgjne74385924iprqjefcn824unew"
users = [("gaya", "1")]


@app.route("/data",methods=['POST', 'GET'])
def return_data():
    with open('data2.json') as json_file:
        data = json.load(json_file)
    return data, 200


@app.route("/verify",methods=['POST', 'GET'])
def verify():
    data = request.get_json(force=True)

    username = data["username"]
    password = data["password"]
    print(username + " " + password)
    for user in users:
        if user[0] == username and user[1] == password:
            session["username"] = username
            return {"result": True}, 200
    return {"result": False}, 200

@app.route("/get_username", methods=['POST', 'GET'])
def check_login():
    try:
        return {"username": session["username"]}
    except BaseException:
        return {"username": ""}

@app.route("/logout", methods=['POST', 'GET'])
def logout():
    session["username"] = ""
    return {}

@app.route("/",methods=['POST', 'GET'])
def my_index():
    return render_template("index.html")

@app.route("/registration",methods=['POST', 'GET'])
def register():
    return render_template("index.html")

@app.route("/table",methods=['POST', 'GET'])
def render_cards():
    return render_template("index.html")
app.run(debug=True)