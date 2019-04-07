import csv
import pandas as pd
import numpy as np
from core.distance import match_user_county
from logger.logger import LoggerHelper


LOGGER = LoggerHelper.get_logger(name="core-findmysweden", filename="core-Findmysweden.log")


PATH_BUSINESS = "/home/hack4sweden/flask/flask-no-db/etc/data"
CSV_UNIV = "/county_features.csv"


class Findmysweden:
    @staticmethod
    def compute_user_match(body_j):
        try:
            hot_encoding_array = []
            hot_encoding_array.append(body_j["Age"])
            hot_encoding_array.append(body_j["Weather"])
            hot_encoding_array.append(body_j["Work"])
            hot_encoding_array.append(body_j["Population"])
            hot_encoding_array.append(body_j["Foreigners"])
            hot_encoding_array.append(body_j["Cost"])
            hot_encoding_array.append(body_j["Lake"])
            hot_encoding_array.append(body_j["Land"])
            hot_encoding_array.append(body_j["Sightseeing"])
            hot_encoding_array.append(body_j["Airport"])
            hot_encoding_array.append(body_j["Ocean"])
            hot_encoding_array.append(body_j["Business"])
            hot_encoding_array.append(body_j["Law"])
            hot_encoding_array.append(body_j["Social"])
            hot_encoding_array.append(body_j["Natural"])
            hot_encoding_array.append(body_j["Engineering"])
            pd_vec_characterized = pd.read_csv(PATH_BUSINESS+CSV_UNIV, index_col="county_code")
            np_body_arr = np.array(hot_encoding_array)
            match = match_user_county(np_body_arr, pd_vec_characterized)
            if len(match) != 3:
                return -1
            return match
        except Exception as ex:
            LOGGER.error(str(ex))
        return -1

