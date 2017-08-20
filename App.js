import React from 'react'
import { AppLoading } from 'expo'
import { DrawerNavigator } from 'react-navigation';

// App screens
import HomeScreen from './src/HomeScreen'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      appReady: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({
      appReady: true
    })
  }

  render() {
    if (!this.state.appReady) {
      return (<AppLoading/>)
    }
    return (
      <AppNavigator></AppNavigator>
    )
  }
}

const AppNavigator = DrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
  }
)
