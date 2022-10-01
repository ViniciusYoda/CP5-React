import React from 'react'

export default function Pet(props) {
    return (
        <div>
            <div>
                <h2>{props.nome}</h2>
                <p>{props.idade}</p>
                <p>{props.raca}</p>
                <p>{props.tamanho}</p>
            </div>
            <div>
                <p>{props.nmDono}</p>
                <p>{props.telefone}</p>
                <p>{props.observacao}</p>
            </div>
        </div>
    )
}
