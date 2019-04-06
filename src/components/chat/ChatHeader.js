import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class StoryHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.avatar} />
                <Text style={styles.username}>findmy.se</Text>
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
  }
});
  