/**
 * Created by viktoria on 28.03.17.
 */

import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';
import {connect} from 'react-redux';
import {Header} from './commons/Header';
import {Spinner} from './commons/Spinner';
import {cityWeatherRequest} from '../actions';
import styles from '../styles/styles'

class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: this.props.weatherData
		};

	}

	componentDidMount() {
		this.props.cityWeatherRequest();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.weatherData != this.props.weatherData) {
			this.setState({
				weatherData: this.props.weatherData
			});
		}
	}

	render() {

		if (this.props.loading) {
			return <Spinner size='large'/>;
		} else {
			return (
				<View>
					<Header title="Weather App"/>
					<View style={styles.mainScreenContainer}>

					</View>
				</View>
			)
		}
	}
}

const mapStateToProps = ({main}) => {
	const {weatherData, loading} = main;

	return {weatherData, loading};
};
export default connect(mapStateToProps, {cityWeatherRequest})(MainScreen);