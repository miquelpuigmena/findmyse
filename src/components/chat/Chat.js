import React from 'react';
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView } from 'react-native';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';


export default class Story extends React.Component {

  constructor(props) {
    super(props)
    this.state = {messages: [{key: '0', text: 'Hello! What is your name?', time: '9:11 am', mine: false}]};
  }

  onSubmit = (text) => {
    const newMess = {key: ""+this.state.messages.length,text,time: '9:11 am', mine: true};
    this.setState({messages: [...this.state.messages, newMess]})
  }

  renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
      <View style={{flex: item.mine ? 1 : 0}}/>
      <View style={styles.bubble}>
        <Text style={{fontSize: 16}}>{item.text}</Text>
        <Text style={{fontSize: 10, marginLeft: 10}}>{item.time}</Text>
      </View>
      <View style={{flex: item.mine ? 0 : 1}}/>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(0,81,139,0.06)'}}>
        <ChatHeader />
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <FlatList style={{padding: 20}} data={this.state.messages} renderItem={this.renderItem}/>
        <ChatFooter onSubmit={this.onSubmit}/>
        </KeyboardAvoidingView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bubble: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    shadowColor: 'black',
    shadowOffset: {
      width: 0, height: 5
    },
    shadowRadius: 4,
    shadowOpacity: 0.17
  }
});
