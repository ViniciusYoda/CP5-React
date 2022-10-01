import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <div>
                <h1>My<span>Pet</span></h1>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cadastroPet'>Cadastro de Pets</Link></li>
                    <li><Link to='/lp'>Lista de Pets</Link></li>
                </ul>
            </div>
        </div>
    )
}
