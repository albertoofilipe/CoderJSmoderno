import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* Refactorar em casa*/}
            <a href="#/">
                <i className="fa fa-home"> Início</i>
            </a>
            <a href="#/users">
                <i className="fa fa-users"> Início</i>
            </a>
        </nav>
    </aside>
