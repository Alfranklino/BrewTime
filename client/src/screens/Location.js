import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Location = () =>{

    return(
        <View style={Styles.container}>
            <Text>Location</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
   
});

export default Location;