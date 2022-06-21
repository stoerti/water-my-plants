from __main__ import app

from flask import render_template


@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")

@app.route('/actuator/health')
def actuator_health():
    return "{\"status\": \"UP\"}"
