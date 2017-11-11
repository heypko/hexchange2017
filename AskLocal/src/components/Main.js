import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Button, Icon, Right, Body, Title, Thumbnail, Badge } from 'native-base';

import {
  StackNavigator,
} from 'react-navigation';

import Chat from './Chat';
import Ask from './Ask';
import Answer from './Answer';
import Profile from './Profile';

export default class Main extends React.Component {
	render() {
		let thumb = 'http://lorempixel.com/400/200/people/';
		return(
			<Container>
				<Header iosBarStyle='light-content' style={{backgroundColor: '#27AE61'}}  hasTabs>
				<Left>
					<Button transparent>
					<Thumbnail small source={{uri: thumb}} />
					</Button>
				</Left>
				<Body>
					<Title style={{color:'white'}}>Kotai</Title>
				</Body>
				<Right>
					<Button transparent>
					<Badge style={{backgroundColor:'#F39852'}}><Text style={{color:'white'}}>2</Text></Badge>
					<Icon name='ios-chatboxes' style={{color:'white'}}/>
					</Button>
				</Right>
				</Header>
				<Tabs initialPage={1}>
					<Tab heading="Answer">
						<Answer navigation={this.props.navigation}/>
					</Tab>
					<Tab heading="Ask">
						<Ask/>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
const App = StackNavigator({
  Home: { screen: Main },
  Chat: { screen: Chat },
});