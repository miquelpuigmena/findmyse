import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class StoryHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""}
  }

  _onSubmitEditing = () => {
    this.props.onSubmit(this.state.value);
    this.setState({value: ""})
  }

  _onChangeText = (value) =>  {
    this.setState({value})
  }

    render() {
        return (
          <View style={styles.container}>
                <View/>
                <TextInput style={styles.input} placeholder="Type your message..." value={this.state.value} onSubmitEditing={this._onSubmitEditing} onChangeText={this._onChangeText} />
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    padding: 10,
    paddingLeft: 15,
    fontSize: 16
  }
});
  