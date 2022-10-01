import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Home() {
    return (
        
        <div>
            <NavBar/>
            <h2>Bem-vindo ao My<span>Pet</span></h2>
            <p>Aqui você pode cadastrar os dados do seu pet</p>
            <div>
                <button><Link to="/cadastroPet">Cadastrar</Link></button>
            </div>
        </div>
    )
}
