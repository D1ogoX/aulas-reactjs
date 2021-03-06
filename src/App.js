import React from "react"
import "./App.css"

//Componentes
import ComponenteUm from "./Components/ComponenteUm"
import ComponenteDois from "./Components/ComponenteDois"
import ComponenteTres from "./Components/ComponenteTres"
import ComponenteQuatro from "./Components/ComponenteQuatro"
import ComponenteSeis from "./Components/ComponenteSeis"
import ComponenteSete from "./Components/ComponenteSete"
import ComponenteOito from "./Components/ComponenteOito"
import ComponenteNove from "./Components/ComponenteNove"
import ComponenteDez from "./Components/ComponenteDez"
import ComponentePai from "./Components/Comunicacao_direta/ComponentePai"
import ComponenteMae from "./Components/Comunicacao_indireta/ComponenteMae"
import ComponenteA from "./Components/Comunicacao_indireta_2/ComponenteA"
import ComponenteAvoA from "./Components/Comunicacao_direta/Comunicacao_direta_2/ComponenteAvoA"

function App()
{
    return (
        <>
            <ComponenteAvoA titulo="Comunicação direta 2"/>

            <ComponenteA titulo="Comunicação indireta 2"/>

            <ComponenteMae titulo="Comunicação indireta"/>

            <ComponentePai titulo="Comunicação direta"/>

            <ComponenteDez titulo="Componente dez" corTexto="red"/>

            <ComponenteNove titulo="Componente nove" valor="Diogo"/>

            <ComponenteOito titulo="Componente oito" valor={1}/>

            <ComponenteSete titulo="Componente sete" valor={1} />

            <ComponenteSeis titulo="Componente seis" />

            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três"
            subTitulo="teste" />

            <ComponenteDois />

            <ComponenteUm />
        </>
    )
}

export default App