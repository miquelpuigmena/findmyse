import configparser
from flask import Flask
from api.api_controller import APIController


class Run:
    def __init__(self):
        self.CONFIG = configparser.RawConfigParser()
        self.CONFIG.read('config.cfg')

        # Get Config info
        self.HOST = self.CONFIG.get('flask', 'host')
        self.PORT = int(self.CONFIG.get('flask', 'port'))

        # API
        self.APP = Flask(__name__)
        self.APP.secret_key = self.CONFIG.get('flask', 'secret')
        self.APP.config['DEBUG'] = self.CONFIG.getboolean('flask', 'debug')
        APIController(self.APP).register_blueprints()

    def run_app(self):
        self.APP.run(host=self.HOST, port=self.PORT)


if __name__ == '__main__':
    Run().run_app()
