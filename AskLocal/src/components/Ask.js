import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Item, Text, Input, Content} from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Ask extends React.Component {
	render() {
		var items = [];
		for(var i = 0; i < 50; i++) {
			items.push(`blabla number ${i}`);
		}
		return (
			<Content>
			    <Item regular>
					<Input placeholder='Type your question here...' />
				</Item>
				<Button rounded success>
					<Text>Ask someone</Text>
				</Button>
			</Content>
		);
	}
}

