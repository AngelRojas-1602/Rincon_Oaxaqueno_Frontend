import React from 'react'
import {withRouter} from 'react-router'

const Saludador = (props) => {
    const {match: {params: { name }}} = props

    return (
        <div>
        {!name && <h1>Hola Bienvenid@ al Rincon Oaxaqueño </h1>}
        {name && <h1>Hola {name}!</h1>}
        </div>
    )
}

export default withRouter(Saludador)
