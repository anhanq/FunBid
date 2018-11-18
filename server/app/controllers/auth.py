from flask import  request, jsonify
from . import controllers
from ..models.user import User
from ..utils import jwttoken
import re


@controllers.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", "")
    password = request.json.get("password", None)

    user = User.find_by_username(username)
    if user and user.verify_password(password):
        response = user.serialize
        response['access_token'] = jwttoken.encode(user).decode('utf-8')
        print(response['access_token'])
        return jsonify(response), 200
    else:
        return jsonify({"message": "Wrong credentials"}), 401



@controllers.route('/register', methods=['POST'])
def register_user():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username and not re.match(r"^(?=.{5,10}$)[a-zA-Z]+[a-zA-Z0-9]", username):
        return jsonify({"message": "username invalid!"}), 400
    
    if password and not re.match(r"^(?=.{5,}$)[^\S]", password):
        return jsonify({"message": "password invalid!"}), 400
    if username and User.find_by_username(username):
        return jsonify({"message": "Username existed"}), 400
    
    user = User(username)
    user.hash_password(password)
    user.save_to_db()
    response = user.serialize

    response['access_token'] = jwttoken.encode(user).decode('utf-8')

    print(response)

    return jsonify(response), 201