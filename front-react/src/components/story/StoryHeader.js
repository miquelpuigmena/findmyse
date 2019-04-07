import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class StoryHeader extends React.Component {

  renderStories = () => {
    const stories = []
    for (let i=0; i < this.props.total;  i++) {
        if (i > this.props.done) {
          stories.push(<View style={styles.story} key={""+i}/>);
        } else {
          stories.push(<View style={styles.storySeen} key={""+i}/>);
        }
    }
    return stories
  }

    render() {

        return (
          <View style={styles.container}>
            <View style={styles.storiesContainer}>
                {this.renderStories().map(i => i)}
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
  