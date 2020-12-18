import React from 'react'

const TarjetaProductos = (props) => {
    return (
        <div className="tarjeta-productos">
            <h3 className='tarjeta-product-titles'>{props.name}</h3>
            <img className="tarjeta-product-image" src={props.image} alt=""/>
            <p className='tarjeta-product-titles'>{props.status}</p>
            <p className='tarjeta-product-titles'>{props.species}</p>
            {/* <p>{props.ALGO</p> */}
        </div>
    )
}

//style={{width: '50%', height: '50%'}}

export default TarjetaProductos
