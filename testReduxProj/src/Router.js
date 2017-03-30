import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import MainScreen from './components/MainScreen'

class RouterComponent extends Component {

	render() {
		return (
			<Router>
				<Scene key="main" hideNavBar panHandlers={null}>
					<Scene key='mainScreen' component={MainScreen} title="" panHandlers={null} onBackAndroid={null}/>
				</Scene>
			</Router>
		);

	}
}

export default RouterComponent;

