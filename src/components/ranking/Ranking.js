import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainHeader from '../mainHeader/MainHeader';
import RankingItem from './RankingItem'

export default class Ranking extends React.Component {

  render() {
    return(
        <View style={{flex: 1}}>
            <MainHeader title={'Your Sweden'}/>
            <View style={styles.container}>
                <Text style={styles.rankingText}>{'These are the results based on\nyour answers click them to learn\nmore about your Sweden'}</Text>
                <View style={styles.resultsContainer}>
                    <RankingItem first={true} city={'Stockholm'} university={'KTH'} source={require('./first.png')}/>
                    <RankingItem first={false} city={'Linköping'} university={'LIU'} source={require('./second.png')}/>
                    <RankingItem first={false} city={'Luleä'} university={'LTU'} source={require('./third.png')}/>
                </View>
            </View>
            <View style={styles.navigationContainer}>
                <Text style={styles.arrowText}>{'Save the results and do the test again'}</Text>
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
        paddingTop: 30,
        fontSize: 20,
        color: 'rgb( 0, 81, 139)'
    },
    resultsContainer: {

    },
    navigationContainer: { 
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    arrowText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'rgb( 0, 81, 139)'
    },
    arrow: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    }
});
