import React from "react"
import {SafeAreaView, StyleSheet} from "react-native"

import ParImpar from "./components/ParImpar"
//import Diferenciar from "./components/Diferenciar"
//import ContadoV2 from "./components/contador/ContadoV2"
//import Pai from "./components/indireta/Pai"
// import Pai from "./components/direta/Pai"
// import Contador from "./components/Contador"
// import Botao from "./components/Botao"
// import Titulo from "./components/Titulo"
// import MinMax from "./components/MinMax"
// import Aleatorio from "./components/Aleatorio"
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>
        

        <ParImpar num = {2}/>
        {/*"
        <Diferenciar />
        <ContadoV2/>
        <Pai/>
        <Pai />
        <Contador inicial={100} passo={2}/>
        <Contador/>
        <Botao />"
        <Titulo principal="cadastro"
        segundario="tela de cadastro do produto"/>
        <Aleatorio menor={1} maior={60}/>
        <MinMax min={2} max={20}/>
        <MinMax min={10} max={200}/> */}
        {/* <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)

const style = StyleSheet.create({ 
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    } 
})

