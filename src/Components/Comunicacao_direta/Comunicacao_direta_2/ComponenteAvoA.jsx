import React from "react"

import ComponentePaiA from "./ComponentePaiA"

export default (props) => 
{
    return (
        <div className="componente">
            <p className="titulo">Avô</p>

            <ComponentePaiA nome="Diogo" apelido="Santiago"></ComponentePaiA>
        </div>
    )
}