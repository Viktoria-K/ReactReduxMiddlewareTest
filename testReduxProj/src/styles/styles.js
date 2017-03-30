/**
 * Created by viktoria on 29.03.17.
 */
'use strict';

import React from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	/*Header styles*/
	header: {
		backgroundColor: '#35C0CD',
		height:80,
		margin:0,
		alignItems:'center',
		justifyContent:'center'
	},
	headerTitle: {
		color: '#ffffff',
		fontSize: 20
	},
	mainScreenContainer: {
		backgroundColor: '#5EC4CD',
		height: 700
	},
	iconElement: {
		height: 120,
		width: 120,
		borderRadius: 120,
		backgroundColor: '#028E9B',
		justifyContent: 'center',
		alignItems: 'center'
	},
	degreesElement: {
		height: 150,
		width: 150,
		borderRadius: 150,
		backgroundColor: '#35C0CD',
		justifyContent: 'center',
		alignItems: 'center'
	},
	degreeText: {
		color: 'white',
		fontSize: 50
	},
	cityNameElement: {
		height: 150,
		width: 150,
		borderRadius: 150,
		backgroundColor: '#35C0CD',
		justifyContent: 'center',
		alignItems: 'center'
	},
	activityIndicatorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#35C0CD'
	}
});

export default styles;