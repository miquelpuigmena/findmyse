import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeaturesItem from './FeaturesItem'

export default class Features extends React.Component {
    render() {

        return (
            <View style={styles.container}>   
                <Text style={styles.title}>Interesting facts</Text>
                <FeaturesItem icon={this.props.icon1} feature={this.props.feature1}/>
                <FeaturesItem icon={this.props.icon2} feature={this.props.feature2}/>
                <FeaturesItem icon={this.props.icon3} feature={this.props.feature3}/>
                <FeaturesItem icon={this.props.icon4} feature={this.props.feature4}/>
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
  