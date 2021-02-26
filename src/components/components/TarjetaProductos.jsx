import React from 'react'

const TarjetaProductos = (props) => {
    return (
        <div className="tarjeta-productos">
            <img className="tarjeta-product-image" src={props.picture} alt=""/>
            <h2 className='tarjeta-product-titles'>{props.name}</h2>
            <h4 className='tarjeta-product-titles'>{props.price}</h4>
            <h4 className='tarjeta-product-titles'>{props.description}</h4>
            <h4 className='tarjeta-product-titles'>{props.stock}</h4>
            {/* <p>{props.ALGO</p> */}
        </div>
    )
}

//style={{width: '50%', height: '50%'}}

export default TarjetaProductos
