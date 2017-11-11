import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Content, List, ListItem } from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Ask extends React.Component {
	render() {
		var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
		return (
			<Content>
			<View>
			<List dataArray={items}
			renderRow={(item) =>
				<ListItem>
				<Text>{item}</Text>
				</ListItem>
			}>
			</List>
			</View>
			<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => { console.log("hi")}}>
			</ActionButton>
			</Content>
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
