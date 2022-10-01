import React from 'react'
import NavBar from './NavBar'
import Pet from './Pet'
import pet from './Cadastro'

export default function ListaPets() {
    
    

    

    


    return (
        <div>
            <NavBar/>
            <p>Lista Pets</p>

            <div /* styled components */>

                

                <p>aaaaaa</p>

                {pet.map((t,i) =>
                    <Pet
                        nome={t.nome}
                        idade={t.idade}
                        raca={t.raca}
                        tamanho={t.tamanho}
                        nmDono={t.nmDono}
                        telefone={t.telefone}
                        observacao={t.observacao}
                    />
                )}
            </div>
        </div>
    )
}
