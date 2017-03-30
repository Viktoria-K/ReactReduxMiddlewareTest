/**
 * Created by viktoria on 29.03.17.
 */

import {CITY_REQUEST_SUCCESS, CITY_REQUEST_FAIL} from '../actions/types';
import {URL, API_KEY} from './consts';

export const cityWeatherRequest = () => {
	return (dispatch) => {
		let url = URL + 'forecast?q=kiev' + API_KEY + '&units=metric';

		fetch(url, {
			method: 'GET'
		})
		.then(response => response.json())
		.then((json) => {
			 getDataSuccess(dispatch, json);
			 console.log(json);
		})
		.catch(error => {
			getDataFail(dispatch, error);
		});
	}
};

const separateWeatherData = (data) => {
	
};

const getDataSuccess = (dispatch, json) => {
	dispatch({
		type: CITY_REQUEST_SUCCESS,
		payload: json
	});
};
const getDataFail = (dispatch, error) => {
	dispatch({
		type: CITY_REQUEST_FAIL,
		payload: error
	});
};
