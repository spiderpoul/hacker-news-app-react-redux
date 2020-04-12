import axios from 'axios';
import {
    imageOfTheDayError,
    imageOfTheDayRequest,
    imageOfTheDaySuccess,
} from './actionsCreators';

import { API_URL_IMAGE_OF_THE_DAY } from './constants';

export const fetchPictureOfTheDay = () => async (dispatch) => {
    dispatch(imageOfTheDayRequest());
    try {
        const res = axios.get(API_URL_IMAGE_OF_THE_DAY);
        dispatch(imageOfTheDaySuccess({ data: res }));
    } catch (error) {
        imageOfTheDayError({ error });
    }
};
