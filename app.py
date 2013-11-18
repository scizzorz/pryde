#!/usr/bin/env python
import flask

app = flask.Flask(__name__)

@app.route('/<presentation>')
def index(presentation):
	try:
		with open('slides/' + presentation + '.html') as content:
			temp = {
				'title': presentation,
				'content': content.read(),
				'languages': ['python', 'c'],
			}
			return flask.render_template('base.html', **temp)
	except IOError:
		return flask.abort(404)

app.run(debug=True, host='0.0.0.0')
