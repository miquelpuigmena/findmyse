import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SliderCard extends React.Component {
    render() {

      //TODO: Add logic for touched

        return (
          <View style={{margin: 5}}>
            <View style={styles.card}>
              <View style={styles.questionTextContainer}>
                <Text style={styles.questionText}>{this.props.question}</Text>
              </View>
              <View style={styles.sliderContainer}>
                <View style={styles.sliderStart}></View>
                <View style={styles.emojiContainer}>
                  <Text style={styles.emoji}>😀</Text>
                </View>
                <View style={styles.sliderEnd}></View>
              </View>
            </View>
          </View>
        );
      }
}


const styles = StyleSheet.create({
  card: {
    width: 300,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20
  },
  questionTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  questionText: {
    fontSize: 25,
    color: "black"
  },
  sliderContainer: {
    flexDirection: "row",
    margin: 20
  },
  sliderStart: {
    backgroundColor: 'red',
    height: 10,
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  sliderEnd: {
    backgroundColor: '#dddddd',
    height: 10,
    flex: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  emojiContainer: {
    position: 'relative',
    width: 0,
    zIndex: 10
  },
  emoji: {
    position: 'absolute',
    fontSize: 30,
    top: -15,
    right: -15
  }
  });
  