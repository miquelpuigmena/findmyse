import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ResultInformation extends React.Component {
    render() {
        return (
            <View style={styles.container}>   
                <Text style={styles.cityText}>{this.props.city}</Text>
                <Text style={styles.universityText}>{this.props.university}</Text>
                <Text style={styles.descriptionText}>{this.props.description}</Text>
                <Image style={styles.img} source={this.props.img} />
                <Text style={styles.highlightText}>{this.props.highlight}</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
  },
  cityText: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'rgb(0, 81, 139)',
    fontSize:  25,
    fontWeight: 'bold'
  },
  universityText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20
  },
  descriptionText: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16
  },
  img: {
    height: 225,
    width: 375,
  },
  highlightText: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16
  }
});
  