import React from "react"

export default (props) => {

    const estilo = {
        color: "red", 
        padding: "10px",
        backgroundColor: "yellow"
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p style={{color: props.corTexto}}>Texto do paragrafo</p>
            <p style={estilo}>Texto do paragrafo</p>
        </div>
    )
}
