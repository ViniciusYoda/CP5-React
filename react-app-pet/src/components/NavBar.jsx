import React from 'react'
import { Link } from 'react-router-dom'
import { DivNav } from '../style/styled'

export default function NavBar() {
    return (
        <DivNav>
            <div>
                <h1>My<span>Pet</span></h1>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/lp'>Pets</Link></li>
                </ul>
            </div>
        </DivNav>
    )
}



