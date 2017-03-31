/**
 * Created by viktoria on 29.03.17.
 */

import {CITY_REQUEST_SUCCESS, CITY_REQUEST_FAIL} from '../actions/types';
import {URL, API_KEY} from './consts';



export const cityWeatherRequest = (dispatch) => {

		let url = URL + 'forecast?q=kiev' + API_KEY + '&units=metric';

		return fetch(url, {
			method: 'GET'
		})
		.then(response => response.json())
		.then((json) => {
			 console.log('2');
			 getDataSuccess(dispatch, json);
			 console.log(json);
		})
		.catch(error => {
			getDataFail(dispatch, error);
		});

};

const cityWeather = () => {

		//let url = URL + 'forecast?q=kiev' + API_KEY + '&units=metric';
return new Promise(
	(resolve, reject) => {
		fetch(URL + 'forecast?q=kiev' + API_KEY + '&units=metric', {
			method: 'GET'
		})
			.then(response => response.json())
			.then((json) => {
				console.log('1');
				console.log(json);
				resolve(json);
			})
			.catch(error => {
				reject(error)
			});
	}
)
};

export const getData = () => {

	return (dispatch) => {

		cityWeather(dispatch)
			.then(result => {
				console.log(result);
				return result;
			})
			.then(result => {
				console.log(result);
				cityWeatherRequest(dispatch);
		});
	}
};

const getDataSuccess = (dispatch, json) => {
	console.log('вызван success');
	console.log(json);
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
