import React from 'react'

const TarjetaProductos = (props) => {
    return (
        <div className="tarjeta-productos">
            <img className="tarjeta-product-image" src={props.image} alt=""/>
            <h2 className='tarjeta-product-titles'>{props.name}</h2>
            <h4 className='tarjeta-product-titles'>{props.status}</h4>
            <h4 className='tarjeta-product-titles'>{props.species}</h4>
            {/* <p>{props.ALGO</p> */}
        </div>
    )
}

//style={{width: '50%', height: '50%'}}

export default TarjetaProductos
