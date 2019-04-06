import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Story from './src/components/story/Story';
import Chat from './src/components/chat/Chat';
import Ranking from './src/components/ranking/Ranking';
import Result from './src/components/result/Result';

=======
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon, ScreenOrientation } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
>>>>>>> 4335be5d6698a29eb97760aa587cd10ba225cd51

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
<<<<<<< HEAD
    return (
      <View style={{flex: 1}}>
        <Result id={1} ranking={3}/>
        {/* <Ranking/> */}
      </View>
    );
=======
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }
>>>>>>> 4335be5d6698a29eb97760aa587cd10ba225cd51
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        //require('./assets/images/robot-dev.png'),
        //require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
