import numpy as np
import pandas
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
from logger.logger import LoggerHelper


LOGGER = LoggerHelper.get_logger(name="core-distance", filename="core-distance.log")


def match_user_county(user_features, county_features):
    try:
        df = county_features.copy()
        county_features = county_features.values
        matching = cosine_similarity(user_features.reshape(1, -1), county_features)
        for user in matching:
            top_3_matching_ratio = np.sort(user)[::-1][:3]
            top_3_matching_county = df.index[user.argsort()[::-1][:3]]
            results = dict(zip(top_3_matching_county, top_3_matching_ratio))
        return results
    except Exception as ex:
        LOGGER.error(str(ex))
        return -1
