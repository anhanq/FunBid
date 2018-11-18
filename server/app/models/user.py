from passlib.apps import custom_app_context as pwd_context

from ..db import db
from . import Base


class User(Base):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password_hash = db.Column(db.String(250), nullable=False)
    number_bid = db.Column(db.Integer, nullable=False, default=0)
    admin = db.Column(db.Boolean, nullable=False, default=False)

    def __init__(self, username, admin=False):
        self.username = username
        self.admin = admin

    @property
    def serialize(self):
        return {
            'user_id': self.user_id,
            'username': self.username,
            'number_bid': self.number_bid,
            'isadmin': self.admin
        }

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

    @classmethod
    def find_by_id(cls, user_id):
        user = cls.query.filter_by(user_id=user_id).first()
        return user

    @classmethod
    def find_by_username(cls, username):
        user = cls.query.filter_by(username=username).first()
        return user


user_username_index = db.Index('user_username_index', User.username)