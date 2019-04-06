import React from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import ResultHeader from './ResultHeader';
import ResultInformation from './ResultInformation'
import ResultLocation from './ResultLocation'
import Features from './Features'
import ResultLinks from './ResultLinks'


export default class Result extends React.Component {

  render() {
    return(
        <View style={styles.container}>
            <ResultHeader ranking={'1'}/>
            <ScrollView>
                <ResultInformation city={'Stockholm'} university={'Karolinska Institutet'} description={'Sweden’s single largest centre of medical academic research and offers the country’s widest range of medical courses and programs.'} img={require('./img.png')}highlight={'Since 1901 the Nobel Assembly at Karolinska Institutet has selected the Nobel laureates in Physiology or Medicine.'}/>
                <ResultLocation />
                <Features />
                <ResultLinks />
                <Button 
                    title='Share My Sweden'
                    color='rgb(0, 81, 139)'/>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100
    }
});
