import React from 'react';
import { View, Text, Content, List, ListItem } from 'native-base';

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
			</Content>
		);
	}
}
