from flask import session, redirect, url_for, render_template, request
from . import controllers

@controllers.route('/login')
def login():
    return render_template('login.html')