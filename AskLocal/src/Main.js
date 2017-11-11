import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';

import Question from './Question';
import Answer from './Answer';

export default class Main extends React.Component {
	render() {
	return(
	<Container>
		<Header hasTabs />
		<Tabs initialPage={1}>
			<Tab heading="Profile">
			</Tab>
			<Tab heading="Question">
				<Question/>
			</Tab>
			<Tab heading="Answer">
				<Answer/>
			</Tab>
		</Tabs>
    </Container>
	);
}}
