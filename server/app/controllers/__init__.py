from flask import Blueprint

controllers = Blueprint('controllers', __name__)

from . import auth, user
