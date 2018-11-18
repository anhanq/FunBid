from flask import Flask
from flask_socketio import SocketIO
from .config import Config
from flask_migrate import Migrate
socketio = SocketIO()


def create_app(debug=False):
    """Create an application."""
    app = Flask(__name__)
    app.debug = debug
    # app.config['SECRET_KEY'] = 'secret'
    app.config.from_object(Config)

    from .main import main as main_blueprint
    from .controllers import controllers as controllers_bp
    app.register_blueprint(main_blueprint)
    app.register_blueprint(controllers_bp)

    from .db import db
    db.init_app(app)
    # with app.app_context():
    #     db.create_all()
    migrate = Migrate(app, db)

    socketio.init_app(app)
    return app

from .models import user