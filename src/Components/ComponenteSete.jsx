import React from "react"

export default function(props)
{
    return (
        <div className="componente">
            <p className="titulo">Título {props.titulo}</p>
            {props.valor == true ? <p>Verdadeiro</p> : <p>Falso</p>}
            {props.valor === true ? <p>Verdadeiro</p> : <p>Falso</p>}
        </div>
    )
}