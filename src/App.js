import React from "react"
import {SafeAreaView, StyleSheet} from "react-native"

import FlexBoxV4 from "./components/layout/FlexBoxV4"
//import FlexBoxV3 from "./components/layout/FlexBoxV3"
//import FlexBoxV2 from "./components/layout/FlexBoxV2"
//import FlexBoxV1 from "./components/layout/FlexBoxV1"
//import DigiteSeuNome from "./components/DigiteSeuNome"
//import ListaProdutosV2 from "./components/produtos/ListaProdutosV2"
//import ListaProdutos from "./components/produtos/ListaProdutos"
//import UsuarioLogado from "./components/UsuarioLogado"
// import Familia from "./components/relacao/Familia"
// import MembroFamilia from "./components/relacao/MembroFamilia"
//import ParImpar from "./components/ParImpar"
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
        

        <FlexBoxV4/>
        {/*"
        <FlexBoxV3/>
        <FlexBoxV2/>
       <FlexBoxV1/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome: 'lherme'}}/>
        <UsuarioLogado usuario={{email: 'lhermes@lherms.com'}}/>
        <Familia>   
            <MembroFamilia nome="Bio" sobrenome="Arruda"/>
            <MembroFamilia nome="Carlos" sobrenome="Arruda"/>
        </Familia>

        <Familia>   
            <MembroFamilia nome="Ana" sobrenome="Silva"/>
            <MembroFamilia nome="Ano" sobrenome="Silva"/>
        </Familia>
        <ParImpar num = {2}/>
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

