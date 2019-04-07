import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import MainHeader from '../mainHeader/MainHeader';
import RankingItem from './RankingItem'
import { CARDS } from '../../constants';
import Axios from 'axios';

export default class Ranking extends React.Component {

    constructor(props){
        super(props)
        this.getResult()
    }

    getResult = async () => {
        const results = await Axios.post(url, body)
        
    }

    //this.props.id1 = 1a city del ranking
    //this.props.id2 = 2a city del ranking
    //this.props.id3 = 3a city del ranking

    _onPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Story', {data: CARDS[0]});
    };

  render() {
    const ranking1 = cities.map(item =>(this.props.id1 === item.id) && <RankingItem ranking={'#1'} city={item.city} university={item.university} id={item.id}/>
    const ranking2 = cities.map(item =>(this.props.id1 === item.id) && <RankingItem ranking={'#2'} city={item.city} university={item.university} id={item.id}/>
    const ranking3 = cities.map(item =>(this.props.id1 === item.id) && <RankingItem ranking={'#3'} city={item.city} university={item.university} id={item.id}/>
    
    return(
        <View style={{flex: 1}}>
            <MainHeader title={'Your Sweden'}/>
            <View style={styles.container}>
                <Text style={styles.rankingText}>{'These are the results based on\nyour answers click them to learn\nmore about your Sweden'}</Text>
                <View style={styles.resultsContainer}>
                    {ranking1}
                    {ranking2}
                    {ranking3}
                </View>
            </View>
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={styles.navigationContainer}>
                    <Text style={styles.arrowText}>{'Save the results and do the test again'}</Text>
                    <Image style={styles.arrow} source={require('./blueArrow.png')} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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

const cities=[
    {
	id: 0,
	city: 'Stockholm',
	university: 'Karolinska Institutet',
	description: 'Sweden’s single largest centre of medical academic research and offers the country’s widest range of medical courses and programs.',
    img: require('./assets/img_0.png'),
    highlight: 'Since 1901 the Nobel Assembly at Karolinska Institutet has selected the Nobel laureates in Physiology or Medicine.',
    map: require('./assets/map_0.png'),
    feature1: 'Environmentally friendly. Approximately 70,000 cyclists cross Stockholm’s city borders daily.',
	feature2: 'Stockholm is consistently ranked as one of world’s most entrepreneurial, innovative and attractive cities.',
	feature3: 'Stockholm was built on 14 islands, connected by 57 bridges, earning the Swedish capital the nickname \'Beauty on the Water.',
	feature4: 'Art in Stockholm’s metro stations. They have been decorated with mosaics, paintings, sculptures, and carvings by artists since the 1950s.',
    icon1: require('./assets/icon1_0.png'),
    icon2: require('./assets/icon2_0.png'),
    icon3: require('./assets/icon3_0.png'),
    icon4: require('./assets/icon4_0.png')
    },   
    {
	id: 1,
	city: 'Luleå',
	university: 'Luleå University of Technology',
	description: 'Luleå University of Technology is experiencing strong growth with world-leading competence in several areas of research. Research is conducted in close collaboration with industries.',
    img: require('./assets/img_1.png'),
    highlight: 'The municipality is to 75 per cent covered by woodland.',
    map: require('./assets/map_1.png'),
    feature1: 'Luleå is situated just below the Arctic Circle. It is a winter wonderland during half of the year, with warm summers.', 
    feature2: 'Short distances and the close proximity between people mean living in Luleå is easy.', 
	feature3: 'With men’s and women’s elite teams in ice hockey and basketball, Luleå has developed a prominent sporting profile.',
	feature4: '1.312 archipelago islands to discover in summer and winter alike. Don\'t miss out the ice roads.',
    icon1: require('./assets/icon1_1.png'),
    icon2: require('./assets/icon2_1.png'),
    icon3: require('./assets/icon3_1.png'),
    icon4: require('./assets/icon4_1.png')
    },
    {
    id: 2,
	city: 'Linköping',
	university: 'Linköpings Universitet',
	description: 'In close collaboration with the business world and society, Linköping University (LiU) conducts world-leading, boundary-crossing research in fields including materials science, IT and hearing.',
    img: require('./assets/img_2.png'),
    highlight: 'Approximately one third of the population are students.',
    map: require('./assets/map_2.png'),
    feature1: 'Large differences between seasons but with a comparatively mild weather. Perfect for outdoor barbecues.',
	feature2: 'It is the 7th largest city in Sweden. Combines the hustle by surrounding itself with lakes.', 
	feature3: 'Residents and visitors are able to enjoy art, theatre, history, concerts, markets, festivals and sporting events.',
    feature4: 'It is situated on the main southern railway line connecting Stockholm with Malmö and Danish capital Copenhagen.',
    icon1: require('./assets/icon1_2.png'),
    icon2: require('./assets/icon2_2.png'),
    icon3: require('./assets/icon3_2.png'),
    icon4: require('./assets/icon4_2.png')
    }
]
