import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ResultHeader extends React.Component {
    render() {

        return (
          <View style={styles.container}>   
            <View style={styles.goBackContainer}>
                <Image style={styles.arrowIcon} source={require('./arrow.png')}/>
                <Text style={styles.screenTitle}>{'Your Sweden'}</Text>
            </View>
            <View style={styles.rankingContainer}>
              <Image style={styles.rankingImage} source={require('./ranking.png')} />
              <Text style={styles.rankingText}>{'#'+this.props.ranking}</Text>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      paddingRight: 20,
      paddingTop: 40,
      backgroundColor: 'rgb(0, 81, 139)',
      height: 80
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  arrowIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: 20
  },
  screenTitle: {
    fontSize: 20,
    color: 'white'
  },
  rankingContainer: {
    top: -45,
    left: 280,
    height: 123,
    width: 70
  },
  rankingText: {
    top: -90,
    left: 20,
    fontSize: 25,
    color: 'rgb(0, 81, 139)',
    fontWeight: '600',
  },
  shareIcon: {
    width: 25,
    height: 25
  }
});
  