import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Button, Icon, Right, Body, Title, Thumbnail, Badge } from 'native-base';

import Ask from './Ask';
import Answer from './Answer';
import Profile from './Profile';

export default class TabsScreen extends React.Component {
	render() {
		let thumb = 'http://lorempixel.com/400/200/people/';
		return(
				<Tabs initialPage={1}>
					<Tab heading="Answer">
						<Answer navigation={this.props.navigation}/>
					</Tab>
					<Tab heading="Ask">
						<Ask/>
					</Tab>
				</Tabs>
		);
	}
}