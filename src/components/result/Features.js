import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeaturesItem from './FeaturesItem'

export default class Features extends React.Component {
    render() {

        return (
            <View style={styles.container}>   
                <Text style={styles.title}>Interesting facts</Text>
                <FeaturesItem id={1} />
                <FeaturesItem id={2} />
                <FeaturesItem id={3} />
                <FeaturesItem id={4} />
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize:  18,
    paddingLeft: 15,
    paddingRight: 15
  }
});
  