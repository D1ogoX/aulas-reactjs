import React from "react"

import ComponenteFilhoA from "./ComponenteFilhoA"

export default (props) => 
{
    return (
        <div className="componente">
            <p className="titulo">Pai</p>

            <ComponenteFilhoA {...props}></ComponenteFilhoA>
        </div>
    )
}