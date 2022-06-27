
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//Importando do template, somente não importaremos header, já que main possui ele já

import Routes from './routes'
import Footer from '../components/template/footer'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'


//Criando o export do app:

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>