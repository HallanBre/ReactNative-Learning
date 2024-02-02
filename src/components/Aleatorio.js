import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default ({menor, maior}) => {
    const delta = maior - menor + 1
    const aleatorio = parseInt(Math.random() * delta) + menor;
    return(
        <Text style={estilo.fontG}>
            O numero é {aleatorio} 
       </Text>
    )
}