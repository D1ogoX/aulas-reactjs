import React from "react"

import ComponenteFilho from "./ComponenteFilho"

function ComponentePai (props){
    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            <p>Pai</p>

            <ComponenteFilho titulo="Componente filho 1"
                cargo="Administrador">
                    
                    Diogo Santiago

            </ComponenteFilho>

            <ComponenteFilho titulo="Componente filho 2"
                cargo="Secretária">
                    
                    Ana Silva

            </ComponenteFilho>

            <ComponenteFilho titulo="Componente filho 3"
                cargo="Operador">
                    
                    Carlos Santos

            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai