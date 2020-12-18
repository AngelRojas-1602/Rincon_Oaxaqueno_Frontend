import React from 'react'

const TarjetaProductos = (props) => {
    return (
        <div className="tarjeta-productos">
            <h3>{props.name}</h3>
            <img style={{width: '50px'}} src={props.image} alt=""/>
            {/* <p>{props.</p> */}
        </div>
    )
}

export default TarjetaProductos
