import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import HeaderComponent from '../HeaderComponent.js'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <Container style={styles.appMargin}>
        <HeaderComponent
          title='Home'>
        </HeaderComponent>
        <Content>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  appMargin: {
    marginTop: 25
  },
})