import React from "react"

export default (props) =>
{
    var valor1 = 0;

    function executar()
    {
        valor1 = Math.random()

        props.funcao('Valor: ' + valor1, 'Diogo')
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <button onClick={() =>
            {
                props.funcao(Math.random(), Math.random())
            }}>Executar arrow function</button>

            <button onClick={executar}>Executar</button>

            <p>{valor1}</p>
        </div>
    )
}