import logging
import configparser


class LoggerHelper(object):

    @staticmethod
    def get_logger(name, filename):
        CONFIG = configparser.RawConfigParser()
        CONFIG.read('config.cfg')

        prev_logger = logging.getLogger(name)
        # if that logger already exists and contains handlers, return it instead of creating
        # a new one
        if len(prev_logger.handlers) > 0:
            return prev_logger
        formatter = logging.Formatter(CONFIG.get('logging', 'format'))

        handler = logging.FileHandler(filename='logs/' + filename)
        handler.setFormatter(formatter)

        allHandler = logging.FileHandler(filename='logs/all.log')
        allHandler.setFormatter(formatter)

        logger = logging.getLogger(name)
        logger.setLevel(CONFIG.get('logging', 'level'))
        logger.addHandler(handler)
        logger.addHandler(allHandler)
        return logger
