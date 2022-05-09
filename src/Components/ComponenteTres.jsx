import React from "react";

/*export default props =>
    <div className="componente">
        <p>Título: {props.titulo}</p>
    </div>*/

    const ComponenteTres = (props) => {
        return (
            <div className="componente">
                <p className="titulo">Título: {props.titulo}</p>
                <p>Sub-Título: {props.subTitulo}</p>
            </div>
        )
    }

    export default ComponenteTres