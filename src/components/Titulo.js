import React from "react";
import { SafeAreaView, Text } from "react-native";
import estilo from "./estilo";

export default props => (
    <React.Fragment>  
        <Text style={estilo.fontG} >{props.principal}</Text>
        <Text>{props.segundario}</Text>
    </React.Fragment>
)