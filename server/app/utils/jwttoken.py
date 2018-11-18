import jwt
from ..config import JWT_SECRET


def encode(user):
    return jwt.encode({
        'sub': user.user_id
    }, JWT_SECRET)


def decode(access_token):
    try:
        token = jwt.decode(access_token, JWT_SECRET, leeway=10)
    except jwt.InvalidTokenError:
        return None
    return token