import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ResultLocation extends React.Component {
    render() {

        return (
            <View style={styles.container}>   
                <Text style={styles.title}>Location</Text>
                <Image style={styles.map} source={this.props.map} />
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontSize:  18,
    paddingBottom: 10
  },
  map: {
    height: 120,
    width: 345,
  }
});
  