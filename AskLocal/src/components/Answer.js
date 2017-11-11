import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

export default class Answer extends Component {
  render() {
	const { navigate } = this.props.navigation;
	let imgSrcs = {
		thumb: 'http://lorempixel.com/400/200/people/',
		img: 'http://lorempixel.com/100/100/sports/',
	}
	let onPressOpenChats = function() {
		this.setState({chatsView: true});
	}
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: imgSrcs.thumb}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  That other text? Sadly, it’s no longer a 10. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded danger>
					<Text>Dismiss</Text>
				</Button>
              </Left>
			  <Right>
				<Button rounded success onPress={() => navigate('Chat')}>
					<Text>Answer</Text>
				</Button>
			  </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}