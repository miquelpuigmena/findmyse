import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class StoryHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text style={styles.username}>Current Accuracy</Text>
                <Text style={styles.description}>66%</Text>
            </View>
            <View style={styles.storiesContainer}>
                <View style={styles.storySeen}/>
                <View style={styles.story}/>
            </View>
          </View>
        );
      }
}


const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      marginBottom: 10,
      padding: 20,
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingTop: 10
  },
  story: {
    height: 5,
    flex: 1,
    backgroundColor: "#ffffff77"
  },
  storySeen: {
    height: 5,
    flex: 2,
    backgroundColor: "rgb(254,190,16)"
  },
  userContainer: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  username: {
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    marginLeft: 10,
    color: 'white'
  }
});
  