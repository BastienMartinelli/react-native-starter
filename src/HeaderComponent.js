import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Right, Body, Button, Icon, Title } from 'native-base'
import { withNavigation } from 'react-navigation';

class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    )
  }
}

export default withNavigation(HeaderComponent)