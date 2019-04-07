import configparser
from api.blueprints.findmysweden import fms


class APIController:

    def __init__(self, app):
        self.app = app
        self.CONFIG = configparser.RawConfigParser()
        self.CONFIG.read('config.cfg')

    def register_blueprints(self):
        self.app.register_blueprint(fms, url_prefix="/findmysweden")
