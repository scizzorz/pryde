#!/usr/bin/env python
import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
	return open('index.html').read()

app.run(debug=True, host='0.0.0.0')
