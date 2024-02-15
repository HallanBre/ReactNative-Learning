import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from './quadrado'

export default (props) => {
  return (
    <View style={style.FlexV3}>
      <Quadrado />
      <Quadrado cor="#900" lado = {20} />
      <Quadrado cor="#090" lado = {30} />
      <Quadrado cor="#009" lado = {40} />
    </View>
  );
};

const style = StyleSheet.create({
    FlexV3:{ 
       flexDirection:'row', //Define qm é o eixo principal 
       justifyContent:'flex-end',
       alignItems: "stretch", 
       height: 350,
       width: '100%',
       backgroundColor: '#F0F',
    }
})