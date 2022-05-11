import React from 'react'

import CondicaoIf from './CondicaoIf'

export default function (props) {
    return (
        <div className='componente'>
            <p className='titulo'>Titulo: {props.titulo}</p>

            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor === "Diogo"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor !== "Diogo"}>
                <p>Falso</p>
            </CondicaoIf>
        </div>
    )
}