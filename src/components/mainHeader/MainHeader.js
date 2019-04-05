import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MainHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.porfileIcon} source={require('./porfile.png')}/>
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
      paddingTop: 50,
      backgroundColor: '#dddddd'
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  story: {
    height: 5,
    flex: 1,
    backgroundColor: "#ffffff77",
    margin: 3
  },
  storySeen: {
    height: 5,
    flex: 1,
    backgroundColor: "white",
    margin: 3
  },
  userContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  avatar: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: 'yellow'
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'darkgrey',
    fontSize: 18
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  porfileIcon: {
    width: 40, 
    height: 40

  },
  screenTitle: {
    fontSize: 25,
  },
  messageIcon: {
    width: 40,
    height: 40

  }
});
  