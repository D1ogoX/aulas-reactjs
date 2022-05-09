import React from "react"

//Components
import ComponenteCinco from "./ComponenteCinco"

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            
            <ComponenteCinco texto="Componente cinco"/>
        </div>
    )
}

export default ComponenteQuatro