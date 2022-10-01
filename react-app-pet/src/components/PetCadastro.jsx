import React from 'react'



export default function PetCadastro(props) {
    return (
        <div>
            <form method='post' onSubmit={props.adicionarNovoPet}>
                
                <div>
                    <input type="text" name='nome' placeholder='Nome do pet...' value={props.novoPet.nome} onChange={props.digit} />
                </div>

                <div>
                    <input type="text" name='idade' placeholder='Digite a idade do seu pet...' value={props.novoPet.idade} onChange={props.digit} />
                </div>

                <div>
                    <input type="text" name='raca' placeholder='Digite a raça do seu pet...' value={props.novoPet.raca} onChange={props.digit} />
                </div>

                <div>
                    <input type="text" name='tamanho' placeholder='Digite o tamanho do seu pet...' value={props.novoPet.tamanho} onChange={props.digit} />
                </div>

                <div>
                    <input type="text" name='nmDono' placeholder='Digite o seu nome...' value={props.novoPet.nmDono} onChange={props.digit} />
                </div>

                <div>
                    <input type="text" name='telefone' placeholder='Digite o seu telefone...' value={props.novoPet.telefone} onChange={props.digit} />
                </div>

                <div>
                    <textarea name="observacao" cols="30" rows="10" placeholder='Observações...' value={props.novoPet.observacao} onChange={props.digit}></textarea>
                </div>
                <button type='submit'>Adicionar</button>
            </form>
        </div>
    )
}
