import React from "react"
import Clientes from "../dados_clientes/dados_clientes"

const ComponenteSeis = (props) => {

    function cliente ()
    {
        return Clientes.map(x => {
            return <li key={x.id_cliente}>Nome: {x.nome} | Email: {x.email}</li>
        })
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>

            <ul>
                {cliente()}
            </ul>
        </div>
    )
}

export default ComponenteSeis