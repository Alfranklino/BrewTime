import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Store = () =>{

    return(
        <View style={Styles.container}>
            <Text>Store</Text>
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

export default Store;