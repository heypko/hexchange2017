import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';

import Ask from './Ask';
import Answer from './Answer';

export default class Main extends React.Component {
	render() {
	return(
	<Container>
		<Header hasTabs />
		<Tabs initialPage={1}>
			<Tab heading="Profile">
			</Tab>
			<Tab heading="Ask">
				<Text> I ASK QUESTIONS </Text>
				<Ask/>
			</Tab>
			<Tab heading="Answer">
				<Text> I ANSWER QUESTIONS </Text>
				<Answer/>
			</Tab>
		</Tabs>
    </Container>
	);
}}
