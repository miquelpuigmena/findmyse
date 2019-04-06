import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';

export default class RankingItem extends React.Component {
    _onPress = () => {
        let rnkg = this.props.ranking
        let id = this.props.id
/*         const { navigate } = this.props.navigation; */
        navigate('Result', {ranking: rnkg}, {id: id});
      };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={styles.container}>
                    <ImageBackground style={styles.box} source={require('./boxRanking.png')}>
                        <Text style={styles.ranking}>{this.props.ranking }</Text>
                        <View style={styles.blueContainer}>
                            <Text style={styles.city}>{this.props.city}</Text>
                            <Text style={styles.university}>{this.props.university}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 91,
        width: 237,
        marginTop: 30
    },
    box: {
        top:0,
        left: 0,
        height: 91,
        width: 237,
        position: 'absolute'
    },
    blueContainer: {
        height: 80,
        width: 220,
        top: 11,
        left: 0,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ranking: {
        color: 'rgb(0, 81, 139)',
        fontSize: 14,
        top: 10,
        left: 205,
        fontWeight:'bold',
        position: 'absolute'
    },
    city: {
        color: 'rgb(254, 190, 16)',
        fontSize: 25,
    },
    university: {
        color: 'rgb(254, 190, 16)',
        fontSize: 15,
        fontStyle: 'italic',
    },
});
