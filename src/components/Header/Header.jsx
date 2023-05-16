import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <h1>PokeApi</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    {/* <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header