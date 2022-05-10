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

function App()
{
    return (
        <>
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