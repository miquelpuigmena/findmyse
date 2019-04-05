import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class YesNoCard extends React.Component {
    render() {

      const touchDisabled = this.props.chosenOption !== null;

      //TODO: Add logic for touched

        return (
          <View style={{margin: 5}}>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>{this.props.question}</Text>
            </View>
            <View style={styles.card}>
                <TouchableOpacity style={styles.cardYes} disabled={touchDisabled}>
                    <Text style={styles.cardText}>{this.props.leftText}</Text>
                </TouchableOpacity>
                <View style={styles.cardSeparator}/>
                <TouchableOpacity style={styles.cardNo} disabled={touchDisabled}>
                    <Text style={styles.cardText}>{this.props.rightText}</Text>
                </TouchableOpacity>
            </View>
          </View>
        );
      }
}


const styles = StyleSheet.create({
  questionTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  questionText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  card: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#ffffffaa'
  },
  cardYes: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNo:  {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSeparator: {
    width: 1,
    backgroundColor: 'gray',
    height: '100%'
  },
  cardText: {
    fontSize: 24
  }
  });
  