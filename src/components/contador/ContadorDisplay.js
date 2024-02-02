import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <SafeAreaView style={style.display}>
        <Text style={[Estilo.fontG, style.displayText]}>  
            {props.num}
        </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    displayText:{
        color:'#fff',
    }
})