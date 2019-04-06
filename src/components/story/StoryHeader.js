import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class StoryHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
            <View style={styles.storiesContainer}>
                <View style={styles.storySeen}/>
                <View style={styles.storySeen}/>
                <View style={styles.story}/>
                <View style={styles.story}/>
                <View style={styles.story}/>
            </View>
          </View>
        );
      }
}


const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      marginTop: 30,
      padding: 20,
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
    backgroundColor: "rgb(254,190,16)",
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
    color: 'white'
  },
  description: {
    marginLeft: 10,
    color: 'white'
  }
});
  