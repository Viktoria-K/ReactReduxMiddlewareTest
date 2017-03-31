/**
 * Created by viktoria on 29.03.17.
 */
import {
	CITY_REQUEST_SUCCESS,
	CITY_REQUEST_FAIL
} from '../actions/types';

const INITIAL_STATE={
	weatherData: {},
	error: false,
	loading: true,
	weather: true
};

export default (state = INITIAL_STATE, action)=>{
	switch(action.type){
		case CITY_REQUEST_SUCCESS:
			return { ...state, weatherData: action.payload, loading: false, weather: true};
		case CITY_REQUEST_FAIL:
			return { ...state, error: true};
		default:
			return state;
	}
};