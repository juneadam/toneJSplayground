"""server route for ToneJS project"""
import os
from flask import Flask, render_template, request, flash, session, redirect, jsonify
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = os.environ['secret_key']
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def render_homepage():
    """Renders homepage."""

    return render_template('synth.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)