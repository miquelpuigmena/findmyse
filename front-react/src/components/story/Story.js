import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SliderCard from '../cards/SliderCard';
import YesNoCard from '../cards/YesNoCard';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';
import { CARDS } from '../../constants';



export default class Story extends React.Component {
  render() {

    const {data} = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(0,81,139)'}}>
        <StoryHeader done={data.id} total={CARDS.lenght} />
        <View style={styles.container}>
          <YesNoCard data={data} navigate={navigate} />
        </View>
      </View>
      
    );
  }
}

// <SliderCard question="Is this a question?" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
