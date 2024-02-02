import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

function Comp () { //para ser exportado como padrao
    return <Text style={Estilo.fontG}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text style={Estilo.fontG}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.fontG}>Comp #02</Text>
}


export default Comp