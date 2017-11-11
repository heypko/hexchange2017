import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Ask from './Ask';
import Answer from './Answer';
import Profile from './Profile';

export default class Main extends React.Component {
	render() {
	return(
	<Container>
		<Header hasTabs />
		<Tabs initialPage={1}>
			<Tab heading="Profile">
				<Profile/>
			</Tab>
			<Tab heading="Ask">
				<Text> I ASK QUESTIONS </Text>
				<Ask/>
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => { console.log("hi")}}>
				</ActionButton>
			</Tab>
			<Tab heading="Answer">
				<Text> I ANSWER QUESTIONS </Text>
				<Answer/>
			</Tab>
		</Tabs>
    </Container>
	);
}}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});
