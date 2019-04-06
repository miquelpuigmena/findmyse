import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FeaturesItem extends React.Component {
    render() {

        return (
            <View style={styles.container}>  
                {/* <View style={styles.icon}></View> */}
                <Image style={styles.icon} source={this.props.icon} />
                <Text style={styles.description}>{this.props.feature}</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    marginRight: 15,
    height: 60,
    width: 60,
    top: 0,
    left: 0
  },
  description: {
    fontSize:  16,
    flex: 1, 
    flexWrap: 'wrap'
  }
});
  