/**
 * Created by viktoria on 29.03.17.
 */

import React from 'react';
import {
	Text,
	View
} from 'react-native';
import styles from '../../styles/styles';

const Header = ({title}) => {

	const {header, headerTitle} = styles;

	return(
		<View style={header}>
			<Text style={headerTitle}>{title}</Text>
		</View>
	)
};

export {Header};