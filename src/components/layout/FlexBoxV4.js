import React from 'react'
import {StyleSheet,Text, View} from 'react-native'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>

        </View>
    )
}

const style = StyleSheet.create({ 
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0:{
        backgroundColor: '#8fb48c',
        height: 300,
    },
    V1: {
        backgroundColor: '#048eb2',
        flexGrow: 9,

    },
    V2: {
        backgroundColor: '#142119',
        flexGrow: 1,
    }

})