import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Item, Text, Input, Content} from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Chat extends React.Component {
	render() {
		return (
			<Content>
				<Button rounded success>
					<Text>Chat</Text>
				</Button>
			</Content>
		);
	}
}