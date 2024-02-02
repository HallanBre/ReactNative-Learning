import React from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import { useState } from 'react'
import estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)

    function exibirValor(numero){
        setNum(numero)
    }

    return (
        <>
        <Text style ={estilo.fontG}>{num}</Text>
        <Filho min={1} max={100} funcao={exibirValor} />
        </>
    )
}