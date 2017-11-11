import Expo from "expo";
import React from "react";
import { StatusBar, Container } from "react-native";

import Main from './src/components/Main';

export default class App extends React.Component {
	constructor() {
	super();
		this.state = {
			isReady: false
		};
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
	});

		this.setState({ isReady: true });
	}

	componentDidMount() {
		StatusBar.setHidden(true);
	}

	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}
		return <Main />;
	}
}
