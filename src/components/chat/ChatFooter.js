import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class StoryHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>
                <View/>
                <TextInput style={styles.input} placeholder="Write here..." />
          </View>
        );
      }
}


const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      marginBottom: 10,
      padding: 20,
  },
  input: {
    flex: 1,
    color: 'black',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    padding: 10,
    paddingLeft: 15
  }
});
  