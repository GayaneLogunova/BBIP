from flask import (Flask, render_template, request)
import json

app = Flask("__main__")

@app.route("/data",methods=['POST', 'GET'])
def return_data():
    with open('data.json') as json_file:
        data = json.load(json_file)
    return data, 200

@app.route("/",methods=['POST', 'GET'])
def my_index():
    # return [1, 2, 3]
    # if request.method == 'POST':
    #   result = [1, 2, 3]
    #   return render_template("index.html", result = result)
    # list = ["first", "second"]
    # return render_template("index.html")
    # return render_template("index.html", flask_token=[1, 2, 3, 4])

    return render_template("index.html", token="[1, 2, 3, 4]")

app.run(debug=True)