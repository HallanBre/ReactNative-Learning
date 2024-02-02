import React from 'react'
import {Text} from 'react-native'
import Filho from './Filho'

export default props => {

    let x = 100
    let y = 200

    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={y+100}/>
        </>
    )
}