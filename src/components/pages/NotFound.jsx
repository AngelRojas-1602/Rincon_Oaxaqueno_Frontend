import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>
                404 | Aqui no hay nada, Lo lamento
            </h1>
            <h1>
                Para volver a la Pagina Principal da <Link to="/">click aqui</Link>
            </h1>
        </div>
    )
}

export default NotFound
