// Logo do template

import './logo.css'
import logo from '../../assets/images/intel.png'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => //Aside é uma tag que define bloco de conteúdo
    <aside className='logo'>
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>