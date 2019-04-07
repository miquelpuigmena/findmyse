import React from 'react';
import { StyleSheet, Button, View, ScrollView, Alert } from 'react-native';
import ResultHeader from './ResultHeader';
import ResultInformation from './ResultInformation'
import ResultLocation from './ResultLocation'
import Features from './Features'
import ResultLinks from './ResultLinks'


export default class Result extends React.Component {

    shareMySweden() {
        Alert.alert('Going to instagram...')
    }

  render() {
    const resultInfo = cities.map(item =>(this.props.id === item.id) && (
        <ScrollView>
            <ResultInformation 
                id={item.id} 
                city={item.city} 
                university={item.university} 
                description={item.description} 
                img={item.img} 
                highlight={item.highlight}
            />
            <ResultLocation map={item.map}/>
            <Features 
                icon1={item.icon1}
                icon2={item.icon2}
                icon3={item.icon3}
                icon4={item.icon4}
                feature1={item.feature1}
                feature2={item.feature2}
                feature3={item.feature3}
                feature4={item.feature4}
            />
            <ResultLinks />
            <Button 
                title='Share My Sweden'
                color='rgb(0, 81, 139)'
                onPress={this.shareMySweden}/>
        </ScrollView>
    ))
    return(
        <View style={styles.container}>
            <ResultHeader ranking={this.props.ranking}/>
            {resultInfo}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100
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
