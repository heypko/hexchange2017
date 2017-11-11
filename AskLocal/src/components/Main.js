import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Button, Icon, Right, Body, Title, Thumbnail, Badge } from 'native-base';

import {
  StackNavigator,
} from 'react-navigation';


import Chat from './Chat';
import TabsScreen from './Tabs';

const App = StackNavigator({
  Tabs: { screen: TabsScreen,
	navigationOptions: ({navigation}) => ({
	  title: 'Kotai',
	  headerRight: (
		  <Button transparent onPress={() => navigation.navigate('Chat')}>
			<Badge style={{backgroundColor:'#F39852'}}><Text style={{color:'white'}}>2</Text></Badge>
			<Icon name='ios-chatboxes' style={{color:'white'}}/>
		  </Button>
	  ),
	  headerLeft: (
		  <Button transparent>
			<Thumbnail small source={{uri: 'http://lorempixel.com/400/200/people/'}} />
		  </Button>
	  ),
      headerStyle: {'backgroundColor': '#27AE61'},
	  headerTitleStyle: { 'color': 'white'}
    }), },
  Chat: { screen: Chat,
	navigationOptions: {
		headerStyle: {'backgroundColor': '#27AE61'},
	  headerTitleStyle: { 'color': 'white'},
		title: 'Conversations',
	}},
});

export default class Main extends React.Component {
	render() {
		return(
			<Container>
				<App />
			</Container>
		);
	}
}