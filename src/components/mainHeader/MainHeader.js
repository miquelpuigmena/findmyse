import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MainHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.profileIcon} source={require('./profile.png')}/>
                <Text style={styles.screenTitle}>{this.props.title}</Text>
                <Image style={styles.messageIcon} source={require('./messages.png')} />
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      padding: 20,
      paddingTop: 40,
      backgroundColor: 'rgb(0, 81, 139)',
       height: 80
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: 25, 
    height: 25

  },
  screenTitle: {
    fontSize: 15,
    color: 'rgb(255, 255, 255)'
  },
  messageIcon: {
    width: 25,
    height: 25

  }
});
  