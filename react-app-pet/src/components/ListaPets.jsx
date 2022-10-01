import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import PetCadastro from './PetCadastro'
import Pet from './Pet'
import { DivPets } from '../style/styled'

export default function Cadastro() {

    const [pet, setPet] = useState([])
    const [nPet, setNPet] = useState({ "nome": "", "idade": "", "raca": "", "tamanho": "", "nmDono": "", "telefone": "", "observacao": "" })

    const captura = (e) => {
        e.preventDefault()

        const { name, value } = e.target

        if (name === "nome") {
            setNPet({ "nome": value, "idade": nPet.idade, "raca": nPet.raca, "tamanho": nPet.tamanho, "nmDono": nPet.nmDono, "telefone": nPet.telefone, "observacao": nPet.observacao })
        } else if (name === "idade") {
            setNPet({ "nome": nPet.nome, "idade": value, "raca": nPet.raca, "tamanho": nPet.tamanho, "nmDono": nPet.nmDono, "telefone": nPet.telefone, "observacao": nPet.observacao })
        } else if (name === "raca") {
            setNPet({ "nome": nPet.nome, "idade": nPet.idade, "raca": value, "tamanho": nPet.tamanho, "nmDono": nPet.nmDono, "telefone": nPet.telefone, "observacao": nPet.observacao })
        } else if (name === "tamanho") {
            setNPet({ "nome": nPet.nome, "idade": nPet.idade, "raca": nPet.raca, "tamanho": value, "nmDono": nPet.nmDono, "telefone": nPet.telefone, "observacao": nPet.observacao })
        } else if (name === "nmDono") {
            setNPet({ "nome": nPet.nome, "idade": nPet.idade, "raca": nPet.raca, "tamanho": nPet.tamanho, "nmDono": value, "telefone": nPet.telefone, "observacao": nPet.observacao })
        } else if (name === "telefone") {
            setNPet({ "nome": nPet.nome, "idade": nPet.idade, "raca": nPet.raca, "tamanho": nPet.tamanho, "nmDono": nPet.nmDono, "telefone": value, "observacao": nPet.observacao })
        } else if (name === "observacao") {
            setNPet({ "nome": nPet.nome, "idade": nPet.idade, "raca": nPet.raca, "tamanho": nPet.tamanho, "nmDono": nPet.nmDono, "telefone": nPet.telefone, "observacao": value })
        }
    }

    // CRIANDO UMA FUNÇÃO PARA ADICIONAR PET
    const addPet = (e) => {
        e.preventDefault()
        setNPet({ "nome": "", "idade": "", "raca": "", "tamanho": "", "nmDono": "", "telefone": "", "observacao": "" })
        setPet([...pet, nPet])
    }


    return (
        <>
            <NavBar />
            <DivPets>
                <h1>Fomulário Pets</h1>
                <p>Digite as informações sobre o pet para realizar o cadastro.</p>
                <PetCadastro
                    digit={captura}
                    novoPet={nPet}
                    adicionarNovoPet={addPet}
                />
                
                <h1>Pets cadastrados</h1>

                {pet.map((t) =>
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
            </DivPets>
        </>
    )
}
