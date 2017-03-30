/**
 * Created by viktoria on 29.03.17.
 */

'use strict';

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../styles/styles';

const Spinner = ({size, color}) => {
	return(
		<View style={styles.activityIndicatorContainer}>
			<ActivityIndicator
				color={color ? color : '#ffffff'}
				size={size ? size : "large"}/>
		</View>
	)
};
export {Spinner};