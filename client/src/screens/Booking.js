import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Booking = () =>{

    return(
        <View style={Styles.container}>
            <Text>Booking</Text>
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

export default Booking;