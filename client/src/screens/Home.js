import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Home = () =>{

    return(
        <View style={Styles.container}>
            <FontAwesome name="home" size={32} color="green"/>
            <Text>Home</Text>
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

export default Home;