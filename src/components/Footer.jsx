import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
        <div>Si quieres contactarnos da <Link to="/contact"> Click aqui</Link></div>
        <div>© Derechos Reservados 2020 - 2021 | Angel Rojas</div>
        </footer>
    )
}

export default Footer
