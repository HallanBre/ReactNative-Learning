import React from 'react'
import { Text } from 'react-native'

import Estilo from '../estilo'

export default props => {
    return (
        <>
            <Text>Membros da Familia:</Text>
           {props.children}
        </>
    )
}