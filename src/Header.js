import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export const  Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My little Calculator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        height: 60
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
  });