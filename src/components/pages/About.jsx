import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>Acerca de Nosotros</h1>
            Queremos saludar con cariño a:

        <ul>
            <li><Link to="/saludador/Haydee">Haydee</Link>
            </li>
            <li><Link to="/saludador/Angel">Ángel</Link>
            </li>
            <li><Link to="/saludador/Morgan">Morgan</Link>
            </li>
        </ul>
            <h1>  </h1>
        </div>
    )
}

export default About
