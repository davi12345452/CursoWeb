// Links do template

import React from "react"
import './nav.css'
import Home from './itens-nav/i_home'
import Users from './itens-nav/i_users'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu_area">
        <nav className="menu">
            <Home/>
            <Users/>
        </nav>
    </aside>