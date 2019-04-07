import json
from http import HTTPStatus
from flask import Blueprint, request, abort
from logger.logger import LoggerHelper
from core.findmysweden import Findmysweden as FMS

BLUEPRINT_NAME = "find-my-sweden"
fms = Blueprint(BLUEPRINT_NAME, __name__)
LOGGER = LoggerHelper.get_logger(name=BLUEPRINT_NAME, filename=BLUEPRINT_NAME+".log")

FEATURES_NUM = 16

@fms.route("/match", methods=['POST'])
def post_home():
    """
    POST method

    :return: Json
    :raises:
        - HTTP
    """
    try:
        body_dict = request.get_json(force=True)
        if (len(body_dict)) != FEATURES_NUM: 
            return 'Wrong params', HTTPStatus.CONFLICT
        match = FMS.compute_user_match(body_dict)
        if match == -1 :
            return "ERROR", HTTPStatus.CONFLICT
        return json.dumps(match), HTTPStatus.ACCEPTED
    except Exception as ex:
        LOGGER.error(str(ex))
        abort(HTTPStatus.INTERNAL_SERVER_ERROR, str(ex))
