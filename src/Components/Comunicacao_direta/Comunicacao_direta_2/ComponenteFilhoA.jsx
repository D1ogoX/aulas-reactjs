import React from "react"

export default (props) => 
{
    return (
        <div className="componente">
            <p className="titulo">Filho</p>
            <p>Nome: {props.nome}</p>
            <p>Apelido: {props.apelido}</p>
        </div>
    )
}