import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainHeader from '../mainHeader/MainHeader';


export default class Ranking extends React.Component {

  render() {
    return(
        <View style={{flex: 1}}>
            <MainHeader title={'Your Sweden'}/>
            <View style={styles.container}>
                <Text style={styles.rankingText}>{'These are the results based on\nyour answers click them to learn\nmore about your Sweden'}</Text>
                <View style={styles.resultsContainer}>
                    <View style={styles.firstResult}></View>
                    <View style={styles.secondResult}></View>
                    <View style={styles.thirdResult}></View>
                </View>
            </View>
            <View style={styles.navigationContainer}>
                <Text style={styles.rankingText}>{'Save the results and do the test again'}</Text>
                <Image style={styles.arrow} source={require('./arrow.png')} />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
    },
    rankingText: {
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 18,

    },
    resultsContainer: {

    },
    firstResult: {
        height: 120,
        width: 240,
        borderRadius: 5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        left: 75,
        top: 50
    },
    secondResult: {
        height: 80,
        width: 160,
        borderRadius: 5,
        backgroundColor: 'red',
        left: 20,
        top: 75
    },
    thirdResult: {
        height: 80,
        width: 160,
        borderRadius: 5,
        backgroundColor: 'blue',
        left: 190,
        top: 50
    },
    navigationContainer: { 
        paddingTop: 25,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        margin: 10,
    }
});
