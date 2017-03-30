/**
 * Created by viktoria on 30.03.17.
 */
import React, {Component} from 'react';
import {
	View
} from 'react-native';
import {connect} from 'react-redux';
import {cityWeatherRequest} from '../actions';

class CurrentDayWeatherDetails extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>

			</View>
		)
	}
}

const mapStateToProps = ({main}) => {
	const {weatherData, loading} = main;

	return {weatherData, loading};
};
export default connect(mapStateToProps, {cityWeatherRequest})(CurrentDayWeatherDetails);