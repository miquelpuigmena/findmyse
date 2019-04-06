import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CARDS } from '../../constants';
const axios = require('axios');


export default class YesNoCard extends React.Component {

  onPressYes = () => {
    // TODO 

    if (!!CARDS[this.props.data.id + 1]){
      this.props.navigate('Story', {data: CARDS[this.props.data.id +1]})
    } else {
      // TODO
    }
    
  }

  onPressNo = () => {
    //TODO axios.post

    if (!!CARDS[this.props.data.id + 1]){
      this.props.navigate('Story', {data: CARDS[this.props.data.id +1]})
    } else {
      // TODO
    }

  }

    render() {

        return (
          <View style={{margin: 5}}>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>{this.props.data.text}</Text>
            </View>
            <View style={styles.card}>
                <TouchableOpacity style={styles.cardYes} onPress={this.onPressYes}>
                    <Text style={styles.cardText}>{this.props.data.leftValue}</Text>
                </TouchableOpacity>
                <View style={styles.cardSeparator}/>
                <TouchableOpacity style={styles.cardNo} onPress={this.onPressNo}>
                    <Text style={styles.cardText}>{this.props.data.rightValue}</Text>
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
  