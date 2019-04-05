import React from 'react';
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView } from 'react-native';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';


export default class Story extends React.Component {

  renderItem = ({item}) => {
    return (
      <View style={styles.bubble}>
        <Text>{item.key}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ChatHeader />
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <FlatList data={[{key: 'test'}]} renderItem={this.renderItem}/>
        <ChatFooter />
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
    backgroundColor: '#dddddd',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 15
  }
});
