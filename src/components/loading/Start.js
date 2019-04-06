import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class Loading extends React.Component {
  render() {

    const {width, height} = Dimensions.get('window');
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(0,81,139)'}}>
        <View style={{flex: 4}} />
        <View style={{flex: 6, alignItems: 'center', position: 'relative'}}>
            <View style={{width: 125, height: 75, backgroundColor: "red", position: 'relative'}}>
                <View style={{height: (0.6 * height) + 10, width: 15, position: 'absolute', top:-10, left: -70, backgroundColor: 'rgb(254,190,16)', borderTopLeftRadius: 7.5, borderTopRightRadius: 7.5}}/>
            </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});