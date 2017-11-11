import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Content, List, ListItem } from 'native-base';

export default class Ask extends React.Component {
	render() {
		var items = [];
		for(var i = 0; i < 50; i++) {
			items.push(`blabla number ${i}`);
		}
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
			</Content>
		);
	}
}

