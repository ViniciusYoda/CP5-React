import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { DivHome } from '../style/styled'

export default function Home() {
    return (

        <>
            <NavBar />
            <DivHome>
                <h2>Bem-vindo ao My<span>Pet</span></h2>
                <p>Aqui você pode cadastrar os dados do seu pet.</p>
                <div>
                    <button><Link to="/lp">Cadastrar</Link></button>
                </div>
            </DivHome>
        </>
    )
}
