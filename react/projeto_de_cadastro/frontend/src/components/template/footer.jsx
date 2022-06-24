// Rodapé do template

import './footer.css'
import React from 'react'
import github from '../../assets/images/github.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <footer className="footer">
        <hr/>
        <span>
            Desenvolvido com <i className='fa fa-heart text-danger '></i> por
            <i> </i>
            <a href='/' className='github'><img src={github} alt='github' /></a>
            <a href="https://github.com/davi12345452" > davi12345452</a>
        </span>
    </footer>