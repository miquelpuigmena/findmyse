import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ResultLinks extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.link}>
                    Get in touch with other students
                </Text>
                <Text style={styles.link}>
                    Learn more about the university
                </Text>
                <Text style={styles.link}>
                    Learn more about the city
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30
    },
    link: {
        color: 'rgb(0, 81, 139)',
        fontSize: 16,
        paddingTop: 15
    },
});
