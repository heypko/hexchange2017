import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Answer extends React.Component {
	render() {
		return (
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
			<Text> MockAnswer </Text>
			{/* Rest of the app comes ABOVE the action button component !*/}
			<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => { console.log("hi")}}>

			</ActionButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});
