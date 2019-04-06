import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class RankingItem extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rankingContainer}>
                    <Text style={styles.ranking}>{this.props.ranking}</Text>
                </View> 
                <View style={styles.namesContainer}>
                    <Text style={styles.city}>{this.props.city}</Text>
                    <Text style={styles.university}>{this.props.university}</Text>
                </View>
                <Image source={'./boxRanking.png'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 91,
        width: 237,
    },
    rankingContainer: {

    },
    namesContainer: {

    },
    ranking: {

    },
    city: {
        color: 'rgb(254, 190, 16)',
        fontSize: 25,
        padding: 5
    },
    university: {
        color: 'rgb(254, 190, 16)',
        fontSize: 15,
        fontStyle: 'italic',
        padding: 5
    },
});
